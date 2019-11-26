import React, { ReactElement } from 'react';
import Event from './event';
import axios from 'axios';

import { CalendarProps, GoogleCalendar, GoogleEvent, StringDictionary, BooleanDictionary, EventDictionary, CalendarSettings, StyleDictionary, CalendarState } from './interfaces';

export default class Calendar extends React.Component<{
	settings: CalendarSettings,
	styles: StyleDictionary
}, {
	calendarIDs: StringDictionary,
	today: number,
	start: Date,
	finish: Date,
	events: EventDictionary,
	colours: StringDictionary,
	colourStatuses: BooleanDictionary,
	locationReplacers: StringDictionary,
	mapsLink: string,
	days: string[],
	mounted: boolean
}> {

	constructor(props: CalendarProps) {
		super(props);
		this.state = {
			calendarIDs: {},
			today: Calendar.getEventDate(Date.now()),
			start: new Date(this.props.settings.start || '6 October 2019'),
			finish: new Date(this.props.settings.finish || '8 December 2019'),
			events: {},
			colours: {},
			colourStatuses: {},
			locationReplacers: {},
			mapsLink: '',
			days: [],
			mounted: false
		};
		this.updateColourStatuses = this.updateColourStatuses.bind(this);
	}

	interpretProps(props: CalendarProps): CalendarState {
		return {
			calendarIDs: props.settings.calendarIDs,
			today: Calendar.getEventDate(Date.now()),
			start: new Date(props.settings.start || '6 October 2019'),
			finish: new Date(props.settings.finish || '8 December 2019'),
			events: {},
			colours: {},
			colourStatuses: {},
			locationReplacers: props.settings.locationReplacers,
			mapsLink: props.settings.mapsLink,
			days: props.settings.days
		};
	}

	//Here we do a complicated process to see if we need to render new events or not
	componentDidUpdate() {

		//First off, differentiate between oldProps and newProps
		let prevCalendarIDs = Object.assign({}, this.state.calendarIDs || {}) as StringDictionary;
		let state = {} as CalendarState;

		//Second off, if there's any reason to update at all (i.e. if you're received some calendarIDs) then interpret those
		//And make a copy of the state since we can't rely on this.setState to reach this.renderEvents in time
		if (!Object.keys(this.props.settings.calendarIDs).length) return;
		if (Object.keys(prevCalendarIDs).length !== Object.keys(this.props.settings.calendarIDs).length) {
			state = this.interpretProps(this.props);
			this.setState(state);
		};
		
		//Then, make an object identifying the updates
		let obj = {} as StringDictionary;
		for (let [k, v] of Object.entries(this.props.settings.calendarIDs)) {
			if (prevCalendarIDs[k]) continue;
			obj[k] = v;
		}
		
		//Thirdly then, if there are differences, send off those differences to be rendered
		if (!Object.keys(obj).length) return;
		this.renderEvents(obj, state)
			.then(() => {
				let now = Date.now();
				if (state.start.getTime() < now && state.finish.getTime() > now) {
					window.location = Calendar.setSection(window.location, this.state.today) as unknown as Location;
				}
			})
			.catch(console.error);
	}

	static setSection(location: Location, id: number): string {
		return location.href.slice(0, -location.hash.length) + '#' + id.toString();
	}

	static getEventDate(date: number | Date | string): number {
		let obj = new Date(date);
		obj.setHours(0);
		obj.setMinutes(0);
		obj.setSeconds(0);
		obj.setMilliseconds(0);
		return obj.valueOf() / 1000;
	}

	static isDateEqual(date1: Date, date2: Date): boolean {
		if (date1.getFullYear() !== date2.getFullYear()) return false;
		if (date1.getMonth() === date2.getMonth()) return false;
		if (date1.getDate() === date2.getDate()) return false;
		return true;
	}

	static getDisplayTime(date: Date): string {
		return date.getHours() + ':' + '0'.repeat(2 - date.getMinutes().toString().length) + date.getMinutes();
	}

	renderFrame(): ReactElement {
		let weeks = [];
		for (let i = 0; i < 9; i++) {
			let curr = new Date(this.state.start);
			curr.setDate(curr.getDate() + 7 * i);
			weeks.push(curr);
		}
		return (
			<table className={this.props.styles.table}>
				<thead>
					<tr>
						{[this.props.settings.title, ...this.props.settings.days].map((day, i) => {
							return <th scope='column' key={[day, i].join('.')} className={i ? '' : this.props.styles.firstColumn}>{day}</th>;
						})}
					</tr>
				</thead>
				<tbody>						
					{weeks.map((week, i) => {
						let days = [];
						for (let i = 0; i < 7; i++) {
							let date = new Date(new Date(week).setDate(week.getDate() + i));
							let timestamp = Calendar.getEventDate(date);
							let today = false;
							if (this.state.today === timestamp) today = true;
							let day = (
								<td id={timestamp.toString()} key={timestamp.toString()} className={today ? this.props.styles.today : this.props.styles.cell}>
									<div>
										{this.state.events[timestamp] && !Object.values(this.state.events[timestamp]).every(e => !this.state.colourStatuses[e.color]) ? this.state.events[timestamp]
											.sort((a, b) => {
												if (a.start.getHours() !== b.start.getHours()) return a.start.getHours() - b.start.getHours();
												else return a.start.getMinutes() - b.start.getMinutes();
											})
											.map((event, i) => {
												return (
													<div className={this.props.styles.event} key={[timestamp, i].join('.')} style={this.state.colourStatuses[event.color] ? {} : {
														display: 'none'
													}}>
														<div className={this.props.styles.eventHeader}>
															{<h4 className={this.props.styles.eventName}>
																{<span className={this.props.styles.status} style={{
																	color: event.color
																}}>⬤</span>}
																{<span className='toolTip'>{/* TODO */}</span>}
																{event.facebookEvent ? <a className={this.props.styles.eventTitle} href={event.facebookEvent}>
																	{event.title}
																</a> : event.title}
															</h4>}
														</div>
														{<div>
															<h5>
																{Calendar.getDisplayTime(event.start)}
																{' '}
																{event.map ?
																	<a href={event.map} rel='noopener noreferrer' target='_blank'>
																		{event.location}
																	</a>
																: event.location}
																{'\n'}
																{event.description || null}
															</h5>
														</div>}
													</div>
												);
											})
											: <div className={this.props.styles.dateNumber}>{date.getDate()}</div>}
									</div>
								</td>
							);
							days.push(day);
						}
						return <tr key={'week.' + i}>
							<th scope='row' className={this.props.styles.firstColumn}>
								{'Week ' + i + '\n' + week.toDateString().slice(4, 10)}
							</th>
							{days}						
						</tr>;
					})}
				</tbody>
			</table>
		);
	}

	renderEvents(calendarIDs: StringDictionary, state: CalendarState): Promise<void[]> {
		let colours: StringDictionary = {};
		return Promise.all(Object.keys(calendarIDs).map((calendarId) => {
			return axios({
				baseURL: 'https://clients6.google.com/calendar/v3/calendars/',
				url: calendarId + '/events',
				params: {
					calendarId,
					singleEvents: true,
					timeZone: 'Europe/London',
					maxAttendees: 1,
					maxResults: 250,
					sanitizeHtml: true,
					timeMin: new Date(state.start).toISOString(), //'2019-10-27T00:00:00Z',
					timeMax: new Date(state.finish).toISOString(), //'2019-12-01T00:00:00Z',
					key: 'AIzaSyDahTZUtTKORUdsOY3H7BEeOXbwye0nBHI' //AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs'
				}
			})
				.then((res): any => {
					let data = res.data as GoogleCalendar;
					return data;
				})
				.then((data: GoogleCalendar): [string, GoogleEvent[]] => {
					return [data.summary, data.items];
				})
				.then(([calendarName, events]: [string, GoogleEvent[]]): [StringDictionary, Event[]] => {
					let res = events.map((event) => {			
						let color = calendarIDs[calendarId];
						if (!colours[color]) colours[color] = calendarName;
						return new Event(event, calendarName, color, state);
					});
					return [colours, res];
				})
				.then(([colours, events]: [StringDictionary, Event[]]): [StringDictionary, EventDictionary] => {
					let dates = state.events;
					events.forEach((event) => {
						let date = Calendar.getEventDate(event.start);
						if (!dates[date]) dates[date] = [];
						dates[date].push(event);
					});
					return [colours, dates];
				})
				.then(([colours, events]: [StringDictionary, EventDictionary]) => {
					let colourStatuses = Object.keys(colours).reduce((acc: BooleanDictionary, curr: string) => {
						acc[curr] = true;
						return acc;
					}, {} as BooleanDictionary);
					this.setState({colours, colourStatuses, events});
				})
				.catch(console.error);
		}));
	}

	updateColourStatuses(color: string): void {
		let colourStatuses = Object.assign({}, this.state.colourStatuses);
		colourStatuses[color] = !colourStatuses[color];
		this.setState({
			colourStatuses
		});
	}

	renderKey(): ReactElement {
		let sorted = Object.entries(this.state.colours).sort((a, b) => {
			if (a[1] < b[1]) return -1;
			else if (a[1] > b[1]) return 1;
			else return 0;
		});
		return <div className={this.props.styles.key}>
			{sorted.map(([color, calendarName], i) => {
				return <div className={this.props.styles.key} key={['keyElement', i].join('.')}>
					{<span className={this.props.styles.status} onClick={() => this.updateColourStatuses(color)} style={{
						color
					}}>{this.state.colourStatuses[color] ? '\u2b24' : '\u2b58'}</span>}
					<h4>{'\u200b ' + calendarName}</h4>
				</div>;
			})}
		</div>;
	}

	render(): ReactElement {
		return (
			<>
				{this.renderKey()}
				{this.renderFrame()}
			</>
		);
	}

}