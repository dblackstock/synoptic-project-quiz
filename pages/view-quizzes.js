import { useState, useEffect } from "react";
import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import quizStyles from "../styles/ViewQuizzes.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import displayQuizNamesAsButtons from "../functions/displayQuizNamesAsButtons";
import displayQuestionsAsCards from "../functions/displayQuestionsAsCards";
import retrieveQuestionsForQuiz from "../functions/retrieveQuestionsForQuiz";
import retrieveAnswerForQuestion from "../functions/retrieveAnswerForQuestion";
import Router from "next/router";
import { useFetchUser } from "../utils/user";
import fetch from "isomorphic-unfetch";

export default function ViewQuizzes({ quizzes }) {
  const { user, loading } = useFetchUser();

  let answerViewPermission = false;
  if (
    user &&
    (user["https://localhost:3000/permission"] === "edit" || user["https://localhost:3000/permission"] === "view")
  ) {
    answerViewPermission = true;
  }

  const [quizSelectedId, setQuizSelectedId] = useState();
  const [quizTitle, setQuizTitle] = useState();
  const [quizQuestions, setQuizQuestions] = useState();

  const selectQuiz = ({ id, title }) => {
    setQuizSelectedId(id);
    setQuizTitle(title);
  };

  const clearQuiz = () => {
    selectQuiz({ id: null, title: null });
    setQuizQuestions(null);
  };

  useEffect(() => {
    if (quizSelectedId) {
      (async () => {
        const questions = await retrieveQuestionsForQuiz(quizSelectedId);
        setQuizQuestions(questions);
      })();
    }
  }, [quizSelectedId]);

  if (loading === true) {
    return <div className={homeStyles.loading}>Loading</div>;
  } else if (user === null && loading === false) {
    Router.replace("/");
    return <div className={homeStyles.loading}>Loading</div>;
  }
  return (
    <div className={homeStyles.container} data-testid="view-quiz-page">
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav user={user} loading={loading} />

      {quizQuestions ? (
        <main className={quizStyles.quizquestionswrap}>
          <h1 className={quizStyles.quiztitle}>{quizTitle}</h1>
          <div
            data-testid="back-button"
            className={quizStyles.backbutton + " " + quizStyles.button}
            onClick={clearQuiz}
          >
            Back to Quiz List
          </div>
          {displayQuestionsAsCards(quizQuestions, retrieveAnswerForQuestion, answerViewPermission)}
        </main>
      ) : (
        <main className={quizStyles.quiztitleswrap}>{displayQuizNamesAsButtons(quizzes, selectQuiz)}</main>
      )}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const resultsList = await fetch("http://localhost:3000/api/get-quizzes");
  const formattedResults = await resultsList.json();
  return { props: { quizzes: formattedResults } };
}
