import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ItemList.scss';

class ItemList extends React.Component {
  render() {
    const listItems = this.props.repositories.map(repo => (
      <li className={s['list-item']} key={repo.id}>
        <span className={s.score}>{repo.stargazers_count}</span>
        <span className={s.title}>
          <a href={repo.url} target="_blank">
            {repo.name}
          </a>
          <span className={s.host}> {repo.language}</span>
        </span>
        <br />
        <span className={s.meta}>
          <span>
            by{' '}
            <a href={repo.owner.url} className="">
              {repo.owner.login}
            </a>
          </span>
          <span> | {repo.forks_count} Forks</span>
          <span> | {repo.open_issues_count} Open Issues</span>
        </span>
      </li>
    ));

    return <ul className={s['content-list']}>{listItems}</ul>;
  }
}

export default withStyles(s)(ItemList);
