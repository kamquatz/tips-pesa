'use client'

import { useState } from "react";
import { SearchTeam } from "."

const SearchBar = () => {
    const [team, setTeam] = useState('');

    const handleSearch = () => {

    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchTeam 
                team={team}
                setTeam={setTeam}
                />
            </div>

        </form>
    )
}

export default SearchBar