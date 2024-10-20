import React, { useEffect, useState } from "react";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const DashboardPage = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCryptos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Dashboard</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">#</th>
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Symbol</th>
            <th className="border border-gray-300 p-2 text-right">
              Price (USD)
            </th>
            <th className="border border-gray-300 p-2 text-right">
              Market Cap
            </th>
            <th className="border border-gray-300 p-2 text-right">
              Volume (24h)
            </th>
            <th className="border border-gray-300 p-2 text-right">
              Change (24h)
            </th>
            <th className="border border-gray-300 p-2 text-left">Image</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">
                {crypto.market_cap_rank}
              </td>
              <td className="border border-gray-300 p-2">{crypto.name}</td>
              <td className="border border-gray-300 p-2">
                {crypto.symbol.toUpperCase()}
              </td>
              <td className="border border-gray-300 p-2 text-right">
                ${crypto.current_price.toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2 text-right">
                ${crypto.market_cap.toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2 text-right">
                ${crypto.total_volume.toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2 text-right">
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="border border-gray-300 p-2">
                <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
