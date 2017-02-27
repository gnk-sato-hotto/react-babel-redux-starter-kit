import React from 'react';
import { render }       from 'react-dom';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import { ReduxRouter }  from 'redux-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";

import confStore from 'stores/confStore';

injectTapEventPlugin();

const store = confStore();

render((
  <div>
    <Provider store={store}>
      <MuiThemeProvider>
        <ReduxRouter />
      </MuiThemeProvider>
    </Provider>
  </div>
), document.querySelector('#app'));
