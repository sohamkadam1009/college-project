function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (var i in uiBathrooms) {
    if (uiBathrooms[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i in uiBHK) {
    if (uiBHK[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");

  if (!window.validateInputs()) {
    console.log("Validation failed. Price estimation stopped.");
    return; // Stop execution if validation fails
  }
  
  var sqft = document.getElementById("area-input");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("location-id");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "http://127.0.0.1:5000/predict_home_price";
  $.post(
    url,
    {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value,
    },
    function (data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML =
        "<h2>" +
        (parseFloat(data.estimated_price.toString()) + 50).toFixed(2) +
        " Lakh</h2>";
      console.log(status);
    }
  );
  console.log("Get Location Description button clicked");
  var location = document.getElementById("location-id");
  var descriptionElement = document.getElementById("location-description");
  var url = "http://127.0.0.1:5000/get_location_description";

  $.post(url, { location: location.value }, function (data, status) {
    console.log("Location description: ", data.description);
    descriptionElement.innerHTML = `<p>${data.description}</p>`;
  });
}

function onPageLoad() {
  console.log("document loaded");
  var url = "http://127.0.0.1:5000/get_location_names";
  $.get(url, function (data, status) {
    console.log("got response for get_location_names request");
    if (data) {
      var locations = data.locations;
      var uiLocations = document.getElementById("location-id");
      $("#location-id").empty();
      for (var i in locations) {
        var opt = new Option(locations[i]);
        $("#location-id").append(opt);
      }
    }
  });
}

window.onload = onPageLoad;
