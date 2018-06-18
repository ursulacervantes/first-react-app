import React from 'react';

import Home from './Home';
import Layout from '../../components/Layout';

async function getRepositories(fetch) {
  const resp = await fetch(
    'http://api.github.com/search/repositories?q=topic:reactjs+topic:reactjs',
  );
  const { items } = await resp.json();
  if (!items) {
    throw new Error('Failed to load the repositories.');
  }
  return items;
}

async function action({ fetch }) {
  const repositories = await getRepositories(fetch);
  return {
    chunks: ['home'],
    title: 'Home',
    component: (
      <Layout>
        <Home repositories={repositories} />
      </Layout>
    ),
  };
}

export default action;
