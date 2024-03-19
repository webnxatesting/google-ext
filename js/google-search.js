console.clear();

// Define the compareZipcode function
function compareZipcode(firstLinkText) {
    // Extract the zipcode from the URL
    const urlZipcode = currentURL.match(/\b\d{5}\b/);
    if (urlZipcode) {
        console.log("Zipcode from URL:", urlZipcode[0]);
    } else {
        console.log("Zipcode not found in URL.");
    }

    // Extract the zipcode from the first link
    const linkZipcode = firstLinkText.match(/\b\d{5}\b/);
    if (linkZipcode) {
        console.log("Zipcode from First Link:", linkZipcode[0]);
    } else {
        console.log("Zipcode not found in First Link.");
    }

    // Compare and log the zipcodes
    if (urlZipcode && linkZipcode && urlZipcode[0] === linkZipcode[0]) {
        console.log("Zipcodes match.");
        return true;
    } else {
        console.log("Zipcodes do not match.");
        return false;
    }
}

// Get the current URL and decode it
var currentURL = decodeURIComponent(window.location.href);
console.log("Current URL:", currentURL);

// Extract the address search query from the URL
var addressSearch = currentURL.split('=')[1].split('&')[0];
addressSearch = addressSearch.replace(/site:(zillow.com|realtor.com|redfin.com)/g, '');
addressSearch = decodeURIComponent(addressSearch);
console.log("Address Search:", addressSearch);

// Extract all numbers and words from the address search
const addressParts = addressSearch.match(/(\d+|\w+)/g);
console.log(addressParts);

// Find the first link in the Google search results
let firstLinkElement = document.querySelector("div.g:first-of-type a");

if (firstLinkElement && currentURL.includes('redfin.com')) {
    const firstLinkText = firstLinkElement.href.toLowerCase();
    console.log("First Link:", firstLinkText);

    // Check if the house number (first part of the address) matches exactly
    const houseNumberMatch = firstLinkText.includes(addressParts[0].toLowerCase());
    console.log("House Number Match:", houseNumberMatch);

    // Check if at least three additional words from the address match in any order
    const additionalMatches = addressParts.slice(1) // Exclude only the house number
        .filter(part => firstLinkText.includes(part.toLowerCase()))
        .length >= 3;
    console.log("Additional Address Component Matches:", additionalMatches);

    const isMatch = houseNumberMatch && additionalMatches;
    console.log("Overall Match:", isMatch);

    if (isMatch && compareZipcode(firstLinkText)) {
        console.log('Complete match found with matching zipcode. Opening link...');
        setTimeout(() => {
            firstLinkElement.click();
        }, 10); // Adjust the timeout as needed
    } else {
        console.log('No complete matching link found or zipcode does not match.');
    }
} else {
    console.log('The current URL is not a redfin.com URL, or the first link is not found.');
}
