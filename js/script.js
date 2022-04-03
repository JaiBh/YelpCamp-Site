import getElement from "../js/utils.js"

// Declerations
const announceCloseBtn = getElement("#announcement-close-btn");
const announcement = getElement(".announcement-container")

// Functions
const hideDisplay = () =>{
    announcement.style.display = "none"
}


announceCloseBtn.addEventListener("click", hideDisplay)


