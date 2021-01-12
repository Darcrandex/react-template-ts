import { FC, createContext, useContext } from 'react'

import counter from './modules/counter'
import requestListener from './modules/request-listener'

const createStore = () => ({ counter, requestListener })

const storeValue = createStore()

type TStore = ReturnType<typeof createStore>

const StoreContext = createContext<TStore | null>(null)

export const StoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
)

export const useStores = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('no store')
  }
  return store
}
