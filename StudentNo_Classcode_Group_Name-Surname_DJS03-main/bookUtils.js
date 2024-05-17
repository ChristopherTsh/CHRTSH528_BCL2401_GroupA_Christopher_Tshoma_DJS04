import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";
export function themeColor(type = "") {
    if (!type) {
      return;
    }
    if (type === "night") {
      document.documentElement.style.setProperty("--color-dark", "255, 255, 255");
      document.documentElement.style.setProperty("--color-light", "10, 10, 20");
    } else {
      document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
      document.documentElement.style.setProperty(
        "--color-light",
        "255, 255, 255"
      );
    }
  };

 export function remaining(books,page,BOOKS_PER_PAGE) {
    document.querySelector("[data-list-button]").innerHTML = `
      <span>Show more</span>
      <span class="list__remaining"> (${
        books.length - page * BOOKS_PER_PAGE > 0
          ? books.length - page * BOOKS_PER_PAGE
          : 0
      })</span>
  `;
  }
  