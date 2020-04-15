import $ from 'jquery';
import getCart from '../shppingCart/getCart'; 
import StateMachine from 'javascript-state-machine';

export default class Item {
    constructor(list, data) {
        this.list = list;
        this.data = data;
        this.$el = $('<div>')
        this.cart = getCart()
    }

  initContent() {
    let $el = this.$el;
    let data = this.data;
    $el.append($(`<p>name: ${data.name}</p>`));
    $el.append($(`<p>price: ${data.price}</p>`));
  }

  initBtn() {
      let $el = this.$el;
      let $btn = $('<button>');
      let _this = this;
      let fsm = new StateMachine({
        init: 'add to shoppingCart',
        transitions: [
            {
                name: 'addToCart',
                from: 'add to shoppingCart',
                to: 'delete from shoppingCart'
            },
            {
                name: 'addToCart',
                from: 'add to shoppingCart',
                to: 'delete from shoppingCart'
            }
        ]
      })
      $btn.click(()=>{
          //添加到购物车

          //从购物车移除
      })
      $el.append($btn);
  }

  //add to shpping cart
  addToCartHandle() {
      this.cart.add(this.data);
  }

  //从购物车删除
  deleteFromCartHandle() {
      this.cart.del(this.data.id)

  }

  render() {
      this.list.$el.append(this.$el);
  }

  init() {
      this.initContent();
      this.initBtn();
      this.render();
  }
}