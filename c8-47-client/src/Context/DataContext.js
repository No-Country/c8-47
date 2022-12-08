import React, { createContext, useReducer, useEffect } from 'react';
import customAxios from '../Helpers/customAxios';

export const DataContext = createContext();
DataContext.displayName = 'DataContext';

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SETDATA':
      return { data: action.payload };
    default:
      return state;
  }
};

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, { data: {} });

  useEffect(() => {
    const data = localStorage.getItem('cevitaeData');

    const getData = async () => {
      const newData = await customAxios.get('/user/data');
      dispatch({ type: 'SETDATA', payload: newData });
      if (newData) localStorage.setItem('cevitaeData', JSON.stringify(newData));
    };

    if (data) {
      dispatch({ type: 'SETDATA', payload: JSON.parse(data) });
    } else {
      getData();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cevitaeData', JSON.stringify(state.data));
  }, [state.data]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

// {
//   "user_data": {
//     "_id": "638e67f0961d3295bdf46aee",
//     "email": "mail@mail.com",
//     "first_name": "pablo",
//     "last_name": "pastorino",
//     "images_urls": [],
//     "role": "user",
//     "personal": [],
//     "education": [],
//     "languages": [],
//     "experience": [],
//     "curriculums": [],
//     "presentations": [],
//     "skills": [],
//     "tags": []
//   }
// }
