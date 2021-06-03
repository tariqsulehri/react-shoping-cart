
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        x => x.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(x => x.id === cartItemToRemove.id);

    if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
            return cartItems.filter(x => x.id !== cartItemToRemove.id)
        }
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    )
}