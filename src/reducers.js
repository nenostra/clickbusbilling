export const rfc = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'RFC_SUCCESS':
    case 'RFC_FAILED':
      return payload;
    default: return state;
  }
};

export const orderItems = (state = [], action) => {
  const { type, payload } = action;
  switch(type) {
    case 'FETCH_ORDER_ITEMS_SUCCESS':
      return payload;
    case 'FETCH_ORDER_ITEMS_FAILURE':
    default: return state;
  }
};