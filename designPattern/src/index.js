class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        alert(`${this.name} eat something`);
    }

    speak() {
        alert(`My name is ${this.name}, age ${this.age}`);
    }

    getName(){
        return this.name;
    }
}

//子类 继承父类
class Student extends People {
    constructor(name, age, number) {
        super(name, age); //super 调用父类里面的name， and age， 因为number没有，所以不传入
        this.number = number;
    }

    study() {
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1');
xiaoming.study()
alert(xiaoming.number);
xiaoming.eat();
let xiaohong = new Student('xiaohong', 11, 'A2');
xiaohong.study()
xiaohong.speak();