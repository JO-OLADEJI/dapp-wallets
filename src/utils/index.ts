export const shortenAddress = (address: string): string => {
  if (address.length === 42) {
    return `${address.substring(0, 5)}...${address.substring(42 - 4)}`;
  }
  else {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
}
