/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createToDo = /* GraphQL */ `
  mutation CreateToDo(
    $input: CreateToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    createToDo(input: $input, condition: $condition) {
      id
      task
      completed
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateToDo = /* GraphQL */ `
  mutation UpdateToDo(
    $input: UpdateToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    updateToDo(input: $input, condition: $condition) {
      id
      task
      completed
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteToDo = /* GraphQL */ `
  mutation DeleteToDo(
    $input: DeleteToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    deleteToDo(input: $input, condition: $condition) {
      id
      task
      completed
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
