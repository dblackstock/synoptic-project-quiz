// import React from 'react'
import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconlink}>
        <Link href="/">
          <a>
            <img src="/logo.svg" className={styles.icon}></img>
          </a>
        </Link>
      </div>
      <div className={styles.itemlink}>
        <Link href="/view-quizzes">
          <a>Quiz Questions</a>
        </Link>
      </div>
      <div className={styles.itemlink}>Quiz Overview</div>
    </div>
  );
}
