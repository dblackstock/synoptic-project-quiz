import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  console.log(req.body);
  const { db } = await connectToDatabase();
  const deleteResult = await db.collection("quizzes").deleteOne({ quizId: parseInt(req.body, 10) });
  console.log(deleteResult);
  res.end(JSON.stringify(deleteResult));
}
