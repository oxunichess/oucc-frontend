import React from 'react';
import Markdown from 'react-markdown';
import {Helmet} from 'react-helmet';
import url from 'url';

import {RouterLink} from '../utils/components';
import axios from 'axios';
import { parseHtml } from '../utils/plugins';
axios.defaults.baseURL = 'https://oxfordunichess.github.io/oucc-backend/';

const styles = require('../css/page.module.css');

export default class Page extends React.Component<{
	title?: string
	page: string
	sessionID: string
}, {
	page: string,
	wide: boolean
}> {

	public state = {
		page: '',
		wide: false
	}

	static async getPage(path: string = 'main', sessionID?: string) {
		try {
			let url = `pages/${path + '.md'}`;
			let req = await axios({
				url,
				params: {sessionID}
			});
			return req.data;
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	public setWide = () => {
		if (!this.state.wide) this.setState({
			wide: true
		});
	}

	componentDidMount() {
		axios.defaults.params = { sessionID: this.props.sessionID };
		Page.getPage(this.props.page)
			.then((page: string) => {
				this.setState({page});
			});
	}

	render() {
		let sections = this.state.page.trim().split('\n---\n');
		return (
			<>
				<Helmet>
					<title>{this.props.title ? this.props.title + ' | OUCC' : 'OUCC'}</title>
				</Helmet>
				<div className={styles.page}>
					<div className={styles.main}>
						{sections.map((section, i) => {
							return <div
								key={['section', i].join('.')}
								className={[
									styles.section,
									this.state.wide ? styles.wide : ''
								].join(' ')}
							>
								<Markdown
									source={section.trim()}
									escapeHtml={false}
									astPlugins={[parseHtml(this.props.sessionID, this.setWide)]}
									renderers={{
										link: RouterLink
									}}
									transformImageUri={(uri) => {
										if (uri.startsWith('.') || uri.startsWith('/')) uri = url.resolve('https://oxfordunichess.github.io/oucc-backend/data/', uri);
										return uri;
									}}
								/>
							</div>;
						})}		
					</div>;		
				</div>
			</>
		);
	}
}