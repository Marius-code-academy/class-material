class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const myAnimal = new Animal("murkis");

const secondAnimal = new Animal("Ryzikas");

console.log(myAnimal.name);

myAnimal.move();

secondAnimal.move();

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

const myDog = new Dog("Rexas", "Labrador");

console.log(myDog);

myDog.move();
myDog.bark();

class Library {
  #address;

  constructor(name, address, books) {
    this.name = name;
    this.#address = address;
    this.books = books;
  }

  getAddress() {
    return this.#address;
  }

  borrowBook(title) {
    const book = this.books.find((book) => book.title === title);
    console.log(book);

    if (book) {
      this.books = this.books.filter((b) => b.title !== title);
      console.log(`You have borrowed ${book.title} from ${this.name}`);
    } else {
      console.log(`Book ${title} not found in ${this.name}`);
    }
  }

  addBook(book) {
    this.books.push(book);
  }
}

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

const library = new Library("Martyno Mazvydo biblioteka", "Vilnius", [book1, book2, book3]);

library.borrowBook("asdf");
library.borrowBook("Harry Potter");
library.borrowBook("Harry Potter");

library.addBook(new Book("Nauja knyga", "Naujas Autorius", 2024));

console.log(library.books);

console.log(library.getAddress());
