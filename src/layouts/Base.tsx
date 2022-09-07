import type { NextPage } from 'next'
import { Fragment } from 'react'

const Base: NextPage = ({ children }) => {
  return (
    <Fragment>
      <div>
        <p>Header</p>
      </div>
      <Fragment>
        {children}
      </Fragment>
      <div>
        <p>Footer</p>
      </div>
    </Fragment>
  )
}

export default Base
