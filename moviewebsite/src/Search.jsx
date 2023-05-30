import React from 'react';
import { UseGlobalContextProvider } from './context';

const Search = () => {
    const { query, setQuery, isError, isLoading } = UseGlobalContextProvider();
    return (
        <>
            {/* Heading */}
            <h1 className='head my-5 text-center'>Search Your Favourite Movie</h1>
            {/* Search Bar */}
            <div className="text-center">
                <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                    <input
                        type="text"
                        placeholder='Search Movie...'
                        value={query}
                        className='input-field my-5'
                        onChange={(e) => { setQuery(e.target.value) }}
                    />
                </form>
            </div>
            <div className="error text-center">
                {
                    isError.show &&
                    <>
                        <h1>Error</h1>
                        <p>{`${isError.msg}...`}</p>
                    </>
                }
            </div>
                {
                    isLoading && 
                    <div className="loading text-center mt-5">
                        <h1>Loading...</h1>
                    </div>
                }
            
        </>

    )
}

export default Search;
