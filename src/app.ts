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
