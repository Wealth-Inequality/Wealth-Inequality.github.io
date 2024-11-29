import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Info, Globe, TrendingUp, 
  ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const WealthDistributionData = [
  {
    country: "United States",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 1.0 },
      { percentile: "50-90%", share: 23.0 },
      { percentile: "90-99%", share: 36.0 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.485,
    averageWealth: 403974,
    medianWealth: 121704,
    dataYear: 2022,
    source: "Federal Reserve Survey of Consumer Finances"
  },
  {
    country: "China",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 1.4 },
      { percentile: "50-90%", share: 27.5 },
      { percentile: "90-99%", share: 31.1 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.538,
    averageWealth: 119521,
    medianWealth: 26974,
    dataYear: 2021,
    source: "Credit Suisse Global Wealth Report"
  },
  {
    country: "Brazil",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 0.5 },
      { percentile: "50-90%", share: 24.1 },
      { percentile: "90-99%", share: 35.4 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.553,
    averageWealth: 54937,
    medianWealth: 9898,
    dataYear: 2020,
    source: "World Inequality Database"
  },
  {
    country: "Germany",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 2.1 },
      { percentile: "50-90%", share: 33.9 },
      { percentile: "90-99%", share: 30.0 },
      { percentile: "Top 1%", share: 34.0 }
    ],
    giniCoefficient: 0.316,
    averageWealth: 294717,
    medianWealth: 184640,
    dataYear: 2021,
    source: "OECD Wealth Distribution Database"
  },
  {
    country: "United Kingdom",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 1.5 },
      { percentile: "50-90%", share: 26.0 },
      { percentile: "90-99%", share: 34.5 },
      { percentile: "Top 1%", share: 38.0 }
    ],
    giniCoefficient: 0.445,
    averageWealth: 294636,
    medianWealth: 141624,
    dataYear: 2022,
    source: "Office for National Statistics"
  },
  {
    country: "Japan",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 3.0 },
      { percentile: "50-90%", share: 35.5 },
      { percentile: "90-99%", share: 30.5 },
      { percentile: "Top 1%", share: 31.0 }
    ],
    giniCoefficient: 0.329,
    averageWealth: 319937,
    medianWealth: 192256,
    dataYear: 2021,
    source: "Bank of Japan Wealth Survey"
  },
  {
    country: "India",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 0.2 },
      { percentile: "50-90%", share: 22.3 },
      { percentile: "90-99%", share: 37.5 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.625,
    averageWealth: 23054,
    medianWealth: 5412,
    dataYear: 2021,
    source: "World Inequality Report"
  },
  {
    country: "Russia",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 1.0 },
      { percentile: "50-90%", share: 25.0 },
      { percentile: "90-99%", share: 34.0 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.570,
    averageWealth: 56747,
    medianWealth: 14175,
    dataYear: 2020,
    source: "Credit Suisse Global Wealth Report"
  },
  {
    country: "South Africa",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 0.4 },
      { percentile: "50-90%", share: 20.5 },
      { percentile: "90-99%", share: 39.1 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.630,
    averageWealth: 23573,
    medianWealth: 5292,
    dataYear: 2021,
    source: "World Bank Wealth Distribution Data"
  },
  {
    country: "Canada",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 1.8 },
      { percentile: "50-90%", share: 30.2 },
      { percentile: "90-99%", share: 33.0 },
      { percentile: "Top 1%", share: 35.0 }
    ],
    giniCoefficient: 0.398,
    averageWealth: 288260,
    medianWealth: 148110,
    dataYear: 2022,
    source: "Statistics Canada"
  },
  {
    country: "Australia",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 1.6 },
      { percentile: "50-90%", share: 28.7 },
      { percentile: "90-99%", share: 35.7 },
      { percentile: "Top 1%", share: 34.0 }
    ],
    giniCoefficient: 0.462,
    averageWealth: 314313,
    medianWealth: 188051,
    dataYear: 2021,
    source: "Australian Bureau of Statistics"
  },
  {
    country: "Mexico",
    wealthDistribution: [
      { percentile: "Bottom 50%", share: 0.3 },
      { percentile: "50-90%", share: 21.7 },
      { percentile: "90-99%", share: 38.0 },
      { percentile: "Top 1%", share: 40.0 }
    ],
    giniCoefficient: 0.581,
    averageWealth: 34225,
    medianWealth: 6990,
    dataYear: 2020,
    source: "OECD Wealth Inequality Database"
  }
];

