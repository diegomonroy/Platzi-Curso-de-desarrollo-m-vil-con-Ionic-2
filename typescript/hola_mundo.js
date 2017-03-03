var _this = this;
console.log('Hola Mundo');
// Primitivos
var full_name = 'Jorge Cano';
var age = 27;
var developer = true;
// Objetos
var skills = ['JavaScript', 'Typescript', 'Ionic 2'];
var numberArray = [1, 2, 3, 4];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Manager"] = 2] = "Manager";
})(Role || (Role = {}));
;
var somethings = "Ahora soy un string";
somethings = 1234;
function setName(text) {
    this.full_name = text;
}
function getNamer() {
    return this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
inConsole(getHello('Hola Platzi mi nombre es'));
inConsole('En realidad recibo cualquier formato');
var data = ['AngulaJS', 'Angular', 'Redux', 'Polymer', 'ReactJS'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
var Fooo = (function () {
    function Fooo() {
    }
    return Fooo;
}());
var Bar = (function () {
    function Bar() {
    }
    return Bar;
}());
var Baz = (function () {
    function Baz(fooo, bar) {
    }
    return Baz;
}());
var baz = new Baz(new Fooo(), new Bar());
var soyPersona = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_user: '@jorgecano'
};
var soyPersonaDos = {
    first_name: 'Jorge',
    last_name: 'Cano'
};
// Shapes
var Person = (function () {
    function Person() {
        this.first_name = 'Jorge';
        this.last_name = 'Cano';
        this.twitter_user = '@jorgeucano';
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = 'Jorge';
myPerson.setLastName('Cano');
console.log(myPerson);
console.log(soyPersona);
console.log(soyPersonaDos);
