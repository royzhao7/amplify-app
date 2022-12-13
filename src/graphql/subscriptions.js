/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGreengrassData = /* GraphQL */ `
  subscription OnCreateGreengrassData(
    $filter: ModelSubscriptionGreengrassDataFilterInput
  ) {
    onCreateGreengrassData(filter: $filter) {
      greengrass_id
      sample_time
      greengrass_data
    }
  }
`;
export const onUpdateGreengrassData = /* GraphQL */ `
  subscription OnUpdateGreengrassData(
    $filter: ModelSubscriptionGreengrassDataFilterInput
  ) {
    onUpdateGreengrassData(filter: $filter) {
      greengrass_id
      sample_time
      greengrass_data
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGreengrassData = /* GraphQL */ `
  subscription OnDeleteGreengrassData(
    $filter: ModelSubscriptionGreengrassDataFilterInput
  ) {
    onDeleteGreengrassData(filter: $filter) {
      greengrass_id
      sample_time
      greengrass_data
      id
      createdAt
      updatedAt
    }
  }
`;
