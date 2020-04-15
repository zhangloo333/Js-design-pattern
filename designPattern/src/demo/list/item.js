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
        init: 'ADD_TO_SHOPPING_CART',
        transitions: [
            {
                name: 'addToCart',
                from: 'ADD_TO_SHOPPING_CART',
                to: 'REMOVE_FROM_SHOPPING_CART'
            },
            {
                name: 'deleteFromCart',
                from: 'REMOVE_FROM_SHOPPING_CART',
                to: 'ADD_TO_SHOPPING_CART'
            }
        ],
        methods: {
            //add to shopping cart
            onAddToCart: function() {
                _this.addToCartHandle();
                updateText();
            },
            //remove from the shopping cart
            onDeleteFromCart: function(){
                _this.deleteFromCartHandle();
                updateText();
            }
        }
      })

      function updateText() {
        $btn.text(fsm.state);
      }

      $btn.click(()=>{
          //添加到购物车
        if(fsm.is('ADD_TO_SHOPPING_CART')) {
            fsm.onAddToCart()
        } else {
            fsm.onDeleteFromCart()
        }
          //从购物车移除
      })

      updateText();
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