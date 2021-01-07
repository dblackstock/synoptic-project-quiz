// import React from 'react'
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { UserProvider } from "../utils/user";

export default function Nav({ user, loading }) {
  let userPermission;
  if (user) {
    userPermission = user["https://localhost:3000/permission"];
  }
  return (
    <div className={styles.wrapper}>
      <UserProvider value={{ user, loading }}>
        <div className={styles.navitems}>
          <div className={styles.iconlink}>
            <Link href="/" passHref={true}>
              <a data-testid="home">
                <img src="/logo.svg" className={styles.icon}></img>
              </a>
            </Link>
          </div>
          {user != null && loading === false ? (
            <div className={styles.itemlink}>
              <Link href="/view-quizzes" passHref={true}>
                <a data-testid="view-quizzes">View Quizzes</a>
              </Link>
            </div>
          ) : null}
          {user != null && loading === false && userPermission === "edit" ? (
            <div className={styles.itemlink}>
              <Link href="/quiz-editor" passHref={true}>
                <a data-testid="quiz-editor">Quiz Editor</a>
              </Link>
            </div>
          ) : null}
        </div>
        <div className={styles.useritems}>
          {user != null && loading === false ? (
            <>
              <div>{user.nickname}</div>
              <div className={styles.itemlink}>
                <Link href="/api/logout" passHref={true}>
                  <a data-testid="logout">Logout</a>
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.itemlink}>
              <Link href="/api/login" passHref={true}>
                <a data-testid="login">Login</a>
              </Link>
            </div>
          )}
        </div>
      </UserProvider>
    </div>
  );
}
