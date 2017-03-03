console.log('Hola Mundo');

// Primitivos

var full_name:string = 'Jorge Cano';
var age:number = 27;
var developer:boolean = true;

// Objetos

var skills:Array<string>=['JavaScript', 'Typescript', 'Ionic 2'];
var numberArray:number[]=[1, 2, 3, 4];

enum Role {Employee, Admin, Manager};

var somethings:any = "Ahora soy un string";
somethings = 1234;

function setName(text:string):void {
	this.full_name = text;
}

function getNamer():string {
	return this.full_name;
}

function inConsole(nameFunction:any):void {
	console.log(nameFunction);
}

function getHello(pretext:string):string {
	return `${pretext} ${this.full_name}`;
}

inConsole(getHello('Hola Platzi mi nombre es'));
inConsole('En realidad recibo cualquier formato');

var data:string[] = ['AngulaJS', 'Angular', 'Redux', 'Polymer', 'ReactJS'];

data.forEach((frameworksLibs)=>{
	this.inConsole(frameworksLibs);
})

class Fooo { fooo:number }
class Bar { bar:string }

class Baz {
	constructor(fooo:Fooo, bar:Bar){
	}
}

let baz = new Baz(new Fooo(), new Bar());

interface onePerson {
	first_name:string;
	last_name:string;
	twitter_user?:string;
}

let soyPersona:onePerson = {
	first_name : 'Jorge',
	last_name : 'Cano',
	twitter_user : '@jorgecano'
}

let soyPersonaDos:onePerson = {
	first_name : 'Jorge',
	last_name : 'Cano'
}

// Shapes

class Person {
	first_name:string;
	last_name:string;
	twitter_user?:string;
	constructor(){
		this.first_name = 'Jorge';
		this.last_name = 'Cano';
		this.twitter_user = '@jorgeucano';
	}
	setLastName(last_name:string):void{
		this.last_name = last_name;
	}
}

var myPerson = new Person();
myPerson.first_name = 'Jorge';
myPerson.setLastName('Cano');

console.log(myPerson);
console.log(soyPersona);
console.log(soyPersonaDos);