/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGreengrassData = /* GraphQL */ `
  mutation CreateGreengrassData(
    $input: CreateGreengrassDataInput!
    $condition: ModelGreengrassDataConditionInput
  ) {
    createGreengrassData(input: $input, condition: $condition) {
      greengrass_id
      sample_time
      greengrass_data
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateGreengrassData = /* GraphQL */ `
  mutation UpdateGreengrassData(
    $input: UpdateGreengrassDataInput!
    $condition: ModelGreengrassDataConditionInput
  ) {
    updateGreengrassData(input: $input, condition: $condition) {
      greengrass_id
      sample_time
      greengrass_data
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteGreengrassData = /* GraphQL */ `
  mutation DeleteGreengrassData(
    $input: DeleteGreengrassDataInput!
    $condition: ModelGreengrassDataConditionInput
  ) {
    deleteGreengrassData(input: $input, condition: $condition) {
      greengrass_id
      sample_time
      greengrass_data
      id
      createdAt
      updatedAt
    }
  }
`;
