import SlimSelect from "slim-select";

import { fetchBreeds, fetchCatByBreed } from "./cat-api";
const select = document.querySelector("#selectElement");
const infoBreed = document.querySelector(".cat-info");

fetchBreeds();

function addSelectOptions(arr) {
  arr.then((data) => select.insertAdjacentHTML("beforeend", addOption(data)));
}
addSelectOptions(fetchBreeds());
// new SlimSelect({
//   select: "#selectElement",
// });
function addOption(arr) {
  //   console.log(arr);

  return arr
    .map(
      ({ name, reference_image_id }) =>
        `<option value="${reference_image_id}" >${name}</option>`
    )
    .join("");
}
select.addEventListener("change", onLoad);

function onLoad() {
  fetchCatByBreed(select.value)
    .then((data) => (infoBreed.innerHTML = markupInfoThumb(data)))
    .catch((error) => console.log("error", error));
}

function markupInfoThumb({ breeds, url }) {
  console.log(breeds[0].name);

  return `  <img src="${url}" width='500px' alt="${breeds[0].alt_names}" />
      <h1>${breeds[0].name}</h1>
      <p>${breeds[0].description}</p>
      <p>${breeds[0].temperament}</p>`;
}
