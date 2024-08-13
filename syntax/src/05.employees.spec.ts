import { describe, expect, test } from "vitest";
import {
  assignTechToCustomerIssue,
  doSomethingWithAnEmployee,
  doSomethingWithATech,
  isValidEmployeeId,
  Url,
  verifyTechId,
} from "./employees";

describe("Mapped Types", () => {
  test("employee ids", () => {
    // we need a function that let's us know if a string has a valid employee id.
    // at our company employee ids start with.

    const id = "X00099";
    if (isValidEmployeeId("id")) {
      doSomethingWithAnEmployee(id);
    }

    doSomethingWithAnEmployee("x9999");

    const API_URL: Url = "https://localhost:1337/";

    // http.get(API_URL + 'books')

    const techId = "99";
    const customerId = "138";
    const issId = "420";

    assignTechToCustomerIssue({
      techId: techId,
      customerId: customerId,
      issueId: issId,
    });
  });

  test("branded types", () => {
    // let's call the data we aren't sure is a valid employee id
    // something like a "candidateId";

    const candidateId = "Tabc123"; // some data from outside - api, whatever

    const results = verifyTechId(candidateId);

    if (results.ok) {
      console.log(results.value);
      doSomethingWithATech(results.value);
    } else {
      console.log(results.error);
    }
  });
});
