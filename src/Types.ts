export type Order = {
  [banknoteValue: number]: number
};
export type Handler = (amount: number) => void | Order;
