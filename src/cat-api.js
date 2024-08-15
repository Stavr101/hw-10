import axios from "axios";
API_KEY =
  "live_WP3BmDA2PiOwuiojREydM3EuMwusUybL9hRfLASvpkrdKBuhvHIIQ3GLffjrDyt9";

axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;

export const fetchBreeds = () =>
  fetch("https://api.thecatapi.com/v1/breeds").then((response) =>
    response.json()
  );
export const fetchCatByBreed = (breedId) =>
  fetch(`https://api.thecatapi.com/v1/images/${breedId}`).then((res) =>
    res.json()
  );
