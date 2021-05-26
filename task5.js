class Account {
  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === "string") {
      return (this._name = name);
    }
  }

  get balance() {
    return this._balance;
  }
  set balance(balance) {
    if (typeof balance === "number" && balance >= 0) {
      return (this._balance = balance);
    }
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      return this._balance;
    } else {
      return `Amount exceeded balance`;
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      anotherAccount.balance += amount;
      return this._balance;
    } else {
      return `Amount exceeded balance`;
    }
  }

  identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    return `${this._id}|${this._name}|${this._balance}`;
  }
}

let accountFirst = new Account(10, "Bob", 100);
let accountSecond = new Account(11, "Vaspur", 200);

console.log(accountFirst.credit(200));
console.log(accountFirst.transferTo(accountSecond, 100));
