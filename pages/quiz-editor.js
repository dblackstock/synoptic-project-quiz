import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useFetchUser } from "../utils/user";
import displayQuizNamesAsButtons from "../functions/displayQuizNamesAsButtons";
import quizStyles from "../styles/ViewQuizzes.module.css";
import editorStyles from "../styles/QuizEditor.module.css";
import homeStyles from "../styles/Home.module.css";
import ConfirmModal from "../components/ConfirmModal";

export default function QuizEditor({ quizzes }) {
  const [quizSelectedId, setQuizSelectedId] = useState();
  const [quizTitle, setQuizTitle] = useState();
  const [addingQuiz, setAddingQuiz] = useState();

  const selectQuiz = ({ id, title }) => {
    setQuizSelectedId(id);
    setQuizTitle(title);
  };

  const { user, loading } = useFetchUser();
  if (loading === true) {
    return <div className={homeStyles.loading}>Loading</div>;
  } else if ((user === null && loading === false) || (user && user["https://localhost:3000/permission"] !== "edit")) {
    Router.replace("/");
    return <div className={homeStyles.loading}>Loading</div>;
  }
  return (
    <div className={styles.container} data-testid="home-page">
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav user={user} loading={loading} />
      <main className={quizStyles.quiztitleswrap}>
        {displayQuizNamesAsButtons(quizzes, selectQuiz)}
        <div
          className={quizStyles.button + " " + editorStyles.addButton}
          onClick={() => {
            setAddingQuiz(true);
          }}
        >
          Add a New Quiz
        </div>
        {addingQuiz ? <ConfirmModal cancelFunction={setAddingQuiz} /> : null}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const resultsList = await fetch("http://localhost:3000/api/get-quizzes");
  const formattedResults = await resultsList.json();
  return { props: { quizzes: formattedResults } };
}
