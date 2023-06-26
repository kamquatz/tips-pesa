import { v4 as uuidv4 } from 'uuid';

export async function fetchMatches(matchDay?: string){  
    const guid = uuidv4();

    const response = await fetch(`https://tipspesa.xyz/get-matches?guid=${guid}&matchDay=${matchDay}`);

    const result = await response.json();

    return result;
}