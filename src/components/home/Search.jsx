import React, { useRef } from 'react'
import { FetchSearch } from '../../redux/featuers/data/DataSlice'
import { useDispatch } from 'react-redux';

export const Search = () => {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const inputSearch = () => {
        const value = inputRef.current.value
        dispatch(FetchSearch({ search: value }))
    }

    const getSearch = (e) => {
        e.preventDefault()
    }

    return (
        <section id='search'>
            <form onSubmit={getSearch} >
                <input onChange={inputSearch} ref={inputRef} type="text" placeholder='Search...' />
            </form>
        </section>
    )
}