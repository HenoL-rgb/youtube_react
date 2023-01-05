import './App.css';
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
