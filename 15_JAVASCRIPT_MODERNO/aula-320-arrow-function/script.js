// 2 - Arrow function


const sum = function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5))

const greeting = (name) => {
  if (name) {
    return "Olá " + name + "!"
  }
  else {
    return "Olá"
  }
}

console.log(greeting('Kaio'));
console.log(greeting(0));

const testArrow = () => console.log('Testou!')

testArrow();


const user = {
  name: "Theo",
  sayUserName() {
    var self = this
    setTimeout(function () {
      console.log(self)
      console.log("username: " + self.name)
    }, 500)
  },

  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("username: " + this.name)
    }, 700)

  }
}

user.sayUserName();
user.sayUserNameArrow();