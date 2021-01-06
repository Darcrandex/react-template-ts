import React, { FC, Suspense } from 'react'
import { observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import { useStores } from '@/store'
import { FullScreenLoading } from '@/components'

const App: FC = () => {
  const { requestListener } = useStores()
  return (
    <>
      <Suspense fallback={<FullScreenLoading loading />}>
        <Switch>
          {routes.map(({ path, component, ...rest }, index) => (
            <Route key={index} path={path} component={component} {...rest} />
          ))}
        </Switch>
      </Suspense>

      <FullScreenLoading loading={requestListener.isFetching} />
    </>
  )
}

export default observer(App)
