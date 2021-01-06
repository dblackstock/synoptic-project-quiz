import { useState, useEffect } from "react";
import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import quizStyles from "../styles/ViewQuizzes.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import retrieveQuizNamesAsButtons from "../functions/retrieveQuizNamesAsButtons";
import displayQuestionsAsCards from "../functions/displayQuestionsAsCards";
import retrieveQuestionsForQuiz from "../functions/retrieveQuestionsForQuiz";
import Router from "next/router";
import { useFetchUser } from "../utils/user";

export default function ViewQuizzes() {
  const { user, loading } = useFetchUser();
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
      setQuizQuestions(retrieveQuestionsForQuiz(quizSelectedId));
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
          <div data-testid="back-button" id={quizStyles.backbutton} onClick={clearQuiz}>
            Back to Quiz List
          </div>
          {displayQuestionsAsCards(quizQuestions)}
        </main>
      ) : (
        <main className={quizStyles.quiztitleswrap}>{retrieveQuizNamesAsButtons(selectQuiz)}</main>
      )}
      <Footer />
    </div>
  );
}
