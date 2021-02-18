import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const quizzes = await db
    .collection("quizzes")
    .find({ quizId: parseInt(req.body, 10) })
    .project({
      "questions.questionId": 1,
      "questions.questionNumber": 1,
      "questions.questionText": 1,
      "questions.answers.answerId": 1,
      "questions.answers.answerText": 1,
      _id: 0,
    })
    .toArray();
  res.end(JSON.stringify(quizzes));
}
