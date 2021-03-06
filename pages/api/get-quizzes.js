import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const quizzes = await db.collection("quizzes").find({}).project({ questions: 0 }).toArray();
  res.end(JSON.stringify(quizzes));
}
