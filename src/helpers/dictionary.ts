export const getDictionary = (value: string): string => {
  return englishDictionary[value];
};

const englishDictionary: Record<string, string> = {
  rank: "Rank",
  logo: "Logo",
  name: "Name",
  symbol: "Symbol",
  priceUsd: "USD Price",
  volumeUsd24Hr: "Volume(24Hr)",
  changePercent24Hr: "Charge(24Hr)",
  explorer: "Website"
};
