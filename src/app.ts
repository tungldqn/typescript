const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Hello'));
}

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department ' + this.name);
  }
}

const  account = new Department('Accounting');

console.log(account);
account.describe();

const accountCopy = { name: 'Test', describe: account.describe };
accountCopy.describe();
