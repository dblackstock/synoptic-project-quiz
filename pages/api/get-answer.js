import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const quiz = await db
    .collection("quizzes")
    .find({ "questions.questionId": parseInt(req.body, 10) })
    .toArray();

  const question = quiz[0].questions.find((element) => element.questionId === parseInt(req.body, 10));
  const answer = question.answers.find((element) => element.isCorrect);
  res.end(JSON.stringify(answer));
}
