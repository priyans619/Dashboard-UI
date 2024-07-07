import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Overview from './pages/overview/Overview';


function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <LeftSidebar />
        
        <main className="flex-1 p-4 md:ml-[240px]">
        <Header />
          <div className="mt-4">
            <Routes>
              <Route exact path="/overview" element={<Overview/>} />
            </Routes>
          </div>
        </main>

      </div>
    </Router>
  );
}

export default App;
