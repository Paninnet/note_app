import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { AlertState } from './context/AlertState';


function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  )
}

export default App;
