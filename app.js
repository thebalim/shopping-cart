(function() {
    // show cart toggle function
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function() {
    cart.classList.toggle("show-cart");
});
})();

// onload
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}



function ready() {

    // add to cart buttons
    let addToCartButtons = document.getElementsByClassName("ADD_TO_CART");
    for ( let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    // remove items button
    let removeButtons = document.getElementsByClassName('btn-remove');
    for (let i = 0; i < removeButtons.length; i++) {
        let button = removeButtons[i];
        button.addEventListener('click', removeItemClicked);
    }

    document
        .getElementsByClassName('btn-purchase')[0]
        .addEventListener('click', purchaseClicked);
}


// functions to be added
function purchaseClicked(){
    alert("thank you for the purchase");
    let cartItemsContainer = document.getElementsByClassName("cart-items")[0];
    while (cartItemsContainer.hasChildNodes) {
        cartItemsContainer.removeChild(cartItemsContainer.firstChild);
    }

    // updateItemsTotal();
    // updateCartTotal();
}

function quantityChanged() {return;}

// remove item function
function removeItemClicked(event){
    let button = event.target;
    button.parentElement.parentElement.remove();
}


function addToCartClicked(event) {
    let button = event.target;
    let product = button.parentElement.parentElement;
    let title = product.getElementsByClassName('product-title')[0].innerText;
    let price = product.getElementsByClassName("product__price")[0].innerText;
    let imageSrc = product.getElementsByClassName("product__image")[0].src;

    addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {

    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");

    let cartItems = document.getElementsByClassName("cart-items")[0];
    let cartItemTitles = document.getElementsByClassName("cart-item-title");

    for ( let i = 0; i < cartItemTitles.length; i++) {
        if( cartItemTitles[i].innerText == title) {
            alert("the item has already been added to cart");
            return;
        }
    }

    let cartRowContent = `<div class="cart-item cart-column">
                           <img src="${imageSrc}" class="cart-item-image">
                           <span class="cart-item-title">${title}</span>
                           </div>  
                           
                            <span class="cart-item cart-column">${price}</span>
                            
                            <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" value="1">
                            <button class="btn btn-remove" type="button">REMOVE</button>  
                            </div>`;

    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);

    cartRow
        .getElementsByClassName("btn-remove")[0]
        .addEventListener('click', removeItemClicked);
    
    cartRow
        .getElementsByClassName("cart-quantity-input")[0]
        .addEventListener('click', quantityChanged);
}




filterSelection('all');

// filter function
function filterSelection(c) {
    let i, x;

    // products with className product
    x = document.getElementsByClassName('product');

    if ( c == "all") {
        c = "";
    }

    for ( i = 0; i < x.length; i++) {
        //removing class show from products
        removeClass(x[i], 'show');

        if ( x[i].className.indexOf(c) > -1 ) {

            // add class show in products
            addClass(x[i], 'show');
        }

    }
}

// add class function
function addClass(element, name) {
    let i, arr1, arr2;
    // spliting classname into array and storing in arr1
    arr1 = element.className.split(" ");
    // splitting names that we want to add to arr1 className
    arr2 = name.split(" ");
    for ( i = 0; i < arr2.length; i++) {

        if ( arr1.indexOf(arr2[i]) == -1) {

            element.className += " " + arr2[i];
        }
    }
}

// remove class name function
function removeClass(element, name) {
    let i, arr1, arr2;
    // spliting classname into array and storing in arr1
    arr1 = element.className.split(" ");
    // spling name into arry to remove from arr1
    arr2 = name.split(" ");

    for ( i = 0; i < arr2.length; i++) {

        while (arr1.indexOf(arr2[i]) > -1) {

            // using splice method to remove class from arr1
            arr1.splice(arr1.indexOf(arr2[i]));
        }
    }
    // joining the classname
    element.className = arr1.join(" ");
}


// btn container
const btnContainer = document.getElementById('filterButtons');
// buttons inside filterbuttons container
const btns = btnContainer.getElementsByClassName('btn');
// Adding active class to current button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {

        var current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");

        this.className += " active";
    });
}



