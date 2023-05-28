export const getAssetsData= async(endpoint: RequestInfo | URL, options?: any): Promise<any> => {
    return await fetch(endpoint, options)
        .then( res => res.json())
        .then( result => {
            const {data, timestamp} = result
            const obj = {
                timestamp: timestamp,
                data: getData(data)
            }
            return obj
        })
        .catch(error => console.error)
}

const getData = (data: any) => {
    const parsedData = data.map( (res: any) => {
        return {
            rank: res?.rank,
            logo: `https://assets.coincap.io/assets/icons/${res?.symbol.toLowerCase()}@2x.png`,
            name: res?.name,
            symbol: res?.symbol,
            priceUsd: res?.priceUsd,
            volumeUsd24Hr: res?.volumeUsd24Hr,
            changePercent24Hr: res?.changePercent24Hr,
            explorer: res?.explorer
        }
    })

    return parsedData
}