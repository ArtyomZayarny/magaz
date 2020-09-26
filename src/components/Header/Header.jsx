import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-os.png';
import styles from './Header.module.css'
import Navigation from './Navigation'

export default function Header() {
 
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.content}>
              <Link to="/">
                <div className="logo">
                  <img src={logo} alt="logo"/>
                </div>
              </Link>
              <Navigation />
            </div>
          </div>
       </header>
    )
}