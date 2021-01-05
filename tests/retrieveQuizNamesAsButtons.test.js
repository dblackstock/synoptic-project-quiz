import retrieveQuizNamesAsButtons from "../functions/retrieveQuizNamesAsButtons";
import data from "../public/quizzes.json";

describe("Retrieve quiz names ", () => {
  const result = retrieveQuizNamesAsButtons();
  it("Retrieves first quiz name correctly", async () => {
    expect(result[0].props.quizName).toBe("Physics Module 4: Atoms");
  });
  it("Retrieves last quiz name correctly", async () => {
    expect(result[result.length - 1].props.quizName).toBe("Biology: Respiration");
  });
});
