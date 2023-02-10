// Make a request to the API using the fetch function
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    // Do something with the data, such as display it on your website
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    // Create a container for the movie list
    const container = document.createElement('div');

    // Create a list for the movies
    const movieList = document.createElement('ul');

    // Loop through the results and add each movie to the list
    data.results.forEach(movie => {
      const listItem = document.createElement('li');
      listItem.innerHTML = movie.title;
      movieList.appendChild(listItem);
    });

    // Add the movie list to the container
    container.appendChild(movieList);

    // Add the container to the page
    document.body.appendChild(container);
  })
  .catch(error => {
    console.error(error);
  });
