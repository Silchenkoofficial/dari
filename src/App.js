import React from 'react';

import {About, Header, Variants, WhatInside} from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <WhatInside />
        <Variants />
        <div className="section"></div>
    </div>
  );
}

export default App;
