import Banknote from './Banknote';
import { Order } from './Types';

export default class ATM {
  private _Banknotes:Banknote[] = [];
  private _order:Order = {};
  
  constructor(...args: number[]) {
    this._setupBanknotes(args);
    this._setupSubscribers();
  }

  private _setupBanknotes(values:number[]) {
    for (let i = 0; i < values.length; i++){
      this._Banknotes.push( new Banknote( values[i], this._order ) );
    }
  }

  private _setupSubscribers() {
    for(let i = 0; i < this._Banknotes.length; i++) {
      const banknote = this._Banknotes[i];
      const nextBanknote = this._Banknotes[i + 1] || null;
      
      if (nextBanknote)
        banknote.setSubscriber( nextBanknote.handler.bind(nextBanknote) )
    }
  }

  public getMoney(amount:number) {
    return this._Banknotes[0].handler(amount);
  }
}