import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle} from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./componentes/header";
import Favoritos from './rotas/favoritos';

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', 'Indie Flower', cursive',
      monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favoritos" element={<Favoritos></Favoritos>} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
