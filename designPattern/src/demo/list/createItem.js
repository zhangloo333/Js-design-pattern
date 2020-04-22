import Item from './item';

//will add discount goods information
function createDiscount(itemData){
    //用代理来显示折扣, 代理就是我么不用改原来的数据接口，我们只要该他的返回值就行
    //代理只要是用于 没有权限，我们给可以直接用于以前 的接口；
    return new Proxy(itemData, {
        get: function(target, key,receiver){
            if(key ==='name') {
                return `${target[key]} Discount`
            }
            if(key === 'price') {
                return `${target[key]} * 0.8 = ${target[key] * 0.8}`
            }

            return target[key]
        }
    })
}

//factory design
export default function(list, itemData) {
    if(itemData.discount) {
        itemData = createDiscount(itemData);
    }
    return new Item(list, itemData);
}