/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGreengrassData = /* GraphQL */ `
  query GetGreengrassData($id: ID!) {
    getGreengrassData(id: $id) {
      greengrass_id
      sample_time
      greengrass_data
      id
      createdAt
      updatedAt
    }
  }
`;
export const listGreengrassData = /* GraphQL */ `
  query ListGreengrassData(
    $filter: ModelGreengrassDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGreengrassData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        greengrass_id
        sample_time
        greengrass_data
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
