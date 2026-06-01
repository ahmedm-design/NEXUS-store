import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const qtyToAdd = action.payload.qty || 1
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + qtyToAdd } : i
          ),
        }
      }
      const cleanProduct = { ...action.payload }
      delete cleanProduct.qty
      return { ...state, items: [...state.items, { ...cleanProduct, qty: qtyToAdd }] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) }
    case 'UPDATE_QTY':
      if (action.payload.qty < 1) {
        return { ...state, items: state.items.filter(i => i.id !== action.payload.id) }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addToCart    = (product) => dispatch({ type: 'ADD_ITEM',    payload: product })
  const removeItem   = (id)      => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const updateQty    = (id, qty) => dispatch({ type: 'UPDATE_QTY',  payload: { id, qty } })
  const clearCart    = ()        => dispatch({ type: 'CLEAR_CART' })

  const cartCount = state.items.reduce((s, i) => s + i.qty, 0)
  const cartTotal = state.items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items: state.items, cartCount, cartTotal, addToCart, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
