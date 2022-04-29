const hotelInformation = document.getElementById("hotel_information.js")

export function printInformation (element) {
    hotelInformation.innerHTML = ""
    //creamos el div
    const containerInformation = document.createElement("div");
    //le agregamos la clase
    containerSpecifications.setAttribute("class", "container__hotel--information");
    //Lo ponemos adentro del div con id=hotel__information
    hotelInformation.appendChild(containerInformation);

    const paragraphDescription = document.createElement("p");
    paragraphDescription.setAttribute("class", "container__hotel--description");
    paragraphDescription.textContent = element.description;
    containerInformation.appendChild(paragraphDescription);

    const containerSpecifications = document.createElement("div");
    containerInformation.setAttribute("class", "container__hotel--specifications");
    hotelInformation.appendChild(containerSpecifications);

    const listUbication = document.createElement("ul");
    listUbication.setAttribute("class", "hotel__ubication");
    containerSpecifications.appendChild(listUbication);

    const listElementPrice = document.createElement("li");
    listElementPrice.setAttribute("class", "hotel__price")
    listElementPrice.textContent = element.price;
    listUbication.appendChild(listElementPrice);

    const listElementCountry = document.createElement("li");
    listElementCountry.textContent = element.country;
    listUbication.appendChild(listElementCountry);

    const listElementCity = document.createElement("li");
    listElementCity.textContent = element.city;
    listUbication.appendChild(listElementCity);

    const listElementRooms = document.createElement("li");
    listElementRooms.textContent = element.rooms;
    listUbication.appendChild(listElementRooms);
}