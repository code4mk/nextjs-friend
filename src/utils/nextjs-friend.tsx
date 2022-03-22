// https://cheatcode.co/tutorials/how-to-handle-authenticated-routes-with-next-js
import React from 'react'
import Router from 'next/router'
import parse from 'html-react-parser'
import BaseLayout from '@layouts/BaseLayout'
import BaseLayout2 from '@layouts/BaseLayout2'

let LayoutEnum: any =  {
  base: BaseLayout,
  base2: BaseLayout2
}

/**
 * @see - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components/
 */
type MyState =  {
  isNext: boolean,
  layout: string,
  hasLayout: boolean,
  layoutLists: string[],
}

const FriendHoc = (Component: any = null, options: any = { middleware: [] }) => {
  class RouteComponent extends React.Component {
    state: MyState = {
      isNext: false,
      layout: '',
      hasLayout: false,
      layoutLists: ['base', 'base2'],
    }

    componentDidMount() {
      if (options?.layout) {
        if (this.state.layoutLists?.includes(options?.layout)) {
          this.setState({ layout: options?.layout ?? '' })
          this.setState({hasLayout: true})
        } else {
          console.warn(`${options?.layout} not found in layouts folder`)
        }
      }
      
      
      let pathname: any = Router.pathname

      if (pathname === '/login') {
        let isAuth = 'true'
        if (isAuth === 'true') {
          Router.push('/')
        }
      }

      if (options?.middleware?.length && options?.middleware?.includes('auth')) {
        let isAuth = 'true'
        // if not fullfill authenticate redirect login page
        if (isAuth === 'true') {
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

  return RouteComponent
}

export default FriendHoc
