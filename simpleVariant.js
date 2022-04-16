function atm(amount) {
  let balance = amount;
  const banknotes = [100, 50, 20, 5, 1];
  const hashMap = {};

  for (let i = 0; i < banknotes.length; i++) {
    const banknote = banknotes[i];
    const countOfBankNote = Math.floor( balance / banknote );
    
    if (!countOfBankNote) continue;

    balance -= countOfBankNote * banknote;
    hashMap[banknote] = countOfBankNote;
  }

  return hashMap;
}

console.log(atm(412));
console.log(atm(981));
console.log(atm(800));
console.log(atm(15));