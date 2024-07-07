import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Overview from './pages/overview/Overview';
import Transactions from './pages/Transactions';
import Invoices from './pages/Invoices';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <LeftSidebar />

        <main className="flex-1 md:ml-[240px] bg-[#F7F9FB]">
          <Header />
          <div className="">
            <Routes>
              <Route exact path="/overview" element={<Overview />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </div>
        </main>

        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;
