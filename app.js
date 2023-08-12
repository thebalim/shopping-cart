


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