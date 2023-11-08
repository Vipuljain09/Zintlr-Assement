import React from 'react'

const Card = ({children,className,...props}) => {
  return (
    <div className={`flex items-center px-2 py-1 rounded-lg + ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
