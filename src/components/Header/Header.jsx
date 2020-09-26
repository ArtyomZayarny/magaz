import React from 'react';
import logo from '../../logo-os.png';
import styles from './Header.module.css'
import Navigation from './Navigation'

export default function Header() {
 
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className="logo">
                <img src={logo} alt="logo"/>
              </div>
              <Navigation />
            </div>
          </div>
       </header>
    )
}