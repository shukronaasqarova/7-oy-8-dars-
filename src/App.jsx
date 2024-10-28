import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faPaperPlane, faChartLine, faBell, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [amount, setAmount] = useState(1.00);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleFromCurrencyChange = (e) => setFromCurrency(e.target.value);
  const handleToCurrencyChange = (e) => setToCurrency(e.target.value);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center w-full">
      <div className="bg-white w-[1100px] p-8 rounded-2xl shadow-lg">

        <div className="mx-auto flex justify-center items-center mt-10 gap-5 border rounded-full w-full max-w-[1100px] p-5">
          <button className="flex gap-5 items-center px-3 w-[200px] justify-center rounded-full bg-transparent text-gray-500 hover:bg-slate-700 hover:text-white">
            <FontAwesomeIcon icon={faCoins} />
            Convert
          </button>
          <button className="flex gap-5 items-center px-3 w-[200px] justify-center rounded-full bg-transparent text-gray-500 hover:bg-slate-700 hover:text-white">
            <FontAwesomeIcon icon={faPaperPlane} />
            Send
          </button>
          <button className="flex gap-5 items-center px-3 w-[200px] justify-center rounded-full bg-transparent text-gray-500 hover:bg-slate-700 hover:text-white">
            <FontAwesomeIcon icon={faChartLine} />
            Charts
          </button>
          <button className="flex gap-5 items-center px-3 w-[200px] justify-center rounded-full bg-transparent text-gray-500 hover:bg-slate-700 hover:text-white">
            <FontAwesomeIcon icon={faBell} />
            Alerts
          </button>
        </div>

        <div className='flex gap-5 mt-8'>
          <div className="mb-6 flex-1">
            <label className="text-gray-500 text-sm mb-2 block">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="p-4 text-2xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex items-center mb-6 flex-1">

            <div className="mr-4 flex-1">
              <label className="text-gray-500 text-sm mb-2 block">From</label>
              <select
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                className="p-4 text-2xl font-semibold border border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
              </select>
            </div>

            <FontAwesomeIcon icon={faSyncAlt} className="ml-2 mt-5 text-gray-500 cursor-pointer text-2xl mx-4" onClick={swapCurrencies} />

            <div className="flex-1">
              <label className="text-gray-500 text-sm mb-2 block">To</label>
              <select
                value={toCurrency}
                onChange={handleToCurrencyChange}
                className="p-4 text-2xl font-semibold border border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-10 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
