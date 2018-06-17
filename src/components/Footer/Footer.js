import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';

import s from './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={cx(s['footer-row'], s.bottom)}>
          <div>First React Webapp</div>
        </div>
        <div className={cx(s['footer-row'], s.socials)}>
          <div>
            <a
              href="https://github.com/ursulacervantes/first-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
