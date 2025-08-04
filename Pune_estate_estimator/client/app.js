/* ---------- helper functions ---------- */
function getBathValue() {
  const uiBathrooms = document.getElementsByName("uiBathrooms");
  for (const i in uiBathrooms) {
    if (uiBathrooms[i].checked) return Number(i) + 1;
  }
  return -1; // Invalid
}

function getBHKValue() {
  const uiBHK = document.getElementsByName("uiBHK");
  for (const i in uiBHK) {
    if (uiBHK[i].checked) return Number(i) + 1;
  }
  return -1; // Invalid
}

/* ---------- API base ("" = same origin) ---------- */
const API = "";          // empty string → same domain/port that served index.html
// If you ever need to test against localhost again, change to:
// const API = "http://127.0.0.1:5000";

/* ---------- estimate price ---------- */
function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");

  if (!window.validateInputs()) {
    console.log("Validation failed. Stopping request.");
    return;
  }

  const sqft      = document.getElementById("area-input");
  const bhk       = getBHKValue();
  const bathrooms = getBathValue();
  const location  = document.getElementById("location-id");
  const estPrice  = document.getElementById("uiEstimatedPrice");
  const descBox   = document.getElementById("location-description");

  /* POST /predict_home_price */
  $.post(
    `${API}/predict_home_price`,
    {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value,
    },
    function (data) {
      const price = (parseFloat(data.estimated_price) + 50).toFixed(2);
      estPrice.innerHTML = `<h2>₹${price} Lakh</h2>`;
    }
  );

  /* POST /get_location_description */
  $.post(
    `${API}/get_location_description`,
    { location: location.value },
    function (data) {
      descBox.innerHTML = `<p>${data.description}</p>`;
    }
  );
}

/* ---------- populate locations on load ---------- */
function onPageLoad() {
  console.log("document loaded");

  $.get(`${API}/get_location_names`, function (data) {
    if (data && data.locations) {
      const uiLocations = document.getElementById("location-id");
      $("#location-id").empty();
      data.locations.forEach(function (loc) {
        $("#location-id").append(new Option(loc));
      });
    }
  });
}

window.onload = onPageLoad;
