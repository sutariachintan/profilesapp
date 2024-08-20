/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $profileOwner: String
  ) {
    onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
  }
`;
