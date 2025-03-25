import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>TMS Pro</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Streamline Your Logistics with AI</h2>
        <p>Optimize routes, track shipments, and grow with our Transportation Management System.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Core Features</h2>
        <div className="feature-list">
          <div>AI-Powered Route Optimization</div>
          <div>Real-Time Shipment Tracking</div>
          <div>Predictive Maintenance</div>
          <div>Carbon Footprint Calculator</div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-list">
          <div className="plan">
            <h3>Freemium</h3>
            <p>$0/month - Limited Features</p>
          </div>
          <div className="plan">
            <h3>Basic</h3>
            <p>$100/month - Core Features</p>
          </div>
          <div className="plan">
            <h3>Advanced</h3>
            <p>$250/month - Full Suite</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 TMS Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;