import React from 'react';
import PieChart from './PieChart';

    const ordersData = [
      { productName: 'Product A', amount: 200 },
      { productName: 'Product B', amount: 300 },
      { productName: 'Product C', amount: 500 },
    ];
    
    const App = () => {
      return (
        <div>
          <PieChart orders={ordersData} />
        </div>
      );
    }
    
export default App;
