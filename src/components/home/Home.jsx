import React from 'react'
import { CocktailList } from '../home/CocktailList'
import { Container } from './Container'
import { Search } from './Search'

export const Home = () => {
    return (
        <main>
            <Search />
            <Container>
                <CocktailList />
            </Container>
        </main>
    )
}
