import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Badge } from 'antd';

import Button from './Button';

const CART_QUERY = gql`
    {
        cart @client {
            id
        }
    }
`;

export default () => (
    <Query query={ CART_QUERY }>
    { ( { data } ) => (
        <Badge count={ data.cart.length }>
            <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
        </Badge>
    ) }
    </Query>
);
