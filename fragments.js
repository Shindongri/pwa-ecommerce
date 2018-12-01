import { gql } from 'apollo-boost';

export const PRODUCT_FRAGMENT = gql`
  fragment ProductItems on Product  {
      id
      name
      subtitle
      description
      price
      photo {
          url
      }
  }
`;
