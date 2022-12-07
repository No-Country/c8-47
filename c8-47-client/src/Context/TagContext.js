import React, { createContext, useEffect, useReducer } from 'react';

export const TagContext = createContext();
TagContext.displayName = 'TagContext';

export const tagReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT':
      return { tag: action.payload };
    default:
      return state;
  }
};

export const TagContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tagReducer, { tag: null });

  return (
    <TagContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TagContext.Provider>
  );
};

// {
//   "tag": {
//     "name": "Test",
//     "description": "Esta es una tag para probar",
//     "user": "638e67f0961d3295bdf46aee",
//     "_id": "638fc8dbc5dafb7b85a31fe7"
//   },
//   "message": "Tag agregado con éxito"
// }
