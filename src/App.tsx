import React from 'react';
import Main from './components/Main';
import { GlobalStyling } from './styles';
import 'css-reset-and-normalize/css/reset-and-normalize.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
const App: React.FC = () => (
  <>
    <GlobalStyling />
    <Main />
  </>
);
export default App;
