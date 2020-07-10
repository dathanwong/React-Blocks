import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className="row my-2 justify-content-between">
        <div className="col-3">
          <Navigation/>
        </div>
        <div className="col-9">
          <Main>
            <div className="row justify-content-between py-2 px-2">
              <div className="col-4">
                <Subcontent/>
              </div>
              <div className="col-4">
                <Subcontent/>
              </div>
              <div className="col-4">
                <Subcontent/>
              </div>
            </div>
            <div className="row my-3 mx-1">
              <div className="col">
                <Advertisement/>
              </div>
            </div>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;
