import Recipient from "../recipient";
import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInception = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInception,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInception.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const newVaccineTest = new VaccineTest();
    newVaccineTest.inject();
    expect(mockAcceptInception).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    mockGetHasAntibodies.mockReturnValueOnce(true);
    const newVaccineTest = new VaccineTest();
    const result = newVaccineTest.test();
    expect(result).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    mockGetHasAntibodies.mockReturnValueOnce(false);
    const newVaccineTest = new VaccineTest();
    const result = newVaccineTest.test();
    expect(result).toBe("Vaccine Test Failed");
  });
});
