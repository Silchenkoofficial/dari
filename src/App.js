import React from 'react';
import {useMediaQuery} from 'react-responsive';

import {Desktop, Mobile} from './Screens';

function App() {
  
  const isDesktopOrMobile = useMediaQuery({
    query: '(min-width: 800px)'
  })
  return (
    <div className="App">
        {/* {
          isDesktopOrMobile ? <Desktop /> : <Mobile />
        } */}
        <Mobile />
    </div>
  );
}

export default App;
