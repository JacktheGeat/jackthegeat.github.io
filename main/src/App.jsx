
import React from 'react';
import './App.css';
import Navbar from './navbar';

function App() {
  const bubble = () => {
    return <>
      <div className="bubble-cage">
          <div className='bubble'></div>
      </div>
    </>
  }

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="header">
            <h1>Hello World</h1>
            <p>My name is Jack Lynch.</p>
            <p>I am a Computer Science Major and Mathematics Minor at Union College in Schenectady NY.</p>
            <p>Here you can see me experimenting with HTML, CSS, JavaScript, and React</p>
            <p>You can look at my github and various projec using the navbar up top.</p>
        </div>
        
        <details>
            <summary>Project Posters</summary>
            <div>
                <div style={{padding: 1+"%"}}></div>
                
            </div>
        </details>
      </div>
      {bubble()}
    </>
  );
}

export default App;
