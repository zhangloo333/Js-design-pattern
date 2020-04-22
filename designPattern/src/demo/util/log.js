export function log(type) {
    //装饰器必须返回一个函数
    return function (target, name, descriptor) {
        //descriptor.value 就是你加在那个上面的函数
        //保存刚才的function， 用在middle ware 之后
        let oldValue = descriptor.value;
        descriptor.value = function() {
            // 在次统一的打印日志
            console.log('update log' + type);
            //执行原有的方法
            return oldValue.apply(this, arguments)
        }
        return descriptor
    }
}