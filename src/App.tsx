import React,{ useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {TestComponent} from "./TestComponent";
import {Security} from "./Security";
import {update} from "./SecurityDao";

function App(props:any) {

  useEffect(()=>{
    const securities = [] as Security[];
    for(let i = 0; i < 10000; i++){
     securities.push({
         id: (10000+i).toString(),
         code: (10000+i).toString(),
         name: `证券${i}`,
         type: i%3 === 0 ? 'STOCK' : i%3 === 1 ? 'BOND' : 'FUND',
         isValid: true,
         currency: 'CNY',
         exchanges: i%3 === 0 ? ['SSE'] : i%3 === 1 ? ['SZSE'] : ['CFETS'],
         otherTypes: ['STOCK'],
         status: 'LISTING',
         issuer: 'issuer'
     })
    }

    update(securities)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><TestComponent /></div>
      <div>{props.text}</div>
    </div>
  );
}

export default App;
