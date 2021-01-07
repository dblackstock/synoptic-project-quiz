import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const newQuizObject = {
    quizId: Math.floor(Math.random() * 10000),
    quizName: req.body,
    questions: [],
  };

  const { db } = await connectToDatabase();
  const insertResult = await db.collection("quizzes").insert(newQuizObject);
  res.end(JSON.stringify(insertResult));
}
