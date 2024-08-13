import { describe, test } from "vitest";
import { assignTechToCustomerIssue, doSomethingWithAnEmployee, doSomethingWithATech, isValidEmployeeId, Url, verifyTechId } from "./employees";
import { Option } from "./utils";

describe('Mapped Types', () => {
    test('employee ids', () => {
        // we need a func that let's us know if a string has a valid employee id.
        // at our company employee ids start with

        const id = "X00099";
        if(isValidEmployeeId(id)) {
            doSomethingWithAnEmployee(id);  
        }

        doSomethingWithAnEmployee("A00088");

        const API_URL: Url = "https://localhose:1337/"
        // const API_URLBAD: Url = "https://localhost:1337" // -> ERROR

        const techId = "99";
        const customerId = "138";
        const issueId = "420";

        assignTechToCustomerIssue({
            techId, 
            customerId, 
            issueId
        });
    });

    test('branded types', () => {
        //let's call the data we aren't sure is a valid employee id
        // something like a "candidateid"

        const candidateId = `Tabc123`; // some data from outside - api, whatever

        const results = verifyTechId(candidateId);

        if (results.ok) {
            console.log(results.value);
            doSomethingWithATech(results.value);
        } else {
            console.log(results.error);
        }

    });
});

describe("Utility Types", () => {
    test("Options", () => {
        const customers = [
            { id: "99", state: "OH", balance: 3000},
            { id: "101", state: "KY", balance: 10_000 },
            { id: "200", state: "VA", balance: 99_000 },
        ];

        // const balances = customers
        //     .filter((c) => c.balance > 100_000) //where
        //     .map((c) => c.balance); //select
        
        // if (balances.length > 0) {
        //     console.log(balances);
        // } else {
        //     console.log("everybody is paid up");
        // }
        type CustomerInfo = {
            id: string;
            state: string;
            balance: number;
        }
    
        const highBalances = highBalanaceCustomers(customers, 10_000);
        switch(highBalances.tag) {
            case "None": {
                console.log('No Customer Found');
                break;
            }
            case "Some": {
                console.log(`these balances are high ${highBalances.value}`)
                break;
            }
            
        }
    
        function highBalanaceCustomers(
            customers: CustomerInfo[],
            cutoff: number
        ): Option<number[]> {
            const balanaces = customers
                .filter((c) => c.balance >= cutoff)
                .map((c) => c.balance)
            
            if (balanaces.length === 0) {
                return {tag: "None"};
            } else {
                return {tag: "Some", value: balanaces};
            }
        }
    });
   
});