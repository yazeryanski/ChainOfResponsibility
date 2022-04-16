import { Handler, Order } from "./Types";

export default class Banknote {
  private _subscriber: Handler | null = null;

  constructor(
    private _value:number,
    private _order:Order,
  ) {}
  
  handler(amount: number): void | Order {
    const countOfBanknotes = Math.floor(amount / this._value);

    if (countOfBanknotes)
      this._order[this._value] = countOfBanknotes;
    
    const restAmount = amount - (countOfBanknotes * this._value);

    if (this._subscriber)
      return this._subscriber( restAmount )
    else 
      return this._order;
  };
  
  setSubscriber( nextHandler:Handler ):void {
    this._subscriber = nextHandler;
  };
}