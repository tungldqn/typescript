type Admin = {
  name: string;
  privileges: string []
}

type Employee = {
  name: string,
  startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function plus(a: number, b: number): number;
// function plus(a: string, b: string): string;
function plus(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b;
}

const result = plus('Tung', 'Max') as string;
result.split('');

const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: {
    // title: 'Ceo',
    description: 'company'
  }
}

console.log(fetchUserData?.job?.description);

const string = undefined;

const a = string ?? 'Default';

console.log(a);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving truck');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird',
  flyingSpeed: number
}

interface Horse {
  type: 'horse',
  runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 1000 });

const paragraph = document.getElementById('test');

// const userInputElement = <HTMLInputElement>document.getElementById('text')!;
const userInputElement = document.getElementById('text')! as HTMLInputElement;
const userInputElement1 = document.getElementById('text');

userInputElement.value = 'Hi there!';
if(userInputElement1) {
  (userInputElement1 as HTMLInputElement).value = "Hello"
}

interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  userName: 'Must start with a capital character'
}