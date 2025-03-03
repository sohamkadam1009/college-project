document.getElementById('feedback-submit').addEventListener("click", saveFeedback);

function validateInputs() {
  var areaInput = document.getElementById("area-input");
  var selectedBHK = document.querySelector('input[name="uiBHK"]:checked');
  var selectedBathroom = document.querySelector(
    'input[name="uiBathrooms"]:checked'
  );
  var selectedLocationValue = document.getElementById("location-id").value;

  var validateEmptyFields =
    areaInput.value === ""
      ? "Please enter the area (sq.ft)"
      : selectedBHK === null
      ? "Please select the BHK value"
      : selectedBathroom === null
      ? "Please select the Bathroom value"
      : selectedLocationValue === ""
      ? "Please select the location"
      : "";

  if (validateEmptyFields) {
    alert(validateEmptyFields);
    return false; // Stop execution
  }

  var areaInputValue = Number(areaInput.value);
  var selectedBHKValue = Number(selectedBHK.value);
  var selectedBathroomValue = Number(selectedBathroom.value);

  if (areaInputValue < 400 || areaInputValue > 6300) {
    alert("Enter the area (sq.ft) between 400 and 6300");
    return false; // Stop execution
  }

  var bhkAllowed =
    areaInputValue >= 400 && areaInputValue < 800
      ? 1
      : areaInputValue >= 800 && areaInputValue < 1200
      ? 2
      : areaInputValue >= 1200 && areaInputValue < 1800
      ? 3
      : areaInputValue >= 1800 && areaInputValue < 3500
      ? 4
      : areaInputValue >= 3500 && areaInputValue < 6300
      ? 5
      : null;

  if (selectedBHKValue !== bhkAllowed) {
    alert(
      `For an area of ${areaInputValue} sq.ft, you can only select ${bhkAllowed} BHK`
    );
    return false;
  }

  if (selectedBathroomValue > selectedBHKValue) {
    alert("The number of bathrooms cannot exceed the number of BHK");
    return false;
  }

  return true;
};


function saveFeedback() {
    var feedbackInput = document.getElementById('feedback-text');
    var feedbackText = feedbackInput.value;

    if (!feedbackText) {
        alert('Please write something in the textarea');
        return;
    }

    sessionStorage.setItem('feedback', feedbackText);
    alert('Feedback saved successfully!');

    feedbackInput.value = '';
    feedbackInput.disabled = true;
    document.getElementById('feedback-submit').disabled = true;
};

// ✅ Expose validateInputs() globally so it can be accessed in app.js
window.validateInputs = validateInputs;