const FrenchRevolutionData = [
  { 
    estate: "First Estate (Clergy)", 
    population: 1, 
    wealthShare: 10,
    description: "High-ranking church officials, exempt from most taxes"
  },
  { 
    estate: "Second Estate (Nobility)", 
    population: 2, 
    wealthShare: 30,
    description: "Aristocrats with extensive land ownership and privileges"
  },
  { 
    estate: "Third Estate (Everyone Else)", 
    population: 97, 
    wealthShare: 60,
    description: "Peasants, workers, and middle class - majority of population"
  }
];

const AdvancedWealthDistributionVisualizer = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [visualizationType, setVisualizationType] = useState('bar');

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderVisualization = (countryData) => {
    switch(visualizationType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={countryData.wealthDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="percentile" />
              <YAxis label={{ value: 'Wealth Share (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="share" fill="#8884d8">
                {countryData.wealthDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={countryData.wealthDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="share"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {countryData.wealthDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={countryData.wealthDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="percentile" />
              <YAxis label={{ value: 'Wealth Share (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="share" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  const renderCountryDetails = (country) => (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{country.country}</h2>
        <Globe className="text-blue-500" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {country.wealthDistribution.map((dist, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold">{dist.percentile}</h3>
            <p className="text-xl font-bold text-blue-600">{dist.share}%</p>
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center">
          <Info className="mr-2 text-yellow-500" />
          <p>
            <strong>Gini Coefficient:</strong> {country.giniCoefficient} 
            <span className="ml-2 text-sm text-gray-500">
              (0 = perfect equality, 1 = perfect inequality)
            </span>
          </p>
        </div>
        
        <div className="flex items-center">
          <ArrowUpRight className="mr-2 text-green-500" />
          <p>
            <strong>Average Wealth:</strong> ${country.averageWealth.toLocaleString()}
          </p>
        </div>
        
        <div className="flex items-center">
          <ArrowDownRight className="mr-2 text-red-500" />
          <p>
            <strong>Median Wealth:</strong> ${country.medianWealth.toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        <p>Data from: {country.source}</p>
        <p>Year: {country.dataYear}</p>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
          Detailed Wealth Distribution Analysis
        </h1>
        
        <div className="flex justify-center mb-6 space-x-4">
          {['bar', 'pie', 'line'].map((type) => (
            <button 
              key={type}
              onClick={() => setVisualizationType(type)}
              className={`px-4 py-2 rounded capitalize ${visualizationType === type ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {type} Chart
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <select 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a Country</option>
                {WealthDistributionData.map(country => (
                  <option key={country.country} value={country.country}>
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
            {selectedCountry && 
              renderVisualization(
                WealthDistributionData.find(c => c.country === selectedCountry)
              )
            }
          </div>

          <div>
            {selectedCountry ? 
              renderCountryDetails(
                WealthDistributionData.find(c => c.country === selectedCountry)
              ) :
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-600">Select a country to see detailed insights</p>
              </div>
            }
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Understanding Wealth Distribution
          </h3>
          <p className="text-gray-700">
            This visualization breaks down wealth distribution into four key percentiles:
            Bottom 50%, 50-90%, 90-99%, and Top 1%. 
            The charts and data reveal the extreme concentration of wealth 
            in the hands of a small percentage of the population.
          </p>
          <p>
            
          </p>
          <h2 className="text-">
            Why is so little owned by so many
          </h2>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Historical Perspective: French Revolution Wealth Distribution
          </h3>
          
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={FrenchRevolutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="estate" />
              <YAxis 
                label={{ value: 'Wealth Share (%)', angle: -90, position: 'insideLeft' }}
                domain={[0, 100]}
              />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-4 shadow-lg rounded-md">
                        <p className="font-bold">{data.estate}</p>
                        <p>Population: {data.population}%</p>
                        <p>Wealth Share: {data.wealthShare}%</p>
                        <p className="text-sm text-gray-600">{data.description}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="wealthShare" fill="#8884d8">
                {FrenchRevolutionData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={
                      index === 0 ? '#FF6384' : 
                      index === 1 ? '#36A2EB' : 
                      '#FFCE56'
                    } 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 text-gray-700 space-y-4">
            <p>
              The French Revolution (1789-1799) was fundamentally driven by extreme wealth inequality. 
              Despite representing only 3% of the population, the First and Second Estates (Clergy and Nobility) 
              controlled nearly 40% of the nation's wealth.
            </p>
            <p>
              The Third Estate, comprising 97% of the population, owned just 60% of the wealth, 
              with the majority living in poverty while a small elite enjoyed immense privileges.
            </p>
            <p>
              This stark disparity ultimately led to one of the most significant social upheavals 
              in human history, demonstrating how extreme wealth concentration can lead to social revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedWealthDistributionVisualizer;
