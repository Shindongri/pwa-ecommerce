import React from 'react';
import {Query} from 'react-apollo';
import IndexPresenter from './intexPresenter';
import {INDEX_QUERY} from './indexQueries';

export default () => (
    <Query query={INDEX_QUERY}>{({data}) => <IndexPresenter data={data}/>}</Query>
)
