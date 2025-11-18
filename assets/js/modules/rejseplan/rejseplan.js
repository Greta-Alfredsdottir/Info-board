export default async function hentRejseplan() {
      
        try {
        // Hent data fra et API
        const response = await fetch ("https://www.rejseplanen.dk/api/nearbyDepartureBoard?accessId=5b71ed68-7338-4589-8293-f81f0dc92cf2&originCoordLat=57.048731&originCoordLong=9.968186&format=json");
        const data = await response.json(); // vent på at data bliver klar
            console.log(data.items)
            displayRejseplan(data.items)
        
      } 
      catch (error) {
        document.getElementById("rejseplan").innerHTML = "Der skete en fejl 😢";
        console.error(error);
      }
    }
    function displayRejseplan(data){ 
        let container = document.getElementById("rejseplan")
        data.forEach(newRejseplan => {
        container.innerHTML+= `<h6>${newRejseplan.title}</h6>`
        });
    }