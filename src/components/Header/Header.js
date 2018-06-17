import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={cx(s['nav-wrapper'], s.fixed)}>
          <div className={s['nav-inner-wrapper']}>
            <nav className={s.scrolled}>
              <Link to="/" className={s.title}>
                Demo
              </Link>
              <div className={s.menu}>
                <Navigation />
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
