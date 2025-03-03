window.addEventListener("load",updateLocation);
document.getElementById("est-btn").addEventListener("click",updateLocation);

function updateLocation(){
    let location = document.getElementById("location-id").value;
    location += `, Pune, Maharashtra`;
    console.log(location);
    var encodedLocation = encodeURIComponent(location);
    
    var newMapURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154413!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedLocation}!5e0!3m2!1sen!2sin!4v1724701433256!5m2!1sen!2sin`;

    document.getElementById("updateMap").src = newMapURL;
};