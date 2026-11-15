import { createContext, useContext } from 'react'

export const RoutePathContext = createContext('/')

export function useRoutePath() {
  return useContext(RoutePathContext)
}
