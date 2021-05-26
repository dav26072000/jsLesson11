class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    } else {
      throw new Error("is not string");
    }
  }

  get email() {
    return this._email;
  }
  set email(email) {
    if (typeof email === "string") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(email).toLowerCase())) {
        this._email = email;
      } else {
        throw new Error("Not vaild email");
      }
    } else {
      throw new Error("is not string");
    }
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    if (gender === "Male" || gender === "Female") {
      return (this._gender = gender);
    } else {
      throw new Error("Not vaild gender");
    }
  }

  toString() {
    return `${this._name} ${this._email} ${this._gender}`;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(title) {
    if (typeof title === "string") {
      return (this._title = title);
    } else {
      throw new Error("Title is not a string");
    }
  }

  get author() {
    return this._author;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    if (typeof price == Number && price >= 0) {
      return (this._price = price);
    } else {
      throw new Error("is not number or les than 0");
    }
  }

  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
    if (typeof quantity == Number && quantity >= 0) {
      return (this._quantity = quantity);
    } else {
      throw new Error("is not number or les than 0");
    }
  }

  getProfit() {
    return this._price * this._quantity;
  }

  toString() {
    return `${this._title} -> ${this._author}  `;
  }
}

// let autor = new Author();
let book = new Book(
  "Vaspur",
  new Author("bob", "bob@mail.ru", "Male"),
  1000,
  10
);
console.log(book.toString());
