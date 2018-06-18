import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Home.scss';
import ItemList from '../../components/ItemList';

class Home extends React.Component {
  static defaultProps = {
    repositories: [],
  };

  render() {
    return (
      <div className={s.container}>
        <ItemList repositories={this.props.repositories} />
      </div>
    );
  }
}

export default withStyles(s)(Home);
