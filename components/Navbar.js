"use client";

import React, { useState } from 'react';
import { MessageCircle, Users, Bell, Settings, Menu, X } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    nav: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '0 2rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      boxSizing: 'border-box',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      color: 'white'
    },
    brandText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #4a9eff, #6b4aff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    desktopMenu: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      textDecoration: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '8px',
      border: 'none',
      background: 'none',
      fontSize: '1rem'
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '8px',
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem 0',
      '@media (max-width: 768px)': {
        display: isOpen ? 'flex' : 'none'
      }
    },
    notificationBadge: {
      position: 'relative',
      display: 'inline-flex'
    },
    badge: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      background: '#ff4757',
      color: 'white',
      fontSize: '0.75rem',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    userButtonWrapper: {
      marginLeft: '1rem'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a href="/" style={styles.brand}>
          <MessageCircle size={24} color="#4a9eff" />
          <span style={styles.brandText}>Konnect</span>
        </a>

        <div style={styles.desktopMenu}>
          <a href="/chat" style={styles.menuItem}>
            <MessageCircle size={20} />
            <span>Chats</span>
          </a>
          <a href="/contacts" style={styles.menuItem}>
            <Users size={20} />
            <span>Contacts</span>
          </a>
          <button style={styles.menuItem}>
            <div style={styles.notificationBadge}>
              <Bell size={20} />
              <span style={styles.badge}>3</span>
            </div>
          </button>
          <button style={styles.menuItem}>
            <Settings size={20} />
          </button>
          <div style={styles.userButtonWrapper}>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>

        <button 
          style={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div style={styles.mobileMenu}>
        <a href="/chat" style={styles.menuItem}>
          <MessageCircle size={20} />
          <span>Chats</span>
        </a>
        <a href="/contacts" style={styles.menuItem}>
          <Users size={20} />
          <span>Contacts</span>
        </a>
        <button style={styles.menuItem}>
          <div style={styles.notificationBadge}>
            <Bell size={20} />
            <span style={styles.badge}>3</span>
          </div>
          <span>Notifications</span>
        </button>
        <button style={styles.menuItem}>
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <div style={styles.userButtonWrapper}>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;