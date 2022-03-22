import type { NextPage } from 'next'

const BaseLayout2: NextPage = ({ children }) => {
  return (
    <>
      <div>top header</div>
      {children}
      <div> top footer</div>
    </>
  )
}

export default BaseLayout2
