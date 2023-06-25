
export async function fetchMatches(matchDay?: string){  
    const response = await fetch('https://tipspesa.xyz/get-matches?timestamp='+new Date()+'&matchDay='+matchDay);

    const result = await response.json();

    return result;
}