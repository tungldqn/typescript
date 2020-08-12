// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5, READ_ONLY = 100, AUTHOR = 'AUTHOR'
};

const person= {
  name: 'Tung',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports', 0];

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
  console.log('Is admin');
}