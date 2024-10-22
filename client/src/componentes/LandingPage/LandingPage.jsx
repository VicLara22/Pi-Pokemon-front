import React from "react";
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";



export default function LandinPage() {
    return (
        <div className={styles.fondo}>
        <h1 className={styles.title}>Pokemon App</h1>
            <Link to ='/home'>
            <button className={styles.button}>Let's go!</button>
            </Link>
            <div>
        <a
          href="https://github.com/VicLara22"
          target="_blank"
          rel=""
          className={styles.containerg}
        >
          <AiFillGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/LaraVMoyano/"
          target="_blank"
          rel=""
          className={styles.containerl}
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          href="https://www.twitter.com/VicLara_22/"
          target="_blank"
          rel=""
          className={styles.containert}
        >
          <AiFillTwitterCircle size={30} />
        </a>
      </div>
        </div>
    )
}
