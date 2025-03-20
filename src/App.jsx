import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataEntry from './pages/data-entry';
import Portfolio from './pages/portfolio';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            portfolioData ? (
              <Portfolio data={portfolioData} />
            ) : (
              <DataEntry onSubmit={setPortfolioData} />
            )
          } 
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio data={portfolioData} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;