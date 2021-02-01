import React, { useMemo } from 'react'
import classNames from 'classnames'

type T_LayoutProps = {
  type: 'row' | 'column'
  style?: CSSStyleDeclaration | {}
  children?: React.ReactNode
}

type T_LayoutClassNames = {
  flex: boolean
  flexRow?: boolean
  flexColumn?: boolean
}

const defaultProps: T_LayoutProps = {
  type: 'column',
}

export default function Layout(props: T_LayoutProps = defaultProps): JSX.Element {
  const { type, style, children } = props

  const cls = useMemo((): string => {
    const result: T_LayoutClassNames = {
      flex: true,
    }

    if (type === 'row') {
      result['flexRow'] = true
    } else {
      result['flexColumn'] = true
    }

    return classNames(result)
  }, [])

  return (
    <div className={cls} style={style ? style : {}}>
      {children}
    </div>
  )
}