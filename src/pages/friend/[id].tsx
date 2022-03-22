import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const FriendDetails: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router?.query?.id) {
      console.log(router?.query)
    }
  }, [router, router])
  return (
    <div>
      <p>kamal - {router?.query?.id}</p>
    </div>
  )
}

export default FriendDetails
