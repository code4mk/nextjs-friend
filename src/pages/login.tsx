import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import cookies from '@utils/cookies'
import FriendHoc from '@utils/nextjs-friend'

const Login: NextPage = () => {
  const router: any = useRouter()
  useEffect(() => {
    console.log(Object.keys(router.components))
  }, [router, router])

  const login: any = () => {
    cookies.set('token', 'test token', { path: '/' })
    cookies.set('auth', 'true', { path: '/' })
    window.location.replace('/')
  }

  return (
    <div>
      <Link href="/">
        <a href="">Home</a>
      </Link>
      <div>
        <button onClick={(e: any) => login()}>Login</button>
      </div>
    </div>
  )
}

export default FriendHoc(Login)
