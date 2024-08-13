import { describe, expect, test } from 'vitest';
import { Actor, BankTransaction, doTransaction, Employee, hireEmployee, saveActorForRealz, updateSomeOfTheEmployee, updateSomePropertyOfTheEmployee } from './stuff/06.stuff';

describe("Built-In Utility Types", () => {
    test("partial", () => {
        updateSomeOfTheEmployee("99", {job: "DEV",/*  salary: 999_000} */ name: 'Bob Smith' }); // partial properties of a type!!! not all!
    })

    test('keys', () => {
        const bob: Employee = {
            id: '88',
            name: "Bob Smith",
            job: 'QA',
            salary: 128_000
        };

        updateSomePropertyOfTheEmployee('name', bob, "Robert");

        const employee = hireEmployee({
            name: "Carol Jones",
            job: "MGMT",
            salary: 180_000,
        });
        console.log(employee);



        // type ActorWhereItIsAllRequired = Required<Actor>; //all props are required!

        var workInProcess: Actor = {
            name: "Steve",
        };

        workInProcess.age = 48;

        // @ts-expect-error
        saveActorForRealz(workInProcess);

        const t = { kind: "Deposit", amount: 3000 } satisfies BankTransaction; // it won't allow any changes

        doTransaction("999", t);

        expect(t).toEqual({ kind: 'Deposit', amount: 3000 });
    })
})

