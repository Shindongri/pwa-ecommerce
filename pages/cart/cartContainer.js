import React, { Component } from 'react';
import CartPresenter from './cartPresenter';
import { Query } from 'react-apollo';
import { CART_QUERY } from './cartQueries';

class cartContainer extends Component {
    render() {
        return (
            <Query query={ CART_QUERY }>
                { ( { data } ) => <CartPresenter data={ data } /> }
            </Query>
        );
    }
}

export default cartContainer;
