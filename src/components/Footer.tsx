import React, { ReactElement } from 'react';
import { facebook, mail } from 'utils/thumbnails';
import { Link } from 'utils/link';

const styles = require('css/footer.module.css');

export default class Footer extends React.Component {

	render(): ReactElement {
		return (
			<div className={styles.footer}>
				<div className={styles.icons}>
					<Link className={styles.link} href='https://www.facebook.com/oxfordunichess/'>
						{facebook}
					</Link>
					<Link className={styles.link} href='https://www.facebook.com/groups/oxford.chess.club/'>
						{facebook}
					</Link>
					<Link className={styles.link} href='https://mailchi.mp/e4bab2111329/oxfordunichess'>
						{mail}
					</Link>
				</div>
				<div className={styles.tag}>
					<Link href='https://github.com/oxfordunichess/oucc-backend/tree/master/pages'>
						Edit these pages
					</Link>
				</div>		
			</div>
		);
	}

}