import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useFetchUser } from "../utils/user";
import displayQuizNamesAsButtons from "../functions/displayQuizNamesAsButtons";
import retrieveQuestionsForEditing from "../functions/retrieveQuestionsForEditing";
import quizStyles from "../styles/ViewQuizzes.module.css";
import editorStyles from "../styles/QuizEditor.module.css";
import homeStyles from "../styles/Home.module.css";
import ConfirmModal from "../components/ConfirmModal";
import saveQuiz from "../functions/saveQuiz";
import deleteQuiz from "../functions/deleteQuiz";
import createQuestion from "../functions/createQuestion";
import Editor from "../components/Editor";

export default function QuizEditor({ quizzes }) {
  const [quizSelectedId, setQuizSelectedId] = useState();
  const [quizTitle, setQuizTitle] = useState();
  const [addingQuiz, setAddingQuiz] = useState();
  const [deletingQuiz, setDeletingQuiz] = useState();
  const [addingQuestion, setAddingQuestion] = useState();
  const [quizQuestions, setQuizQuestions] = useState();

  const selectQuiz = ({ id, title }) => {
    setQuizTitle(title);
    setQuizSelectedId(id);
  };

  const clearQuiz = () => {
    selectQuiz({ id: null, title: null });
    setQuizQuestions(null);
  };

  const openQuizModal = (quizId) => {
    setDeletingQuiz(true);
    setQuizSelectedId(quizId);
  };

  useEffect(() => {
    if (quizSelectedId && quizTitle) {
      (async () => {
        const questions = await retrieveQuestionsForEditing(quizSelectedId);
        setQuizQuestions(questions);
      })();
    }
  }, [quizTitle]);

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
        <title>Edit Quiz - QZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav user={user} loading={loading} />
      {quizQuestions ? (
        <main className={editorStyles.editpagewrap}>
          {addingQuestion ? (
            <ConfirmModal
              confirmFunction={() => {
                createQuestion({
                  questions: quizQuestions,
                  quizId: quizSelectedId,
                  setQuestions: setQuizQuestions,
                });
              }}
              cancelFunction={setAddingQuestion}
              headerText="Create a new question"
              addingQuestion={true}
              confirmButtonText="Create"
              numberOfQuestions={quizQuestions.length}
            />
          ) : null}
          <Editor
            questions={quizQuestions}
            setQuestions={setQuizQuestions}
            title={quizTitle}
            quizId={quizSelectedId}
            clearQuiz={clearQuiz}
            setAddingQuestion={setAddingQuestion}
          />
        </main>
      ) : (
        <main className={quizStyles.quiztitleswrap}>
          {displayQuizNamesAsButtons(quizzes, selectQuiz, openQuizModal)}
          <div
            className={quizStyles.button + " " + editorStyles.addbutton}
            onClick={() => {
              setAddingQuiz(true);
            }}
          >
            Add a New Quiz
          </div>
          {addingQuiz ? (
            <ConfirmModal
              confirmFunction={() => {
                saveQuiz(document.getElementById("saveinput").value);
              }}
              cancelFunction={setAddingQuiz}
              headerText="Create a new quiz"
              addingQuiz={true}
              confirmButtonText="Create"
            />
          ) : null}
          {deletingQuiz ? (
            <ConfirmModal
              confirmFunction={() => {
                deleteQuiz(quizSelectedId);
              }}
              cancelFunction={setDeletingQuiz}
              headerText="Delete this quiz?"
              confirmButtonText="Delete"
            />
          ) : null}
        </main>
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
