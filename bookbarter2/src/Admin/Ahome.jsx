import React from 'react';
import Aheader from './Aheader';

function Ahome() {
  const containerStyle = {
    display: 'flex',
  };

  const contentStyle = {
    marginLeft: '250px',
    padding: '24px',
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    width: '100%',
  };

  const cardStyle = {
    padding: '20px',
    borderRadius: '16px',
    color: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  };

  const chartBoxStyle = {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    flex: 2,
  };

  const popularBoxStyle = {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    flex: 1,
    marginLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <Aheader />

      <div style={contentStyle}>
        {/* Top Cards */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
          <div style={{ ...cardStyle, backgroundColor: '#7c3aed', flex: 1 }}>
            <div style={{ fontSize: '14px' }}>Total Earning</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>$500.00</div>
          </div>
          <div style={{ ...cardStyle, backgroundColor: '#3b82f6', flex: 1 }}>
            <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Orders</span>
              <button style={{ backgroundColor: '#fff', color: '#3b82f6', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>Month</button>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>$108</div>
          </div>
          <div style={{ ...cardStyle, backgroundColor: '#60a5fa', flex: 1 }}>
            <div style={{ fontSize: '14px' }}>Total Income</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>$203k</div>
          </div>
        </div>

        {/* Chart and Popular Section */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Chart */}
          <div style={chartBoxStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h2 style={{ fontWeight: '600', color: '#333' }}>Total Growth</h2>
              <select style={{ padding: '4px 8px', borderRadius: '6px', fontSize: '14px' }}>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div style={{ height: '160px', background: 'linear-gradient(to right, #ddd, #bbb)', borderRadius: '12px', display: 'flex', alignItems: 'end', gap: '8px', padding: '12px' }}>
              {[100, 60, 120, 90, 160, 80, 140].map((h, i) => (
                <div key={i} style={{ backgroundColor: '#7c3aed', width: '16px', height: `${h}px`, borderRadius: '4px' }}></div>
              ))}
            </div>
          </div>

          {/* Popular Books */}
          <div style={popularBoxStyle}>
            <h2 style={{ fontWeight: '600', color: '#333', marginBottom: '12px' }}>Popular Books</h2>
            <div style={{ backgroundColor: '#f3e8ff', padding: '16px', borderRadius: '10px', marginBottom: '16px' }}>
              <div style={{ color: '#7c3aed', fontWeight: 'bold' }}>Atomic Habits</div>
              <div style={{ fontSize: '14px' }}>10% Increase in Requests</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '8px' }}>$1839.00</div>
            </div>
            <ul style={{ fontSize: '14px', lineHeight: '28px' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>The Alchemist</span><span style={{ color: 'green' }}>+10%</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Rich Dad Poor Dad</span><span style={{ color: 'red' }}>-5%</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Ikigai</span><span style={{ color: 'green' }}>+8%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ahome;
