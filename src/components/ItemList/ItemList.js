import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ItemList.scss';

class ItemList extends React.Component {
  render() {
    return (
      <ul className={s['content-list']}>
        <li className={s['list-item']}>
          <span className={s.score}>313</span>
          <span className={s.title}>
            <a href="#" target="_blank">
              Alternatives to Google Products
            </a>
            <span className={s.host}> restoreprivacy.com</span>
          </span>
          <br />
          <span className={s.meta}>
            <span>
              by{' '}
              <a href="#" className="">
                wuschel
              </a>
            </span>
            <span> 7 hours ago</span>
            <span>
              {' '}
              | <a href="#">162 Comments</a>
            </span>
          </span>
        </li>
      </ul>
    );
  }
}

export default withStyles(s)(ItemList);
