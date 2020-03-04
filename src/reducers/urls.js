export const urls = (state = [], action) => {
	console.log(action.urls)
  switch (action.type) {
    case 'SET_URLS':
      return action.urls
    case 'ADD_URLS':
      return [...state, action.urls]  
    default:
      return state;
  }
};
