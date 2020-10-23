const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Hello'));
}

class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

const account = new Department('a1', 'Accounting');

account.addEmployee('Hoa');
// // account.employees[1] = 'Test';
account.printEmployeeInformation();
account.describe();

class ItDepartment extends Department {

  constructor(id: string, name: string, private admins: string[]) {
    super(id, name);
  }
}

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
console.log(accounting);
