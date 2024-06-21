// async would return the promise in this case
// we were using then/catch for this ^ before

export const getFirstThreeFantasyBooks = async () => {
  try {
    // fetch data with a URL
    const url = 'https://openlibrary.org/subjects/fantasy.json';
    const response = await fetch(url);

    // check if the response is okay
    if (!response.ok) throw new Error(`Failed to get fantasy books`);

    // parse the response body from JSON to a JS Object
    const jsonData = await response.json();

    // test your data and investigate!
    // console.log(jsonData.works);
    // console.log(jsonData.works.slice(0, 3));

    // returns 3 books
    return jsonData.works.slice(0, 3).map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`,
      };
    });
  } catch (error) {
    console.warn(error.message);

    // return new Promise(() => null);
    return null;
  }
};

export const getAuthor = async (authorUrlKey) => {
  try {
    // fetch data with a URL
    const url = `https://openlibrary.org${authorUrlKey}.json`;
    const response = await fetch(url);

    // check if the response is okay
    if (!response.ok) throw new Error(`Failed to get author`);

    // parse the response body from JSON to a JS Object
    const jsonData = await response.json();

    // returns authors
    const authors = {
      birthDate: jsonData.birth_date,
      bio: jsonData.bio,
      wikipediaUrl: jsonData.wikipedia,
      name: jsonData.personal_name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${jsonData.photos[0]}-M.jpg`,
    };

    return authors;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const createNewUser = async (newUserData) => {
  const postOption = {
    method: 'POST', // The type of HTTP request
    body: JSON.stringify(newUserData), // The data to be sent to the API
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // fetch data with a URL
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url, postOption);

    // check if the response is okay
    if (!response.ok) throw new Error(`Failed to create new user`);

    // parse the response body from JSON to a JS Object
    const jsonData = await response.json();
    // console.log(jsonData);
    return jsonData;

    // returns ??
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};
