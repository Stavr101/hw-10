export const fetchBreeds = () =>
  fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
    response.json()
  );
export const fetchCatByBreed = (breedId) => {
  fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(
    (response) => response.json()
  );
};
