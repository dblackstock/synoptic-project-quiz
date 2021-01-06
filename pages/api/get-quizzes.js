import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const quizzes = await db.collection("quizzes").find({}, { quizId: 1, quizName: 1 }).toArray();
  res.json(quizzes);
}
