import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to="/">
                Cocktails App
                <img src="https://cdn-icons-png.flaticon.com/512/2949/2949092.png" />
            </Link>
        </header>
    )
}
