import {gql} from 'apollo-boost';

export const INDEX_QUERY = gql`{
    categories {
        id
        createdAt
        name
    }
    onSale: products(where: {sale: true})
    {
        id
        name
        description
        price
        photo {
            url
        }
    }
    notOnSale: products(where: {sale: false})
    {
        id
        name
        description
        price
        photo {
            url
        }
    }
    allProducts: products
    {
        id
        name
        description
        price
        photo {
            url
        }
    }
}`;
