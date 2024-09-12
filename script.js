let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart(onclick);
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
}

function checkout() {
    alert('Thank you for shopping with us! Your total is $' + cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
    cart = [];
    updateCart();
}
