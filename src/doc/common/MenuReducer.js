import React from 'react';

const initState = {
  active: false,
};

const reducer = (state, action) => {
  console.log('action.type=' + action.type);
  switch (action.type) {
    case 'active':
      return {active: true};

    case 'inactive':
      return {active: false};
  }

};

export const MenuStateContext = React.createContext({});

export default {
  initState: initState,
  reducer: reducer,
  context: MenuStateContext,
};