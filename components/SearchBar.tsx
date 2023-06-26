'use client'

import { useState } from "react";
import { SearchTeam } from "."
import { MatchProps } from "@/types";
import Image from "next/image"

interface SearchBarProps {
    matches: MatchProps[]
}

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit"
        className={`-ml-3 z-10 ${otherClasses}`}>            
            <Image 
            src='/magnifying-glass.svg'
            alt='magnifying glass'
            width={40}
            height={40}
            className='object-contain'
            />
    </button>
)

const SearchBar = ({ matches }: SearchBarProps) => {
    const [{ kickoff_date, kickoff_time, home, away, prediction, odd, probability, result, status }] = matches;
    const [team, setTeam] = useState('');

    const handleSearch = () => {

    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchTeam
                    matches={matches}
                    team={team}
                    setTeam={setTeam}
                />
            </div>

            <SearchButton otherClasses='sm:hidden' />

        </form>
    )
}

export default SearchBar