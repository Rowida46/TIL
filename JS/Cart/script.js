/**
 * 
 * schema of the cart ..->
 * [...{cartid, cartItems: [...lst of books items], totalprice}]
 */

/** handel local storage  */
function updateCartOnLocalStorage(cart) {
    /**update & add the list of stored carts at the local storage */
    localStorage.setItem("Carts", JSON.stringify(cart))
    carts = getCartsFromLocalStorage()
    return carts;
}
function getCartsFromLocalStorage() {
    /**get lst of all carts stored at the local storage */
    return JSON.parse(localStorage.getItem("Carts") || "[]"); /**test* */
}

carts = getCartsFromLocalStorage(); /**IDK if we gonna set it as a global val :-D */

/** for now cart id is equal to userid, as once user do checkout his/her cart would be cleared */
function getUserCart(userid) {
    carts = getCartsFromLocalStorage(); /**retrieve all carts lst  first*/
    userCart = carts.filter((cart) => cart.cartid == userid)
    return userCart;
}

function getBookById(bookid) {
    booksOnShelf = getBookFromLocalStorage() /*to be updates */
    book = booksOnShelf.filter((ele) => ele.id == bookid);
    return book;
}
/** end of local storage operations  */

function isValid(book) {
    /**check a validate book item first */
    return book.id && book.price
}
/** handel cart transactions */
function CreateCart(userid) {
    userCart = { "cartid": userid, "cartItems": [], "totalprice": 0 }
    /**we cnt push this usercart to the carts lst as it's an empty cart till now
     * SOLVED ...
     */
    carts.push(userCart)
    return userCart;
}

function addToCart(userid, bookid, quantity = 1) {
    // we need to update&inc quantity val
    /**create a single cart item that would be apped&pushed to cartItems lst */
    let cartItem = { "bookid": bookid, "quantity": quantity || 1 }
    userCart = getUserCart(userid);

    if (userCart.length == 0) { /**if user dnt have a cart history -> create a one for him */
        userCart = CreateCart(userid);
        cartitems = userCart.cartItems
    }
    else {
        cartitems = userCart[0].cartItems
    }

    cartitems.push(cartItem) /**append cartitem to item lst */
    updateCartOnLocalStorage(carts) /**keep our local storage updated */

}

function removeItemFromCart(cartid, bookid) {
    /**remove cart item from cart items lst */
    userCart = getUserCart(cartid); /**get user cart history */
    cartitems = userCart[0].cartItems;  /**get user cartitems lst */
    userCart[0].cartItems = cartitems.filter((item) => item.bookid != bookid);/**update his item lst -> remove a specific id */
    updateCartOnLocalStorage(carts) /**update carts from local storage */
}

function clear(cartid) {
    /** clear user cart history  */
    //userCart = getUserCart(cartid)
    carts = carts.filter((cart) => cart.cartid != cartid);
    //localStorage.removeItem(carts[cartid]) /**we cn do it in just one line yet we need filter  to keep `carts` lst, the global val, updated*/
    updateCartOnLocalStorage(carts)
}

function checkout(cartid) {
    /** do ur cart transations */
    userCart = getUserCart(cartid);
    items = userCart[0].cartItems
    userCart.totalprice = calcTotalPrice(items)
    console.log(userCart)
    clear(cartid)
}

function calcTotalPrice(cartItems) {
    /** cart items lst that hold {"bookid":, "quantity": }  on each item*/
    totalprice = 0;
    cartItems.forEach(item => {
        console.log(item.bookid)
        book = getBookById(item.bookid)[0] /**get book obj of each bookid */

        totalprice += (book.price * item.quantity);
    })
    console.log(totalprice)
    return totalprice;
}