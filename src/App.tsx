import React from 'react';
import Header from './components/header/Header';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        <h1>Hello Songbird</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
