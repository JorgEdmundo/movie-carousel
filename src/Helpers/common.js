export const getAllMovies = () => {
  const storedMovies = localStorage.getItem('allMovies');
  const initialValue = JSON.parse(storedMovies);
  return initialValue || {};
};

export const getWishlist = () => {
  const storedWishlist = localStorage.getItem('wishlist');
  const initialValue = JSON.parse(storedWishlist);
  return initialValue || [];
};
