import $ from 'jquery';
import ShoppingCart from './shppingCart/shoppingCart';
import List from './List/List'

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
        this.initShoppingCart()
        this.initList()
        console.log('123')
    }
}