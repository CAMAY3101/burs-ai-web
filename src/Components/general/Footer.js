import React from 'react'
import {Route, useLocation} from 'react-router-dom'

import "../../Styles/Common.scss"

import Cards from '../Cards'
import TerrminosYCondiciones from '../TerrminosYCondiciones'

function Footer() {
    const location = useLocation()
  return (
    <div>
        {(location.pathname === '/'  || location.pathname === '/quiero-invertir') && (
            <div> 
                <Cards />
                {location.pathname === '/' && (
                    <TerrminosYCondiciones />
                )}
            </div>
        )}

    </div>
  )
}

export default Footer;