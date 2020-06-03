const searchEl = document.querySelector("#searchBox")
const carouselEl = document.querySelector("#carousel")
const displayEl = document.querySelector("#display")

const productList = [
    {'Name':'PS4', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
    {'Name':'PS3', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
    {'Name':'PS2', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
]

function searchConsole( consoleName ){
    //Hide the slideshow
    carouselEl.style.display = 'none';
    productList.forEach( 
        function( item, index ){
            if( item.Name.includes( consoleName )){
                console.log(`display`)
                displayEl.innerHTML = `
                <div class="card">
                    <img src="${item.pic}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${item.Name}</h5>
                        <p class="card-text"> ${item.Description} </p>
                        <button href="#" target="_blank" class="btn btn-primary" onclick="comparePrices(${item.Name})">Compare</button>
                    </div>
                </div>`;
            } 
        }
    )
}

function comparePrices(){

}