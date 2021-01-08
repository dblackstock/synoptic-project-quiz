import { connectToDatabase } from "../../utils/mongodb";

export default async function (req, res) {
  const inputs = JSON.parse(req.body);

  const { db } = await connectToDatabase();
  const response = await db
    .collection("quizzes")
    .updateOne({ quizId: inputs.quizId }, { $set: { questions: inputs.questions } });
  //   console.log(response);
  res.end(JSON.stringify(response));
}
