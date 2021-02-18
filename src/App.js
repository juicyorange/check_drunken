import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Form from './routes/Form';
import Home from './routes/Home';
import { createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color : #eff3f7;
    height : 100%;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <HashRouter>
        <Route path="/" exact={true} component={Form}/>
        <Route path="/Home" component={Home}/>
      </HashRouter>
    </>
  );
}

export default App;
