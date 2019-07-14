import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { SurveyContainer } from './components/survey';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <SurveyContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
