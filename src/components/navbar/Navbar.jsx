import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const shopCart = <FontAwesomeIcon icon={faBars} />

function Navbar() {
  return (
    <div>{shopCart}</div>
  )
}

export default Navbar