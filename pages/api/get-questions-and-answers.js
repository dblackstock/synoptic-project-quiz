import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const quizzes = await db
    .collection("quizzes")
    .find({ quizId: parseInt(req.body, 10) })
    .project({
      questions: 1,
      _id: 0,
    })
    .toArray();
  res.end(JSON.stringify(quizzes));
}
