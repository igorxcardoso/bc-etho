// Interface
interface User {
	name: string;
	id: number;
}

const user: User = {
	name: "Lara",
	id: 1
};

console.log(user)


// Variáveis e tipagem
let num: number = 10;
let num1: number = 10;
let num2 = 10; // typeof number

let isFalsy: boolean = false;
let tsname: string = 'Typescript';


function greeter1(receiver: string) {
  return "Hello, " + receiver + ".";
}

greeter1('world'); // 'Hello world.'


// Arrays
const boolArray: boolean[] = [true, false, true];
const strArray: string[] = ['Start', 'Middle', 'End'];
const numArray: number[] = [1, 2, 3];

// Quando não dameos o tipo
function greeter2(receiver: any) {
  return "Hello, " + receiver + ".";
}

greeter2(32); // 'Hello 32.'

const anyArray: any[] = [2, "igor", true]



// Tipos customizáveis:
type AllowedTypes = string|string[]|number;

function analyzerType(receiver: AllowedTypes) {
  return "Hello, " + receiver + " friend.";
}

let speaker = 'human';
console.log(analyzerType(speaker));
console.log(analyzerType(2));


// P2
enum NatureTypes {
    Human = "human",
    Robot = "robot",
    Animal = "animal"
}

interface InterfaceEntity {
    naturelType: NatureTypes;
    name: string;
}

class Animal implements InterfaceEntity {

    construtor(naturelType: NatureTypes, name: string, birthdate?: number) {
        // this.birthdate = birthdate;
        this.naturelType =  naturelType;
        this.name =  name;
    }

    naturelType: NatureTypes = NatureTypes.Animal;
    name:  string = "";
    birthdate:  number | undefined;

}

function analyzer(receiver: InterfaceEntity, test?: string): string {
    console.log(test)
    return `Hello, ${receiver.name}. You are ${receiver.naturelType}`;
}

const dog: Animal = {
    naturelType: NatureTypes.Animal,
    name: "Dog Du",
    birthdate: 53
}

// const duck: Animal = {
//     naturelType: NatureTypes.Animal,
//     name: "Dog Do",
//     birthdate: 34
// }


// console.log(analyzer(dog, "estou aqui"))
// console.log(analyzer(dog))
