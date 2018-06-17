import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s['nav-right']} role="navigation">
        <ul className={s.menu}>
          <li>
            <Link to="/">Repositories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
