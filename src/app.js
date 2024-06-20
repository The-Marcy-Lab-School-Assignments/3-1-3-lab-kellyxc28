import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  // await is needed because app() is an async function
  const books = await getFirstThreeFantasyBooks();
  console.log(books);
  // books.then((threeWords) => console.log(threeWords));

  // render out the books
  renderBookList(bookListEl, books);

  bookListEl.addEventListener('click', async (event) => {
    if (
      event.target.tagName === 'BUTTON' &&
      event.target.hasAttribute(`data-author-url-key`)
    ) {
      const authorUrlKey = event.target.getAttribute('data-author-url-key');
      const authors = await getAuthor(authorUrlKey);
      return renderAuthorInfo(authorInfoEl, authors);
    }
  });

  // newUserFormEl.addEventListener('???', () => {})
}
