import { Brand, Err, Ok, Result } from "../utils";

export function doSomethingWithAnEmployee(id: EmployeeId) {
    // make an api call, something expensive
}

// Mapped Type
export type EmployeeId =`X${string}` | `x${string}` | `A${string}` | `a${string}`;

export function isValidEmployeeId(id: string): boolean {
    return (
        id.startsWith('x') || 
        id.startsWith('X') || 
        id.startsWith('a') || 
        id.startsWith('A')
    );
}

type TechId = Brand<string, "TechId">;
type ApiError = {
    status: number;
    message: string;
};

// export const verifyTechId = (candidateId: string): TechId | null => {
//     return candidateId.startsWith('T') ? (candidateId as TechId) : null
// }

export const verifyTechId = (candidateId: string): Result<TechId, ApiError> => {
    const isValid = candidateId.startsWith("T");
    if (isValid) {
      return Ok(candidateId as TechId);
    } else {
      return Err({status: 404, message: "We fired that loser"});
    }
  };
  

export const doSomethingWithATech = (id: TechId) => {
    //do smoething
}

export function assignTechToCustomerIssue(assignment: {
    techId: string,
    issueId: string,
    customerId: string
}) {}

export type Url = `http://${string}/` | `https://${string}/`