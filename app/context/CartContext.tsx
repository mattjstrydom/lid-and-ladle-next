/**
 * CartContext — Payment-Ready Stub
 *
 * STRIPE INTEGRATION STEPS (when ready):
 * 1. Add addItem / removeItem / clearCart / getTotal helpers
 * 2. Persist cart to localStorage via useEffect
 * 3. Restore cart from localStorage on mount
 * 4. Connect to /api/cart/add and /api/cart/remove routes
 * 5. Display real item count in Header cart icon badge
 * 6. Create /api/checkout to create a Stripe Checkout Session
 */

'use client'

import { createContext, useContext, useState } from 'react'

interface CartContextType {
  itemCount: number
}

const CartContext = createContext<CartContextType>({ itemCount: 0 })

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [itemCount] = useState(0)
  return <CartContext.Provider value={{ itemCount }}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
