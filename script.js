function sendMail(){;
    let group = {
        nom : document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
        
    };
    emailjs.send('service_5pbj5a7','template_z5xvrig',group).then(alert('votre email a etait bien envoyer'))
    
}

function initMap() {
      const position = { lat: 33.5899, lng: -7.6039 }; // Casablanca

      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: position,
      });

      const marker = new google.maps.Marker({
        position,
        map,
        title: "Nous sommes ici !",
      });
    }


