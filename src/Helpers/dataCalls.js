export const getMoviesByCategories = async (apiKey, categories) => {
  const [actionResponse, animatedResponse, horrorResponse] = await Promise.all(
    categories.map((category) =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${category.id}`,
      ),
    ),
  );

  const action = await actionResponse.json();
  const animated = await animatedResponse.json();
  const horror = await horrorResponse.json();

  return [action, animated, horror];
};
