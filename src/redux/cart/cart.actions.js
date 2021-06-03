export const addItem = item => ({
    type: 'AddItem',
    payload: { id: 1, name: "Test Item", price: 5 }
})


export const removeItem = item => ({
    type: 'RemoveItem',
    payload: { id: 1, name: "Test Item", price: 5 }
})