import React from 'react'

type T_ContentProps = {
  children?: React.ReactNode
}

export default function Content(props: T_ContentProps): JSX.Element {
  const { children } = props

  return (
    <div className="content">
      {children ? children : 'no content'}
    </div>
  )
}
