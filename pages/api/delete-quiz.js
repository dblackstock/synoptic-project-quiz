import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const deleteResult = await db.collection("quizzes").deleteOne({ quizId: parseInt(req.body, 10) });
  res.end(JSON.stringify(deleteResult));
}
