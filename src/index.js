import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';
import { SurveyContainer } from './components/survey/Survey.container';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <SurveyContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
