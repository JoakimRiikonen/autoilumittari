import React from 'react';
import { TravelComparisonForm } from './containers/TravelComparisonForm'

function App() {
  return (
    <div className="App">
      <TravelComparisonForm
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
}

export default App;
