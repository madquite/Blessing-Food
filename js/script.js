let quantities = {
    momos: 0,
    choleBhature: 0,
    frenchFries: 0,
    burger: 0,
    pizza: 0,
    eggRoll: 0,
    chowmein: 0,
    manchurian: 0,
    biryani: 0
};

let cart = {};

function changeQty(item, value, price, priceId) {
    let newQty = quantities[item] + value;
    if (newQty >= 0 && newQty <= 10) {
        quantities[item] = newQty;
        let total = quantities[item] * price;
        document.getElementById(item).innerText =
            quantities[item] + " pl";
        document.getElementById(priceId).innerText =
            "Total : " + total + "₹";
    }
}

function addToCart(item, price) {
    const qty = quantities[item] || 0;
    if (qty === 0) {
        alert("Cannot be added. Please select a quantity first.");
        return;
    }

    cart[item] = {
        qty: qty,
        price: price
    };
    alert(item + " added to cart!");
}

function viewCart() {
    let cartPanel = document.getElementById("cartPanel");
    let cartList = document.getElementById("cartItems");
    let total = 0;
    cartList.innerHTML = "";

    for (let item in cart) {
        let li = document.createElement("li");
        li.className = "cart-item";

        let label = document.createElement("span");
        label.className = "cart-item-label";
        label.innerText = item.toUpperCase() + " x " + cart[item].qty;

        let amount = document.createElement("span");
        amount.className = "cart-item-amount";
        let itemTotal = cart[item].qty * cart[item].price;
        amount.innerText = itemTotal + "₹";

        li.appendChild(label);
        li.appendChild(amount);
        cartList.appendChild(li);
        total += itemTotal;
    }

    if (Object.keys(cart).length === 0) {
        let emptyLi = document.createElement("li");
        emptyLi.className = "empty";
        emptyLi.innerText = "Your cart is empty.";
        cartList.appendChild(emptyLi);
    }

    document.getElementById("cartTotal").innerText =
        "Total : " + total + "₹";
    cartPanel.style.display = "block";
}

function closeCart() {
    let cartPanel = document.getElementById("cartPanel");
    cartPanel.style.display = "none";
}

// Toggle nav links when menu image is clicked
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const nav = document.querySelector('.menus nav');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function () {
            nav.classList.toggle('show-links');
        });
    }
});


function enable() {
    viewCart();
}

function disable() {
    document.querySelector("#cartPanel").style.display = "none";
}
