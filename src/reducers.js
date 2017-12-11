export const rfc = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'RFC_SUCCESS':
    case 'RFC_FAILED':
      return payload; //TODO: FIX THIS WITH REAL VALUES!!!
    default: return state;
  }
};

export const orderItems = (state = [], action) => {
  const { type, payload } = action;
  switch(type) {
    case 'FETCH_ORDER_ITEMS_SUCCESS':
    case 'FETCH_ORDER_ITEMS_FAILURE':
      return payload; //TODO: FIX THIS WITH REAL VALUES!!!
    default: return state;
  }
};