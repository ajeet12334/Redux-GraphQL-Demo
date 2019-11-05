import gql from 'graphql-tag'

export const FEED_QUERY = gql`
  {
    BusinessTypes : getAllBusinesses {
        businessId
        businessName
    }
  }
`

