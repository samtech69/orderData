import React from 'react';
import BarChart from './BarChart';
import Dasboard from './Dasboard';

const usersData = [
  { month: 'January', status: 'DELIVERED', count: 10 },
  { month: 'January', status: 'NDR', count: 14 },
  { month: 'January', status: 'RTO', count: 13 },
  { month: 'February', status: 'DELIVERED', count: 11 },
  { month: 'February', status: 'NDR', count: 5 },
  { month: 'February', status: 'RTO', count: 55 },
  { month: 'March', status: 'DELIVERED', count: 22 },
  { month: 'March', status: 'NDR', count: 26 },
  { month: 'March', status: 'RTO', count: 44 },
  { month: 'April', status: 'DELIVERED', count: 33 },
  { month: 'April', status: 'NDR', count: 74 },
  { month: 'April', status: 'RTO', count: 35 },
  { month: 'May', status: 'DELIVERED', count: 18 },
  { month: 'May', status: 'NDR', count: 66 },
  { month: 'May', status: 'RTO', count: 6 },
  { month: 'June', status: 'DELIVERED', count: 15 },
  { month: 'June', status: 'NDR', count: 3 },
  { month: 'June', status: 'RTO', count: 17 },
  { month: 'July', status: 'DELIVERED', count: 34 },
  { month: 'July', status: 'NDR', count: 7 },
  { month: 'July', status: 'RTO', count: 14 },
  { month: 'August', status: 'DELIVERED', count:45 },
  { month: 'August', status: 'NDR', count:85 },
  { month: 'August', status: 'RTO', count:55 },
  { month: 'September', status: 'DELIVERED', count: 10 },
  { month: 'September', status: 'NDR', count: 22 },
  { month: 'September', status: 'RTO', count: 16 },
  { month: 'October', status: 'DELIVERED', count: 20 },
  { month: 'October', status: 'NDR', count: 30 },
  { month: 'October', status: 'RTO', count: 40 },
  { month: 'November', status: 'DELIVERED', count: 23 },
  { month: 'November', status: 'NDR', count: 23 },
  { month: 'November', status: 'RTO', count: 33 },
  { month: 'December', status: 'DELIVERED', count: 10 },
  { month: 'December', status: 'NDR', count: 15 },
  { month: 'December', status: 'RTO', count: 10 },
  
  // Add more month-wise order data as needed
];

const Test = () => {
  return (
    <>
    <div>
      <BarChart users={usersData} />
    </div>
    </>
    
  );
};

export default Test;

