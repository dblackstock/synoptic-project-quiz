import retrieveQuestionsForQuiz from "../functions/retrieveQuestionsForQuiz";

global.fetch = jest.fn(async () =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          questions: [
            {
              questionId: 123,
              questionNumber: 2,
              questionText: "Which subatomic particle has a positive charge?",
              answers: [
                { answerId: 12345, answerText: "Neutron" },
                { answerId: 12346, answerText: "Proton" },
                { answerId: 12347, answerText: "Electron" },
                { answerId: 12348, answerText: "Neutrino" },
              ],
            },
            {
              questionId: 124,
              questionNumber: 1,
              questionText: "Which subatomic particle has the greatest mass?",
              answers: [
                { answerId: 22345, answerText: "Neutron" },
                { answerId: 32346, answerText: "Proton" },
                { answerId: 42347, answerText: "Electron" },
                { answerId: 52348, answerText: "Neutrino" },
              ],
            },
          ],
        },
      ]),
  })
);

describe("Retrieve quiz names ", () => {
  it("Retrieves first quiz question correctly", async () => {
    // const result = await rawResult;
    const result = await retrieveQuestionsForQuiz(1);
    expect(result[0].questionNumber).toBe(1);
    expect(result[0].questionText).toBe("Which subatomic particle has the greatest mass?");
  });
  it("Retrieves last quiz question correctly", async () => {
    // const result = await rawResult;
    const result = await retrieveQuestionsForQuiz(1);
    expect(result[result.length - 1].questionNumber).toBe(result.length);
    expect(result[result.length - 1].questionText).toBe("Which subatomic particle has a positive charge?");
  });
});
