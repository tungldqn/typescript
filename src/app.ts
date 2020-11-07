const list: Array<string> = [];
// list[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done');
  }, 2000)
});

promise.then(data => data.split(' '));

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max'}, { age: 30});
console.log(mergeObj.name);

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(['Cook', 'Play']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'Tung' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item, 1));
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Tung');
textStorage.addItem('Toan');
textStorage.removeItem('Toan');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const tungObj = { name: 'Tung' }
// objStorage.addItem(tungObj);
// objStorage.addItem({ name: 'Min' });
// objStorage.removeItem(tungObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(title: string, description: string, completeUtil: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = completeUtil;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Tung', 'Anna'];
// names.push('as');
