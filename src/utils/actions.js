export const CREATE_TODO = 'CREATE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';

export function createTodo(data) {
  return {
    type: CREATE_TODO,
    data
  };
}

export function markCompleted(id) {
  return {
    type: MARK_COMPLETED,
    id
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  };
}
