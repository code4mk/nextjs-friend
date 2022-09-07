# Nextjs-Friend
nextjs friend is a nextjs boilerplate.

# Features
* layout system
* middleware (hoc)
* redux
* organize folder structure

## layout
All layouts will live inside layout folder. Then register your layout `./utils/nextjs-friend.tsx`

```tsx
let LayoutEnum: any = {
  'base': Base,
}
```

* usages of layout 

```tsx 
import type { NextPage } from 'next'
import FriendHoc from '@utils/nextjs-friend'

const YourPageName: NextPage = () => {
  return (
    <div>
      // your code 
    </div>
  )
}

export default FriendHoc(YourPageName, {
  layout: 'base',
})
```


# middleware

Auth middleware.

```tsx 
export default FriendHoc(YourPageName, {
  middleware: ['auth'],
})
```

# redux 

redux (redux-toolkit) code will live inside `store` folder

* how to use redux toolkit with nextjs-friend.

```tsx 
import { useAppSelector, useAppDispatch } from '@utils/redux-friend'

function YourPage() {
  const dispatch = useAppDispatch()
  const getReduxState = useAppSelector((state: any) => state.name.data)
}
export default YourPage
```

# Run project 

```bash 
yarn install 
yarn dev
```