import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../../styles/Friend.module.css'
import { getEnv } from '@utils/global'
import { useAppSelector } from '@utils/redux-friend'
import FriendHoc from '@utils/nextjs-friend'

export async function getServerSideProps(context: any) {
  const res: any = await axios.get('https://jsonplaceholder.typicode.com/todos')
  const todos: any = res.data
  return {
    props: {
      todos,
    },
  }
}

const Friend: NextPage = (props: any) => {
  const { user } = props
  const [todos, setTodos] = useState([] as any)
  const a: any = useAppSelector((state: any) => state.global.projectName)
  console.log(a)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response: any) => {
      setTodos(response.data)
    })
    console.log(getEnv('DB'))
  }, [])

  return (
    <div>
      <h1>
        {a} kamal is here {process.env.customKey} == {getEnv('DB')}{' '}
      </h1>
      <div>
        <ul>
          {todos?.map((item: any, id: number) => (
            <li key={id} className={styles.item_color}>
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FriendHoc(Friend, {
  middleware: ['auth'],
  layout: 'base',
})

