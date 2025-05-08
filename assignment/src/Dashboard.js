import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const projects = [
    { id: 1, name: 'Amongus - Discovery Phase', start: 'Feb 01, 2023', end: 'Mar 05, 2023', status: 'Completed' },
    { id: 2, name: 'Wildcare - Development Project', start: 'Feb 12, 2023', end: 'April 20, 2023', status: 'Completed' },
    { id: 3, name: 'Hingutsan Web Development', start: 'April 05, 2023', end: 'October 05, 2023', status: 'In Process' },
    { id: 4, name: 'Montilisiy Ecommerce Platform', start: 'May 12, 2023', end: 'August 12, 2023', status: 'In Process' },
  ];

  return (
    <>
      <div className='dashboard-wrapper'>
        <header className='dashboard-header'>
          <h4>LOGO</h4>
          <div className='company-name'>Company Name</div>
          <input type='text' placeholder='Search' className='searchbar' />
          <span className='icon'>⚙️</span>
          <span className='icon'>👤</span>
          <span className='icon'>ⓘ</span>
        </header>
      </div>

      <div className="dashboard-container">
        <aside className="sidebar">
          <ul className="menu">
            <li><span className="icon">📅</span> Dashboard</li>
            <li><span className="icon">📄</span> Job Listings</li>
            <li><span className="icon">🎤</span> Interview Management</li>
            <li><span className="icon">👤</span> Employee</li>
            <li><span className="icon">🔔</span> Notifications</li>
            <li><span className="icon">📃</span> Contracts</li>
            <li><span className="icon">⚙️</span> System Setting</li>
          </ul>
          <button className="logout-btn"><span className="icon">↩</span> Log out</button>
        </aside>

        <main className="main-content">
          <div className="profile-section">
            <img src="/Profile.png" alt="Profile" className="profile-pic" />
            <div>
              <h2>Brooklyn Simmons</h2>
              <p>Project Manager</p>
              <p>brooklyn.s@example.com</p>
            </div>
          </div>

          <div className="tabs">
            {['Profile', 'Time Tracking', 'Projects', 'Leave'].map((tab) => (
              <span
                key={tab}
                className={activeTab === tab ? 'tab active' : 'tab'}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'Profile' && (
              <div>
                <p>This is the Profile tab content.</p>
              </div>
            )}
            {activeTab === 'Time Tracking' && (
              <div>
                <p>This is the Time Tracking tab content.</p>
              </div>
            )}
            {activeTab === 'Projects' && (
              <>
                <hr />
                <table className="project-table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Project Name</th>
                      <th>Company Name</th>
                      <th>Start Date</th>
                      <th>Finish Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((proj, index) => (
                      <tr key={proj.id}>
                        <td>{index + 1}</td>
                        <td>{proj.name}</td>
                        <td>Amazon</td>
                        <td>{proj.start}</td>
                        <td>{proj.end}</td>
                        <td>
                          <span className={`status ${proj.status.replace(' ', '').toLowerCase()}`}>
                            {proj.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {activeTab === 'Leave' && (
              <div>
                <p>This is the Leave tab content.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
