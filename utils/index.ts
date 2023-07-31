import { FilterProps } from '@/types'
import { v4 as uuidv4 } from 'uuid';

export async function fetchMatches(filters: FilterProps){  
    const { matchDay, market, limit } = filters

    const guid = uuidv4().toString()

    const response = await fetch(`https://api.tipspesa.matrixsys.co.ke/get-matches?${guid}&limit=${limit}&matchDay=${matchDay}&market=${market}`)

    const result = await response.json()

    return result;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    
    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    
    return newPathName
}