"use strict";

const product_1 = {
    id : 1,
    name : 'Anna Karenina',
    cost : 200,
};

const product_2 = {
    id : 2,
    name : 'The Road',
    cost : 300,
};

const product_3 = {
    id : 3,
    name : 'The Great Gatsby',
    cost : 300,
};

const catalog = {
    ProdBlock: null,
    items : [product_1, product_2, product_3],
    generate_html () {
        const a =  document.querySelector('.catalog');
        for (const item of this.items) {
            a.innerHTML += `<div class="item">
                                 <div><b>Id</b>: ${item.id}</div>
                                 <div><b>Наименование</b>: ${item.name}</div>
                                 <div><b>Цена за шт.</b>: ${item.cost}</div>
                                 <button class="cart-btn-buy" data-id="${item.id}">Купить</button>
                            </div>`;
        }

        let BuyButtons = document.querySelectorAll(`.cart-btn-buy`);
        BuyButtons.forEach(item => {item.addEventListener('click',event => this.addToCart(event))});
        console.log(this.items);
    },
    addToCart (event){
        const product_id = +event.target.dataset.id;
        const findProd = this.items.find((product) => product.id === product_id);
        cart.addToCart(findProd);
        console.log(event);
    }
};

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.cost}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.cost}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.cartListBlock.textContent = '';
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиции/я общей стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (cost, good) {
            return cost + good.cost * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
    addToCart(product) {
        function fP (f){
            return f.id === product;
        }

        console.log(this.goods);
        const findInCart = this.goods.find(fP);
        if (findInCart) {
            findInCart.quantity++;
        } else {
            this.goods.push({...product, quantity: 1});
        }
        this.render();
    }
};
cart.init();

catalog.generate_html();


