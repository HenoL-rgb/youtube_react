import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';
import AppRouter from './AppRouter';


function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
