export type Employee = {
    id: string;
    name: string;
    job: 'DEV' | 'QA' | 'MGMT';
    salary: number;
}
type UpdateTableEmployee = Pick<Employee, 'name' | 'job'>;

type EmployeeCreate = Omit<Employee, 'id'>;

export function hireEmployee(emp: EmployeeCreate) {
    const newEmployee: Employee = {
        id: crypto.randomUUID(),
        ...emp,
    };
    return newEmployee
}

export function updateSomeOfTheEmployee(
    id: string, 
    emp: Partial<UpdateTableEmployee>) {}


type EmployeeKeys = keyof Employee;

const someProp: EmployeeKeys = 'id'  // values are the keys of the object!

export function updateSomePropertyOfTheEmployee(
    prop: keyof Employee, 
    emp: Employee,
    newValue: string // gereric 
) {
    // but the prop has to be a specfic key of the employee type
}

export type Actor = {
    name?: string;
    age?: number;
}

export function saveActorForNow(actor: Actor) {
    // save it off somehwere to get back to later
}

export function saveActorForRealz(actor: Required<Actor>) {
    // nothing is options now
}

export type BankTransaction =
    | { kind: "Deposit"; amount: number }
    | { king: "Withdrawal"; amount: number };

export function doTransaction(accountNum: string, tx: Readonly<BankTransaction>) {
    //do work
    
    // side effect
    // tx.amount = tx.amount * 1.3; // since it is readonly, cannot modify 
}