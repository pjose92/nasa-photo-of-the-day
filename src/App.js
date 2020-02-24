import React from "react";
import TheSpaceInfo from './components/TheSpaceInfo';
import "./App.css";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: #aaa 0 10px 60px;
  background: black;
  padding: 40px;
  color: white;
`;

function App () {
  return (
    <header>
      <AppWrapper>
      <h1>NASA Photo of The Day</h1>
        <img
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          alt="Nasa Logo"
        />
      </AppWrapper>
      <TheSpaceInfo />
    </header>

  );
};

export default App;

// function App() {
//   return (
    
//     <div className="App">
//       <h1> NASA Photo of The Day</h1>
      // <TheSpaceInfo />
//     </div>
//   );
// }

// export default App;
