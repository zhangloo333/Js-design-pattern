import $ from 'jquery';
import {GET_LIST} from '../config/config';
import createItem from './createItem';

export default class List {
    constructor(app) {
        this.app = app;
        this.$el = $('div')
    }
    // get data
    loadData() {
        // return promis instance
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }
    //generate list
    initItemList(data) {
        data.each(itemData=> {
            //creat a iteam and init
            let item = createItem(this, itemData);
            item.init();
            return item
        })

    }
    // render
    render(){
        this.app.$el.append(this.$el);
    }
    // init
    init() {
        this.loadData().then(data=>{
            this.initItemList(data);
        }).then(()=>{
            this.render()
        })
    }
}