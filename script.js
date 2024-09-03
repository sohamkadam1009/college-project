
    // Function to handle button selection
    function toggleActive(buttons, clickedButton) {
        if(clickedButton.classList.contains('active')){
            clickedButton.classList.remove('active');      
        }
    else
        {
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

    // //Add event listeners to deselect the button
    // const bhkButton = document.querySelectorAll('.bhk-btn');
    // bhkButton.forEach(button => {
    //     button.addEventListener('click', () => removeButton(button,bhkButton))
    // });

    // const bathroomButton = document.querySelectorAll('.bathrooms-btn');
    // bathroomButton.forEach(button => { 
    //     button.addEventListener('click', () => removeButton(button,bathroomButton))
    // });


    // function removeButton(deselectedButton,buttons) {
    //     //remove 'active class from from deselected button
    //     if(deselectedButton.classList===buttons.classList)
    //     {
    //         deselectedButton.classList.remove('active');
    //     }
        
    // }
    // console.log("Script loaded successfully");


