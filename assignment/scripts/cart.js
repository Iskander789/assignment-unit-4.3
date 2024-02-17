console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// function addItem(item) {
//     basket.push(item);
//     return true
// } 

function listItems() {
    for (let i=0; i<basket.length; i++) {
        console.log(basket[i]);
    }
}

function empty() {
    basket.length = 0;

}

const maxItems = 5

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

function addItem(item) {
    if (!isFull()) {
        basket.push(item);
        return true;
    }
    return false;
}

function removeItem(item) {
    const index = basket.indexOf(item);
    if (index !== -1) {
        return basket.splice(index, 1)[0];
    }
    return null;
}








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
