
/*****************prototype-based class ***********/
function User(name){
  this.name = name;
}

User.prototype.sayHi = function(){
  console.log(this.name);
}

let user = new User("John");
user.sayHi();


/*****************class syntax ********************/
class User {
  
  constructor(name){
    this.name = name;
  }
  
  sayHi(){
    console.log(this.name);
  }
  
}

let user = new User("John");
user.sayHi();

User.prototype.test = 5;


/*****************object literal ******************/
var myObject = {
    sProp: 'some string value',
    numProp: 2,
    bProp: false,
    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    pos: { // nested object literal
        x: 40,
        y: 300
    },
    onSwap: function() { // function
        // code here
    }
  
};
