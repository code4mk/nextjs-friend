import type { NextPage } from 'next'

const BaseLayout: NextPage = ({ children }) => {
  return (
    <>
      <div>header</div>
      {children}
      <div>footer</div>
    </>
  )
}

export default BaseLayout
