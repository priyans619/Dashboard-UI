import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 4; 
  const totalTransactions = 40; 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=${totalTransactions}`);
        const transactionsWithAmount = response.data.results.map(transaction => ({
          ...transaction,
          amount: (Math.random() * 1000).toFixed(2) // Random amount between 0 and 1000
        }));
        setTransactions(transactionsWithAmount);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Transactions</h2>
      <ul>
        {currentTransactions.map((transaction, index) => (
          <li key={index} className="mb-4 p-4 border rounded-lg">
            <div>
              <span className="font-semibold">Name:</span> {`${transaction.name.first} ${transaction.name.last}`}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {transaction.email}
            </div>
            <div>
              <span className="font-semibold">Amount:</span> ${transaction.amount}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(transactions.length / transactionsPerPage)).keys()].map(number => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 border ${currentPage === number + 1 ? 'bg-gray-300' : 'bg-white'}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
