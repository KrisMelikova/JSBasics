'use strict';

const basket = {
    info : [
        {
            name : 'The Great Gatsby',
            price : 200,
            count : 1,
        },
        {
            name: 'Anna Karenina',
            price: 400,
            count: 2,
        },
    ],
    countBasket () {
        return this.info.reduce((total, bookItem) => total + bookItem.price * bookItem.count, 0);
    },

    countItems () {
        return this.info.reduce((total, bookItem) => total + bookItem.count, 0);
    },

    condition () {
        const a = this.countBasket();
        const b = this.countItems();

        if (a === 0) {
           return ('Корзина пуста')
        } else {
            return (`В корзине ${b} товара/ров на сумму ${a} руб.`)
        }
    }
};

const basket_condition = document.getElementById("basket");
basket_condition.innerHTML =basket.condition();