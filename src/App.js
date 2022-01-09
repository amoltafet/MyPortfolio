import './App.css';
import React from 'react';
import {Row, Col} from 'react-bootstrap'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

function App() {
  return (
    <div className="App">
       <div className='left'>
            <LeftColumn />
       </div>
       <div className='right'>
            <RightColumn />

       </div>    
            
    </div>
  );
}

export default App;
