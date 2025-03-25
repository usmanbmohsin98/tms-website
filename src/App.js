import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Globe from 'react-globe.gl';
import Marquee from 'react-fast-marquee';
import './App.css';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* Header */}
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/logo.png" alt="TMS Pro Logo" className="logo" />
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      {/* Hero Section with Particle Background */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
        <div className="hero-content">
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Streamline Your Logistics with AI
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Optimize routes, track shipments, and grow with our Transportation Management System.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero-button"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* Testimonials Marquee */}
      <section className="testimonials">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>
        <Marquee speed={50} gradient={false}>
          {[
            { name: 'Global Logistics Inc.', quote: 'TMS Pro reduced our delivery times by 30%!' },
            { name: 'Freight Forward Co.', quote: 'The AI route optimization is a game-changer.' },
            { name: 'Eco Transports', quote: 'We lowered our carbon footprint significantly.' },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.quote}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Features Section with 3D Cards */}
      <section id="features" className="features">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Core Features
        </motion.h2>
        <div className="feature-list">
          {[
            { title: 'AI-Powered Route Optimization', icon: '🚚' },
            { title: 'Real-Time Shipment Tracking', icon: '📍' },
            { title: 'Predictive Maintenance', icon: '🔧' },
            { title: 'Carbon Footprint Calculator', icon: '🌍' },
          ].map((feature, index) => (
            <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <motion.div
                className="feature-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Globe Section */}
      <section className="globe-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Global Logistics Solutions
        </motion.h2>
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="#0a0a23"
          width={window.innerWidth}
          height={600}
          pointsData={[
            { lat: 40.7128, lng: -74.0060, size: 0.5, color: '#00ffcc' }, // New York
            { lat: 51.5074, lng: -0.1278, size: 0.5, color: '#ff00ff' }, // London
            { lat: 35.6762, lng: 139.6503, size: 0.5, color: '#00ffcc' }, // Tokyo
          ]}
          pointRadius={0.5}
          pointColor="color"
          pointAltitude="size"
        />
      </section>

      {/* Pricing Section with Animated Cards */}
      <section id="pricing" className="pricing">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pricing Plans
        </motion.h2>
        <div className="pricing-list">
          {[
            { name: 'Freemium', price: '$0/month', desc: 'Limited Features' },
            { name: 'Basic', price: '$100/month', desc: 'Core Features' },
            { name: 'Advanced', price: '$250/month', desc: 'Full Suite' },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className="plan"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
              <p>{plan.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section with CTA Form */}
      <section id="contact" className="contact">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form
          className="contact-form"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero-button"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TMS Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;