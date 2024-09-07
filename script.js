
    // Function to handle button selection
    function toggleActive(buttons, clickedButton) {
        if(clickedButton.classList.contains('active')){
            clickedButton.classList.remove('active');      
        }
        else{
          // Remove 'active' class from all buttons
          buttons.forEach(button => button.classList.remove('active'));
          // Add 'active' class to the clicked button
          clickedButton.classList.add('active');        
        }
    }

    // Add event listeners to BHK buttons
    const bhkButtons = document.querySelectorAll('.bhk-btn');
    bhkButtons.forEach(button => {
        button.addEventListener('click', () => toggleActive(bhkButtons, button));
    });

    // Add event listeners to Bathrooms buttons
    const bathroomButtons = document.querySelectorAll('.bathrooms-btn');
    bathroomButtons.forEach(button => {
        button.addEventListener('click', () => toggleActive(bathroomButtons, button));
    });


    // console.log("Script loaded successfully");


