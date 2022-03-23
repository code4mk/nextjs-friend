import FriendHoc from "@utils/nextjs-friend"
import type { NextPage } from "next"

const Custom404: NextPage = (props: any) =>  {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Go to homepage</p>
    </>
  )
}

export default FriendHoc(Custom404, {
  layout: 'base',
})