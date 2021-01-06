import { FC, useCallback, useState } from 'react'
import { Button, Switch } from 'antd'
import { observer } from 'mobx-react'
import { get } from '@/utils/http'
import { useStores } from '@/store'

import styles from './styles.module.less'

const TestPage: FC = () => {
  const { counter } = useStores()
  const [list, setList] = useState<{ id: string; title: string }[]>([])

  const getTopics = useCallback(() => {
    get('/topics').catch((res) => {
      if (Array.isArray(res?.data)) {
        setList(res?.data)
      }
    })
  }, [])

  return (
    <>
      <ol>
        <li>
          <h2>less module</h2>
          <div className={styles.box}>the box with shadow</div>
        </li>

        <li>
          <h2>antd@4.x with custom theme</h2>
          <Button type='primary'>click me</Button>
          <Switch />
        </li>

        <li>
          <h2>counter</h2>
          <p>count: {counter.count}</p>
          <Button onClick={counter.add}>add</Button>
          <Button onClick={() => counter.sub()}>sub</Button>
        </li>

        <li>
          <h2>axios fetch</h2>
          <Button onClick={getTopics}>get topics</Button>
          <ol>
            {list.map((v) => (
              <li key={v.id}>{v.title}</li>
            ))}
          </ol>
        </li>
      </ol>
    </>
  )
}

export default observer(TestPage)
