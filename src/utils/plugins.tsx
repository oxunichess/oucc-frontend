
import React, { ReactElement } from 'react';

import Profile from '../components/Profile';
import Table from '../components/Table';
import Calendar from '../components/Calendar';
import { ProfileProps, parseHTMLElement, CalendarProps, htmlParser as def } from '../pages/interfaces';

const htmlParser: def = require('react-markdown/plugins/html-parser');
const HtmlToReact = require('html-to-react');

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
export function parseHtml(sessionID?: string, setWide?: (() => void)) {
	return htmlParser({
		isValidNode: (node: parseHTMLElement) => node.type !== 'script',
		processingInstructions: [
			{
				// Custom <Table> processing
				shouldProcessNode: function (node: parseHTMLElement): boolean {
					return node.name === 'data-table';
				},
				processNode: function (node: parseHTMLElement, children: parseHTMLElement[]): ReactElement {
					return <Table {...node.attribs as {src: string}} sessionID={sessionID || undefined}/>;
				}
			},
			{
				// Custom <Calendar> processing
				shouldProcessNode: function (node: parseHTMLElement): boolean {
					return node.name === 'calendar';
				},
				processNode: function (node: parseHTMLElement, children: parseHTMLElement[]): ReactElement {
					if (setWide) setWide();
					return <Calendar {...node.attribs as CalendarProps} sessionID={sessionID || undefined}/>;
				}
			},
			{
				// Custom <Profile> processing
				shouldProcessNode:(node: parseHTMLElement): boolean => {
					return node.name === 'profile';
				},
				processNode: (node: parseHTMLElement, children: parseHTMLElement[]): ReactElement => {
					return <Profile {...node.attribs as ProfileProps}/>;
				}
			},
			{
				// Anything else
				shouldProcessNode: function (): boolean {
					return true;
				},
				processNode: processNodeDefinitions.processDefaultNode as (node: Node, children: Node[]) => ReactElement
			}
		]
	});
}