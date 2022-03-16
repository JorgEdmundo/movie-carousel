export const KEY = process.env.TMDB_KEY;

export const movieCategories = [
  {
    id: 28,
    name: 'action',
  },
  {
    id: 16,
    name: 'animated',
  },
  {
    id: 27,
    name: 'horror',
  },
];

export const getRatingLevel = (rating) => {
  const ratingLevel = rating > 6.5 ? 'high' : 'average';

  return ratingLevel;
};
