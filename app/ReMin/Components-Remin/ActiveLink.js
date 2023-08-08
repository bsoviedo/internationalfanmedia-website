import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function ActiveLink({ children, href, activeClassName }) {
  const { asPath } = useRouter()

  // add logic to add activeClassName if path is current pathname
  const child = React.Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}
