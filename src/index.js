import axios from "axios";
import SlimSelect from "slim-select";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

API_KEY =
  "live_WP3BmDA2PiOwuiojREydM3EuMwusUybL9hRfLASvpkrdKBuhvHIIQ3GLffjrDyt9";

// axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;

// new SlimSelect({
//   //   select: "#single",
//   select: document.querySelector("#selectElement"),
// });

// let el = document.querySelector("#selectElement");

const select = document.querySelector("#selectElement");
// select.slim.open(); // Or any other options/methods
fetchBreeds();

// const fetchCatByBreed = (breedId) => {
//   fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(
//     (response) => response.json()
//   );
// };

function addSelectOptions(arr) {
  arr.then((data) => select.insertAdjacentHTML("beforeend", addOption(data)));
}
addSelectOptions(fetchBreeds());

function addOption(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}" ">${name}</option>`)
    .join("");
}
select.addEventListener("change", onLoad);

function onLoad() {
  console.log(select.value);
  console.log(fetchCatByBreed(select.value));
}

// description,
//       id,
//       name,
//       origin,
//       reference_image_id,
//       vetstreet_url,
//       wikipedia_url,
