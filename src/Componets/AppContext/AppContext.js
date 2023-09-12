import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialData = {
  openModalCreateQuestion: false,
  listChoiceCorrect: null,
  listAnswer: null,
  content: null,
  type: null,
  listQuestion: null,
  isRefreshForm: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "openModalCreateQuestion":
      return { ...state, openModalCreateQuestion: true };
    case "closeModalCreateQuestion":
      return { ...state, openModalCreateQuestion: false };
    case "typeQuestion":
      return { ...state, typeQuestion: action.payload };
    case "listAnswer":
      return { ...state, listAnswer: action.payload };
    case "listChoiceCorrect":
      return { ...state, listChoiceCorrect: action.payload };

    case "deleteListChoiceCorrect":
      return { ...state, listChoiceCorrect: null };

    case "content":
      return { ...state, content: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "createListQuestion":
      if (state.listQuestion === null) {
        return { ...state, listQuestion: [action.payload] };
      } else {
        return {
          ...state,
          listQuestion: [...state.listQuestion, action.payload],
        };
      }
    case "deleteLisQuestion":
      return { ...state, listQuestion: null };

    default:
      return state;
  }
};
function AppProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialData);
  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
