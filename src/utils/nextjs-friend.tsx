// https://cheatcode.co/tutorials/how-to-handle-authenticated-routes-with-next-js
import React from 'react'
import Router from 'next/router'
import BaseLayout from '@layouts/BaseLayout'
import BaseLayout2 from '@layouts/BaseLayout2'
import cookies from './cookies/index'

let LayoutEnum: any =  {
  'base': BaseLayout,
  'base2': BaseLayout2
}

/**
 * @see - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components/
 */
type MyState =  {
  isNext: boolean,
  layout: string,
  hasLayout: boolean
}

const FriendHoc = (Component: any = null, options: any = { middleware: [] }) => {
  class FriendComponent extends React.Component {
    state: MyState = {
      isNext: false,
      layout: '',
      hasLayout: false
    }

    componentDidMount() {
      if (options?.layout) {
        if (Object.keys(LayoutEnum)?.includes(options?.layout)) {
          this.setState({ layout: options?.layout ?? '' })
          this.setState({hasLayout: true})
        } else {
          console.warn(`${options?.layout} not found in layouts folder`)
        }
      }
      
      
      let pathname: any = Router.pathname

      if (pathname === '/login') {
        // auth check
        let auth: any = cookies.get('auth')
        let token: any = cookies.get('token')
        // if not fullfill authenticate redirect login page
        if (auth === 'true' && token !== '' && token !== undefined) {
          Router.push('/')
        }
      }

      if (options?.middleware?.length && options?.middleware?.includes('auth')) {
        
        // auth check
        let auth: any = cookies.get('auth')
        let token: any = cookies.get('token')

        // if not fullfill authenticate redirect login page
        if (auth === 'true' && token !== '' && token !== undefined) {
          this.setState({ isNext: true })
        } else {
          Router.push('/login')
        }
      } else {
        this.setState({ isNext: true })
      }
    }

    render() {
      const { isNext, layout, hasLayout } = this.state
      
      // Return empty div for formality purpose. (failed middleware)
      if (!isNext) {
        return <div />
      }

      return (
        <>
          {(() => {
            if (hasLayout) {
              return (
                React.createElement(
                  LayoutEnum[layout],
                  {},
                  <Component {...this.props} />
                )
              )
            } else {
              return <Component {...this.props} />
            }
          })()}
        </>
      )
    }
  }

  return FriendComponent
}

export default FriendHoc
