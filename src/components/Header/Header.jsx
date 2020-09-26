import React from 'react';
import logo from '../../logo-os.png';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <div className="logo">
              <img src={logo} alt="logo"/>
            </div>
          </div>
       </header>
    )
}