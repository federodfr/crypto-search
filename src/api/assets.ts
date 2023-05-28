export const getAssetsData = async(endpoint: RequestInfo | URL, options?: any): Promise<any> => {
    return await fetch(endpoint, options)
        .then( res => res.json())
        .then( data => data)
        .catch(error => console.error)
}