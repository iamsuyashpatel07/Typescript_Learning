let id:number=5 // integers
let company:string="Suyash" // string
let isPublished:boolean=true //boolean
let x:any='Hello' // not defined types of variable
let ids:number[]=[1,2,3,4,5] // arrays with only integers

let arr:any[]=[1,true,"Hello"] // not defined array types

//Tuple : Tuples may be destructured like arrays; the destructuring variables get the types of the corresponding tuple elements.

// Tuple
let person:[number,string,boolean]=[1,'Suyash Patel',true]

// Tuple Array 
let employee:[number,string][]

employee=[[1,'Tony Stark'],[2,'Dr. Doom'],[3,'Mr. Arrow Guy']]

// Union : Union means either can of be between 2 types

let pid: string | number
pid='22'

// Enum

// in enum if you assign some value to one of them then below variables from there get automatically assigned consecutive number

// enum can be assigned either numeric or string types

enum Direction1 {
Up,    //By Default it has values : 0
Down,    // ... values : 1
Left,   // ... value : 2
Right   // ... value : 3
}

// console.log(Direction1.Down)



// Object 

// const User : {id:number,name:string} ={id:1,name:'suyash'}

// Or most industry defined method to define is followed as below

type User ={
id:number
name:string
}

const user:User={
id:1,
name:'Suyash'
}


// Type Assertion

let cid:any=1
// let customerId=<number>cid

let customerId=cid as number


//Functions
function addNum(x:number,y:number):number{
 return x + y;
}

// console.log(addNum(1,2))

// adding void cause it do nont return anything
function log(message:string | number):void{
console.log(message);
}

// log("Steve Harrision")


// Interface

interface UserInterface{
readonly id:number // readonly Property means can not be re defined outside of UserInterface
name:string
age?:number // optional cuz we used question mark after variable name if not question mark using then you must have been defininng its value in below
}

const user1:UserInterface={
id:1,
name:'John',
}
 
// Interface do not work inn Primitives or union


interface MathFunc{
(x:number,y:number):number
}

const add:MathFunc=(x:number,y:number):number=>x+y

const sub:MathFunc=(x:number,y:number):number=>x-y


interface PersonInterface{
    readonly id:number // readonly Property means can not be re defined outside of UserInterface
    name:string
    register():string
    }

//Classes 
class Person implements PersonInterface {
id:number  // we can define types of variable as Public or Private
name:string

constructor(id:number,name:string){
this.id=id
this.name=name
}
register(){
return `${this.name} is now registered`
}
}

const brad=new Person(1,'Suyash')
const mike=new Person(2,'Patel')

// console.log(brad.register())

// console.log(brad,'or',mike)


//subclass
class Employee extends Person{
position:string
constructor(id:number,name:string,position:string){
super(id,name)
this.position=position
}
}

const emp=new Employee(3,'Lusky','developer')

console.log(emp.register())

//Generics

function getArray<T>(items:T[]):T[]{
return new Array().concat(items)
}

let numArray=getArray<number>([1,2,3,4,5])
let strArray=getArray<string>(["suyas","Patel"])

