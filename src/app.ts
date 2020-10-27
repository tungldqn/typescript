const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Hello'));
}

abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {
    
  }

  static createEmployee(name: string) {
    return {
      name
    }
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

// const account = new Department('a1', 'Accounting');

// account.addEmployee('Hoa');
// // // account.employees[1] = 'Test';
// account.printEmployeeInformation();
// account.describe();

class ItDepartment extends Department {

  constructor(id: string, name: string, private admins: string[]) {
    super(id, name);
  }

  describe() {
    console.log('IT Department - ID ' + this.id);
  }
}

const employee1 = Department.createEmployee('Tung');
console.log(employee1, Department.fiscalYear);

const ItAccount = new ItDepartment('a2', 'it', ['tung']);

ItAccount.describe();
console.log(ItAccount);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  constructor(id: string, name: string, private reports: string[]) {
    super(id, name);
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('a3', 'account', ['report1']);
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);

accounting.addReport('report2');
accounting.addEmployee('Tung');
accounting.printReports();
accounting.describe();
