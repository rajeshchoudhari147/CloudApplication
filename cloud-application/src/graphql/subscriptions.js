/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateToDo = /* GraphQL */ `
  subscription OnCreateToDo {
    onCreateToDo {
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
export const onUpdateToDo = /* GraphQL */ `
  subscription OnUpdateToDo {
    onUpdateToDo {
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
export const onDeleteToDo = /* GraphQL */ `
  subscription OnDeleteToDo {
    onDeleteToDo {
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
