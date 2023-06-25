'use client'

import { useState } from "react";
import { SearchTeam } from "."
import { MatchProps } from "@/types";

interface SearchBarProps {
    matches: MatchProps[]
}

const SearchBar = ({ matches }: SearchBarProps) => {
    const [{ kickoff_date, kickoff_time, home, away, prediction, odd, probability, result, status }] = matches;
    const [team, setTeam] = useState('');

    const handleSearch = () => {

    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchTeam 
                matches = {matches}
                team={team}
                setTeam={setTeam}
                />
            </div>

        </form>
    )
}

export default SearchBar