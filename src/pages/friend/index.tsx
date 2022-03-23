import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '@styles/Friend.module.css'
import { getEnv } from '@utils/global'
import { useAppSelector } from '@utils/redux-friend'
import FriendHoc from '@utils/nextjs-friend'

export async function getServerSideProps(context: any) {
  const res: any = await axios.get('https://jsonplaceholder.typicode.com/todos')
  const todos: any = res.data
  
  /**
   * Notfound page return manually dynamic route
   * @see - https://stackoverflow.com/questions/47586505/next-js-return-the-404-error-page-in-getinitialprops
   */
  if (todos?.length < 1) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      todos,
      title: todos[0].title
    },
  }
}

const Friend: NextPage = (props: any) => {
  const { user } = props
  const [todos, setTodos] = useState([] as any)
  const projectName: any = useAppSelector((state: any) => state.global.projectName)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response: any) => {
      setTodos(response.data)
    })
    console.log(getEnv('DB'))
  }, [])

  return (
    <div>

      <Head>
        <title>{props.title}</title>
      </Head>

      <h1>
        {projectName} kamal is here {process.env.customKey} == {getEnv('DB')}{' '}
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

