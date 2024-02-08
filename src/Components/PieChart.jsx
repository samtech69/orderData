import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

class OrderPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { name: 'Completed', value: 30 },
        { name: 'Pending', value: 10 },
        { name: 'Cancelled', value: 5 }
      ]
    };
  }

  render() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    
    return (
      <PieChart width={300} height={210}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={this.state.orders}
          cx={80}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {this.state.orders.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default OrderPieChart;
