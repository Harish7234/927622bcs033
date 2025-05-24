import React, { useState, useEffect } from 'react';


const mockStockData = [
  { symbol: 'AAPL', price: 150.12 },
  { symbol: 'GOOGL', price: 2800.45 },
  { symbol: 'MSFT', price: 299.01 },
  { symbol: 'AMZN', price: 3450.65 },
  { symbol: 'TSLA', price: 720.22 },
];

function StockAggregator() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStockPrices = () => {
      setStocks(mockStockData);
    };

    fetchStockPrices();
  }, []);

  const averagePrice = stocks.length
    ? (stocks.reduce((acc, stock) => acc + stock.price, 0) / stocks.length).toFixed(2)
    : 0;

  return (
    <div>
      <h2>Stock Prices</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.symbol}: ${stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Average Price: ${averagePrice}</h3>
    </div>
  );
}

export default StockAggregator;
