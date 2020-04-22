import $ from 'jquery';
import ShoppingCart from './shppingCart/shoppingCart';
import List from './list/list'

export default class App {
    constructor(id) {
        this.$el = $('#' + id)
    }
    //init shoping cart
    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()

    }
    //init shopping list
    initList() {
        let list = new List(this);
        list.init()
    }

    init() {
        //顺序不能反，要不会出现重复的内容，原因不明
        this.initList()
        this.initShoppingCart()
    }
}