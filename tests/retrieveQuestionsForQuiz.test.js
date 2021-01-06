import retrieveQuestionsForQuiz from "../functions/retrieveQuestionsForQuiz";

describe("Retrieve quiz names ", () => {
  const result = retrieveQuestionsForQuiz(1);
  it("Retrieves first quiz question correctly", async () => {
    expect(result[0].questionNumber).toBe(1);
    expect(result[0].questionText).toBe("Which subatomic particle has the greatest mass?");
  });
  it("Retrieves last quiz question correctly", async () => {
    expect(result[result.length - 1].questionNumber).toBe(result.length);
    expect(result[result.length - 1].questionText).toBe("Which subatomic particle has a positive charge?");
  });
});
