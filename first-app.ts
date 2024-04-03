let user: number | string;
user = 34213;

console.log(user);

user = 'Mayank Choudhary';

console.log(user);

type StringOrNum = string | number;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: StringOrNum;
};

let user1: User = {
  name: 'Mayank',
  age: 34,
  isAdmin: true,
  id: 'abc',
};

let hobbies: Array<string> | Array<number> = [
  'mayank',
  'Tushar',
  'Krati',
  'mayur',
];

console.log(hobbies);

hobbies = [1, 2, 4];

console.log(hobbies);

const jg1ns: string = 'Mayank';

type AddFn = (a: number, b: number) => number;

function add(a: number, b: number): number {
  return a + b;
}

function fun(a: number, b: number, calcFuntion: AddFn) {
  return calcFuntion(a, b);
}

console.log(fun(10, 20, add));

interface Credentials {
  username: string;
  password: string;
}

class AuthCredentials implements Credentials {
  username: string;
  password: string;
  email: string;
  age: number;
}
function loginCredentials(credentials: Credentials) {}

interface Credentials {
  age: number;
}

type Admission = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admission | AppUser;

let appUser: AppAdmin;

appUser = {
  permissions: ['role'],
  userName: 'Mayank',
};
type Role = 'user' | 'client' | 'admin';
let role: Role;
role = 'user';
console.log(role);

function performAction(action: string | number, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    console.log('Hi there.');
  }
}

type DataStorage<T, U, M> = {
  var1: T;
  var2: U;
  var3: M;
};

const textStorage: DataStorage<string, number, boolean> = {
  var1: 'A',
  var2: 30,
  var3: true,
};

function merge<T, U>(a: T, b: U): T | U {
  return {
    ...a,
    ...b,
  };
}

console.log(
  merge<{ age: string }, { name: string }>(
    { age: 'Mayank' },
    { name: 'Mayank' }
  )
);
