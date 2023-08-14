import React from 'react'

const WithoutLayout = (Component) => {
  return ()=>(
    <div>
     <Component/>
    </div>
  )
}

export default WithoutLayout
