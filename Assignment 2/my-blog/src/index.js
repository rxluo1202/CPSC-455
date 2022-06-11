import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let cardJSON = `[
  {
    "title": "Spaghetti",
    "ingredients": ["Spaghetti", "Tomato Sauce", "Cheese"],
    "instructions": ["Add Spaghetti to water", "Boil for 10 minutes", "Drain Spaghetti", "Add sauce", "Add cheese", "Enjoy!"],
    "id": 0
  },
  {
    "title": "Scrambled Eggs",
    "ingredients": ["Eggs", "Butter"],
    "instructions": ["Crack eggs", "Beat in bowl", "Heat up pan and add butter", "Add eggs", "Cook", "Enjoy!"],
    "id": 1
  },
  {
    "title": "Hot Water",
    "ingredients": ["Water"],
    "instructions": ["Add water to kettle", "Heat", "Enjoy!"],
    "id": 2
  }
]`;
let cards = JSON.parse(cardJSON);

const counterReducer = (state = cards, action) => {
  switch (action.type) {
    case 'NEW_RECIPE':
      const title = action.data.title;
      const ingredients = action.data.ingredients;
      const instructions = action.data.instructions;
      const id = action.data.id;
      return [...state, { title, ingredients, instructions, id }];
    case 'DELETE_ALL_RECIPES':
      return [];
    case 'DELETE_RECIPE':
      let newState = state.filter((card) => card.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
