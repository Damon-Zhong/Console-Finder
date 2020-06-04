const searchEl = document.querySelector("#searchBox")
const carouselEl = document.querySelector("#carousel")
const displayEl = document.querySelector("#display")
const productList = [
    {'Name':'PS4', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
    {'Name':'PS3', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
    {'Name':'PS2', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},]
const AmazonData = {'Name':'Amazon-PS4', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'};
const eBayData = {'Name':'eBay-PS4', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'};
//Retrieve console name from input 
function getConsoleName(){
    return document.querySelector("#searchBox").value;
}
//Display selected product
function searchConsole( consoleName ){
    event.preventDefault();
    //Hide the slideshow
    carouselEl.style.display = 'none';
    //Look for console name is product list and display 
    productList.forEach( 
        function( item, index ){
            if( item.Name.includes( consoleName )){
                displayEl.innerHTML = `
                <div class="card">
                    <img src="${item.pic}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${item.Name}</h5>
                        <p class="card-text"> ${item.Description} </p>
                        <button class="btn btn-primary" onclick="comparePrices('${item.Name}')">Compare</button>
                    </div>
                </div>`;
            } 
        }
    )
}

async function fetchAmazonData( consoleName ){
    let AmazonAPI = `https://amazon-price1.p.rapidapi.com/search?keywords=${consoleName}&marketplace=CA`

    const AmazonData = await fetch(AmazonAPI, {"method": "GET","headers": {
		"x-rapidapi-host": "amazon-price1.p.rapidapi.com",
		"x-rapidapi-key": ""
	    }
     }).then((result)=>result.json()).catch(err => {console.log(err);});
     return AmazonData;
}

async function fetchGoogleData( consoleName ){
    let googleAPI = `https://google-shopping.p.rapidapi.com/search?language=EN&keywords=${consoleName}&country=CA`

    const googleData = await fetch(googleAPI, {"method": "GET","headers": {
		"x-rapidapi-host": "google-shopping.p.rapidapi.com",
		"x-rapidapi-key": ""
	    }
     }).then((result)=>result.json()).catch(err => {console.log(err);});
     return googleData;
}

function comparePrices( consoleName ){
    //Clear display window
    displayEl.innerHTML = '';
    //Display Amazon and eBay price info
    if( eBayData.Name.includes( consoleName ) || AmazonData.Name.includes( consoleName )){
        displayAmazonPrice( consoleName );
        displayeBayData( consoleName );
    }else{
        displayEl.innerHTML = `Sorry! We couldn't find your console.`;
    }
}

function displayAmazonPrice( consoleName ){
    if ( AmazonData.Name.includes( consoleName ) ){
        console.log(`Amazon data`)
        displayEl.innerHTML += `<div class="card">
        <img src="${AmazonData.pic}" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">${AmazonData.Name}</h5>
            <p class="card-text"> ${AmazonData.Description} </p>
            <button class="btn btn-primary" onclick="convertPrices()">Show price in my currency</button>
        </div>
    </div>`;
    }else return;
}

function displayeBayData( consoleName ){
    if( eBayData.Name.includes( consoleName ) ){
        console.log(`eBay data`)
        displayEl.innerHTML += `<div class="card">
        <img src="${eBayData.pic}" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">${eBayData.Name}</h5>
            <p class="card-text"> ${eBayData.Description} </p>
            <button class="btn btn-primary" onclick="convertPrices()">Show price in my currency</button>
        </div>
    </div>`;
    }else return;
}

async function fetchData (){

}