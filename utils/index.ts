
export async function fetchMatches(){
    const timestamp = Date.now();
    const response = await fetch('https://tipspesa.xyz/get-matches?timestamp='+timestamp);

    const result = await response.json();

    return result;
}