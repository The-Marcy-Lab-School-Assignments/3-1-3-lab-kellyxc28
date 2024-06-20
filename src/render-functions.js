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

export const renderNewUserForm = (newUserFormEl) => {};

export const renderNewUser = (newUserEl, newUser) => {};
