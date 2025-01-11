"use client";

import React from 'react';
import { MessageCircle, Users, Zap, Shield, Globe2, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const styles = {
    main: {
      backgroundColor: '#0a0a0a',
      color: 'white',
      minHeight: '100vh',
      paddingTop: '80px'
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heroSection: {
      background: 'linear-gradient(135deg, rgba(74,158,255,0.1), rgba(107,74,255,0.1))',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    gradientText: {
      background: 'linear-gradient(45deg, #4a9eff, #6b4aff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    subHeading: {
      color: '#999',
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    button: {
      background: 'linear-gradient(45deg, #4a9eff, #6b4aff)',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'transform 0.2s'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem 0'
    },
    featureCard: {
      background: 'linear-gradient(135deg, rgba(74,158,255,0.05), rgba(107,74,255,0.05))',
      padding: '2rem',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem'
    },
    securityCard: {
      background: 'linear-gradient(135deg, rgba(74,158,255,0.05), rgba(107,74,255,0.05))',
      padding: '3rem',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem',
      marginTop: '4rem'
    },
    iconWrapper: {
      background: 'linear-gradient(45deg, #4a9eff, #6b4aff)',
      borderRadius: '50%',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    statsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      padding: '4rem 0',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #4a9eff, #6b4aff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem'
    },
    ctaSection: {
      background: 'linear-gradient(135deg, rgba(74,158,255,0.15), rgba(107,74,255,0.15))',
      borderRadius: '20px',
      padding: '4rem 2rem',
      textAlign: 'center',
      marginTop: '4rem'
    },
    ctaGradientText: {
      background: 'linear-gradient(45deg, #4a9eff, #6b4aff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    }
  };

  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <div style={styles.heroSection}>
          <h1 style={styles.gradientText}>Connect Instantly with Konnect</h1>
          <p style={styles.subHeading}>
            Experience seamless communication with our modern chat platform. 
            Connect with friends, family, and colleagues in real-time.
          </p>
          <button style={styles.button}>
            Get Started <ArrowRight size={20} />
          </button>
        </div>

        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <MessageCircle size={24} color="white" />
            </div>
            <h3>Real-time Chat</h3>
            <p>Instant messaging with real-time delivery and read receipts</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <Users size={24} color="white" />
            </div>
            <h3>Group Chats</h3>
            <p>Create and manage group conversations with ease</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconWrapper}>
              <Zap size={24} color="white" />
            </div>
            <h3>Quick Responses</h3>
            <p>Reply instantly with smart suggestions and quick reactions</p>
          </div>
        </div>

        <div style={styles.statsSection}>
          <div>
            <div style={styles.statNumber}>1M+</div>
            <p>Active Users</p>
          </div>
          <div>
            <div style={styles.statNumber}>50M+</div>
            <p>Messages Sent</p>
          </div>
          <div>
            <div style={styles.statNumber}>99.9%</div>
            <p>Uptime</p>
          </div>
        </div>

        <div style={styles.securityCard}>
          <div style={styles.iconWrapper}>
            <Shield size={24} color="white" />
          </div>
          <h2>Enterprise-Grade Security</h2>
          <p>
            Your privacy is our priority. End-to-end encryption, secure data storage,
            and compliance with global security standards ensure your conversations
            stay private.
          </p>
        </div>

        <div style={styles.ctaSection}>
          <h2 style={styles.ctaGradientText}>Ready to Get Started?</h2>
          <p style={styles.subHeading}>
            Join millions of users already connecting through Konnect
          </p>
          <button style={styles.button}>
            Start Chatting Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;