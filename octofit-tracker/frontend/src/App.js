import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/octofitapp-small.png`}
              alt="OctoFit Logo"
              width="32"
              height="32"
              className="me-2"
            />
            OctoFit Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/activities' ? ' active' : ''}`} to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/leaderboard' ? ' active' : ''}`} to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/teams' ? ' active' : ''}`} to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/users' ? ' active' : ''}`} to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${location.pathname === '/workouts' ? ' active' : ''}`} to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <div className="hero-section">
              <div className="container">
                <img
                  src={`${process.env.PUBLIC_URL}/octofitapp-small.png`}
                  alt="OctoFit Logo"
                  width="120"
                  height="120"
                  className="mb-4"
                />
                <h1>Welcome to OctoFit Tracker</h1>
                <p className="lead">Track your fitness activities, compete on leaderboards, and collaborate with teams!</p>
                <div className="mt-4">
                  <Link to="/activities" className="btn btn-primary btn-lg me-2">View Activities</Link>
                  <Link to="/leaderboard" className="btn btn-outline-light btn-lg">Leaderboard</Link>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="container mb-5">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 feature-card">
                    <div className="card-body">
                      <div className="feature-icon">&#127939;</div>
                      <h5 className="card-title">Track Activities</h5>
                      <p className="card-text text-muted">Log your workouts, runs, and fitness activities to monitor your progress over time.</p>
                      <Link to="/activities" className="btn btn-outline-primary btn-sm">View Activities</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 feature-card">
                    <div className="card-body">
                      <div className="feature-icon">&#127942;</div>
                      <h5 className="card-title">Compete</h5>
                      <p className="card-text text-muted">Climb the leaderboard and see how you rank against other fitness enthusiasts.</p>
                      <Link to="/leaderboard" className="btn btn-outline-primary btn-sm">View Leaderboard</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 feature-card">
                    <div className="card-body">
                      <div className="feature-icon">&#128101;</div>
                      <h5 className="card-title">Team Up</h5>
                      <p className="card-text text-muted">Join or create teams to collaborate with friends and stay motivated together.</p>
                      <Link to="/teams" className="btn btn-outline-primary btn-sm">View Teams</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <p className="mb-0">&copy; 2026 OctoFit Tracker &mdash; Built with <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
