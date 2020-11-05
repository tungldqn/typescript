const list: Array<string> = [];
// list[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done');
  }, 2000)
});

promise.then(data => data.split(' '));

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max'}, { age: 30 });
console.log(mergeObj.name);
