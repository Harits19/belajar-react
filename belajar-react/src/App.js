import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import Tittle from './Tittle';

function Home(){
  return <h2>Halaman Home</h2>
}

function ListView(){
  return <h2>Semua User </h2>
}

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/users'> User </Link></li>
          </nav>

          <main>
            <Route path='/' exact component={Home}></Route>
            <Route path='/users' exact component={ListView}></Route>
          </main>

        </div>
      </BrowserRouter>
      
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Tittle />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
