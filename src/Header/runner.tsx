import React, {ReactElement} from 'react';
import regexes from '../utils/regexes';
import {RunnerProps, RunnerState} from './interfaces';
const fps = 60;
const styles = require('../css/header.module.css');

export default class Runner extends React.Component<
	RunnerProps,
	RunnerState
> {

	constructor(props: RunnerProps) {
		super(props);
		this.state = {
			navigation: {},
			feedPosition: 0,
			_width: 0
		};
	}

	static setSection(_location: Location, id: string) {
		return process.env.PUBLIC_URL + '/curr_news#' + id;
	}

	getNewsFeed(inc?: number): ReactElement[] | null {
		let x = this.state._width;
		let y = window.innerWidth;
		return this.props.articles.map((text: string, i: number): ReactElement => {
			let offsets = inc ? Object.entries(this.refs)
				.filter(([k]): boolean => k.startsWith('feed'))
				.map(([_k, v]): number => (v as HTMLElement).offsetLeft - this.state._width)
			: [];
			let transformation = inc ? (inc + offsets[i] - y) % x + y - offsets[i] : 0;
			if (typeof text !== 'string') return null;
			if (!text || typeof text.split !== 'function') {
				console.error('Bad Markdown document:\n', text);
				return null;
			}
			
			let lines = text.split('\n');
			let header = lines.shift().trim();
			while (header.startsWith('#')) {
				header = header.slice(1);
			}
			let id = header.match(regexes.letters).join('-').toLowerCase();
			return (
				<div key={id + '.container'} style={inc ? {
					transform: `translate3d(${transformation}px, 0, 0)`
				} : {}}>
					<a href={Runner.setSection(window.location, id)} ref={'feed' + i} key={id}>
						{header}
					</a>
					{' • '}
				</div>
			);
		});
	}

	componentDidUpdate() {
		if (this.state._width) return;
		if (this.refs.dummy && (this.refs.dummy as HTMLElement).scrollWidth) this.setState({
			_width: (this.refs.dummy as HTMLElement).scrollWidth
		});
	}

	async componentDidMount() {
		setInterval(() => {
			let feedPosition = this.state.feedPosition;
			this.setState({
				feedPosition: feedPosition + 0.5
			});
		}, 1000 / fps);
	}

	render() {
		return (
			<div className={styles.newsFeed}>
				<div className={styles.intro}>
					Latest News: 
				</div>
				<div></div>
				<div className={styles.runner}>
					<div ref='runner'>
						{this.getNewsFeed(-this.state.feedPosition)}
					</div>
					<div ref='dummy' style={{
						visibility: 'hidden'
					}}>
						{this.getNewsFeed()}
					</div>
				</div>
			</div>
		);
	}
}