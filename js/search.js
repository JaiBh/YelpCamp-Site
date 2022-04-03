import getElement from "../js/utils.js"

const campgroundsArray = [
    {name:"Mount Ulap", img:"../Assets/Camp Images/Compressed Images/Calaguas Island.jpg", desc:"One of the most famous hikes in Benguet is Mt Ulap in Itogon."}, 
    {name:"Onay Beach", img:"../Assets/Camp Images/Compressed Images/Onay Beach.jpg", desc:"This is one of the best beach camping sites, beautiful and pristine."}, 
    {name:"Calaguas Islands", img:"../Assets/Camp Images/Compressed Images/Calaguas Island.jpg", desc:"A paradise of islands that can rival the white sand beauty of Boracay."},
    {name:"Seven Sisters Waterfall", img:"../Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg", desc:"The Seven Sisters is the 39th tallest waterfall in Norway."}, 
    {name:"Latik Riverside", img:"../Assets/Camp Images/Compressed Images/Latik Riverside.jpg", desc:"Philippines is one of the most dazzling countries in all of Asia."}, 
    {name:"Buloy Springs", img:"../Assets/Camp Images/Compressed Images/Buloy Springs.jpg", desc:"This is one of the best beach camping sites, beautiful and pristine."}
];


// Search form functionality

// Variables
const searchFormInput = getElement(".search-form-input")
const campgroundsContainerDOM = getElement(".campgrounds-container")

// functions
const populateCampgrounds = (campgrounds) =>{
    console.log(campgrounds);
    if(campgrounds.length === 0){
        campgroundsContainerDOM.innerHTML = `<p>There are no results for this term</p>`
    } else{
        let campgroundsHTML = campgrounds.map(campground =>{
            return  `<!-- campground item -->
            <article class="campground">
                <div class="campground-container">
                    <div class="campground-img-container">
                        <img src="${campground.img}" alt="${campground.name}" class="campground-img">
                    </div>
                    <div class="campground-info">
                        <h4>${campground.name}</h4>
                        <p>${campground.desc}</p>
                        <a href="./single-campground.html" class="campground-btn btn">View Campground</a>
                    </div>
                </div>
            </article>
            <!-- end of campground -->`
        }).join("");
        campgroundsContainerDOM.innerHTML = campgroundsHTML;
    }
    
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function(){
    populateCampgrounds(campgroundsArray);
})

searchFormInput.addEventListener("keyup", function(){
    let searchValue = searchFormInput.value.toLowerCase();
    const newCampgrounds = campgroundsArray.filter(campground => campground.name.toLowerCase().includes(`${searchValue}`) );
    populateCampgrounds(newCampgrounds);
})
