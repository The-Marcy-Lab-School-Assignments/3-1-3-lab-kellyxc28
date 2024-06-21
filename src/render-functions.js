export const renderBookList = (bookListEl, books) => {
  // take in a container and data
  // render the data in the container

  bookListEl.innerHTML = '';

  books.forEach((book) => {
    // create elements
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const button = document.createElement('button');

    // insert the data
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;

    p.textContent = `Title: ${book.title}`;

    button.textContent = `View ${book.author.name}`;
    button.setAttribute('data-author-url-key', book.author.urlKey);
    button.dataset.authorUrlKey = book.author.urlKey;

    // append
    li.append(img, p, button);
    bookListEl.append(li);
  });
};

export const renderAuthorInfo = (authorInfoEl, author) => {
  // create elements
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const bdayP = document.createElement('p');
  const bioP = document.createElement('p');
  const a = document.createElement('a');

  // insert the data
  h2.textContent = author.name;
  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;

  bdayP.textContent = `Born: ${author.birthDate}`;
  bioP.textContent = `${author.bio}`;
  a.href = `${author.wikipediaUrl}`;
  a.textContent = 'Wikipedia Link';

  // append
  authorInfoEl.append(h2, img, bdayP, bioP, a);
};

export const renderNewUserForm = (newUserFormEl) => {
  newUserFormEl.innerHTML = `
  <label for="username">Username</label>
  <input type="text" id="username" name="username">
  <label for="is-cool">Is this user cool?</label>
  <input type="checkbox" id="is-cool" name="isCool">
  <label for="favorite-language">Favorite Language</label>
  <select id="favorite-language" name="favoriteLanguage">
    <option value="None">None</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Ruby">Ruby</option>
  </select>
  <button type="submit">Create User</button>
  `;
};

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.textContent = newUser.username;
  // h2.setAttribute('userId', 'id');
  h2.dataset.userId = newUser.id;

  const coolP = document.createElement('p');
  newUser.isCool
    ? (coolP.textContent = 'The hippest in the house!')
    : (coolP.textContent = 'A real square.');

  const favLanguageP = document.createElement('p');
  favLanguageP.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

  newUserEl.append(h2, coolP, favLanguageP);
};
