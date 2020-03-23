class SingleObject {
    login() {
        console.log('login.....');
    }
}

SingleObject.getInstance = (function() {
    let instance
    return function() {
        if(!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

let obj1= SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log('object1 === object2', obj1 === obj2);

//如果别人不知道我们的使用方法，他就是去new 了一个。
let obj3 = new SingleObject();
console.log('object1 === object2', obj2 === obj3);
