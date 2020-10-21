const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Hello'));
}

class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const  account = new Department('Accounting');

account.addEmployee('Tung');
// account.employees[1] = 'Test';
account.name = 'New name';
account.printEmployeeInformation();

const accountCopy = { name: 'Test', describe: account.describe };
accountCopy.describe();
