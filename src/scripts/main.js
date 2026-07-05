const ratingCard = document.querySelector(".card__rating");
const thankYouCard = document.querySelector(".card__thank-you");
const selectionForm = document.querySelector(".selection-form");
const ratingOutput = document.querySelector("#user-rating");

function getSelectedRatingValue() {
  return selectionForm.elements.rating.value;
}

function updateThankYouCard(rating) {
  ratingOutput.textContent = rating;
}

function showThankYouCard(rating) {
  updateThankYouCard(rating);

  ratingCard.hidden = true;
  thankYouCard.hidden = false;
}

function handleSubmit(e) {
  e.preventDefault();

  const selectedRating = getSelectedRatingValue();

  showThankYouCard(selectedRating);
}

selectionForm.addEventListener("submit", handleSubmit);