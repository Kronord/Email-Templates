let age: number;
let name_user: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number): number => 100 + a;


age = 50;
name_user = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback(20);


let some:unknown;
some = 'Text';

let str: string;

if (typeof some === "string") {
    str = some;
}

let person: [string, number];

person = ['mike', 25];

enum Status {Loading, Ready};

const person_status = {
  status: Status.Loading,
}

if (person_status.status === Status.Loading) {
  console.log('Status: ', Status.Loading);
}

let union: string | number;
let literal: 'enable' | 'disable';

function showMessage(message: string | number): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Data = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}

const page1: Data = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Data = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}