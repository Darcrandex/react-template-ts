import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'
import Home from '@/pages/Home'

const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },

  {
    path: '/test',
    component: lazy(() => import('@/pages/Test')),
  },
]

export default routes
