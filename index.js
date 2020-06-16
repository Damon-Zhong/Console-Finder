const searchEl = document.querySelector("#searchBox")
const carouselEl = document.querySelector("#carousel")
const displayEl = document.querySelector("#display")
const displayPricesEl = document.querySelector("#displayPrices")

//Retrieve user input
function getName(){
    return document.querySelector("#searchBox").value;
}
//Display selected product
async function searchConsole( consoleName ){
    event.preventDefault();
    //Hide the slideshow
    carouselEl.style.display = 'none';
    //Fetch data
    try{
    const AmazonData = await fetchAmazonData( consoleName );
    const GoogleData = await fetchGoogleData( consoleName );
    //Display product info
    displayProduct( AmazonData, GoogleData );
    } catch( e ){
        console.log( `Fetching failed`, e )
    }
}

async function fetchAmazonData( consoleName ){
    console.log(`Run [fetchAmazonData]`)
    let AmazonAPI = `https://amazon-price1.p.rapidapi.com/search?keywords=${consoleName}&marketplace=CA`

     return await fetch(AmazonAPI, {"method": "GET","headers": {
		"x-rapidapi-host": "amazon-price1.p.rapidapi.com",
		"x-rapidapi-key": "249c806d92mshd4f2e071540342ap173426jsn98f88f367b1a"
	    }
     }).then((result)=>result.json()).catch(err => {console.log(err, `Fetch from Amazon failed`);});;
}

async function fetchGoogleData( consoleName ){
    console.log(`Run [fetchGoogleData]`)

    let googleAPI = `https://google-shopping.p.rapidapi.com/search?language=EN&keywords=${consoleName}&country=CA`

   return await fetch(googleAPI, {"method": "GET","headers": {
		"x-rapidapi-host": "google-shopping.p.rapidapi.com",
		"x-rapidapi-key": "249c806d92mshd4f2e071540342ap173426jsn98f88f367b1a"
	    }
     }).then((result)=>result.json()).catch(err => {console.log(err, `Fetch from Google failed`);});
}

function displayProduct( Data1, Data2 ){
    console.log(`Run [displayProduct]`)
    //Clear display window
    displayEl.innerHTML = '';
    //Display Amazon and Google Shopping price info
    displayEl.innerHTML = `
        <div id="displayPrices" class="row">
            <div class="card product">
                <img src="${Data1[0].imageUrl}" class="card-img-top" alt="Nintendo Switch" />
                <div class="card-body"><hr/>
                    <h5 class="card-title">${Data1[0].title} from Amazon</h5>
                    <h5>Amazon Price: $${Data1[0].price}<a href="www.amazon.ca" class="btn btn-primary" target="_blank">Shop at Amazon</a></h5>
                    <hr/>
                    <h5 class="card-title">${Data2[0].title} from Google Shopping</h5>
                    <h5>Google Shopping Price: ${Data2[0].currency}${Data2[0].price}<a href="www.googleshopping.ca" class="btn btn-primary" target="_blank">Shop at Google</a></h5>
                </div>
            </div>
        </div>`;
    console.log(`Amazon Price: $ ${Data1[0].price}`)
    console.log(`Google Price: ${Data2[0].currency}${Data2[0].price}`)
}

//Sample response from Google Shopping API-Data 2
// 20 items
// 0:{4 items
// "title":"PlayStation 4 1TB Console"
// "currency":"CA$"
// "price":379.99
// "google_shopping_id":"16617437904741053003"
// }
// 1:{4 items
// "title":"PlayStation 4 Pro 1TB Console"
// "currency":"CA$"
// "price":499.99
// "google_shopping_id":NULL
// }
// 2:{4 items
// "title":"PlayStation 4 Slim Console - Fortnite Neo Versa Bundle - 1TB [PlayStation 4 System]"
// "currency":"CA$"
// "price":534.99
// "google_shopping_id":"8346607372788258562"
// }

//Sample response from Amazon Price API
// 10 items
// 0:{10 items
//     "ASIN":"B074LRF639"
//     "title":"PlayStation 4 - 1TB Slim - Console Edition"
//     "price":"CDN$ 379.99"
//     "listPrice":""
//     "imageUrl":"https://m.media-amazon.com/images/I/31YXP3Vru-L._SL160_.jpg"
//     "detailPageURL":"https://www.amazon.ca/dp/B074LRF639"
//     "rating":"4.6"
//     "totalReviews":"1346"
//     "subtitle":"Playstation (Aug 8, 2017)"
//     "isPrimeEligible":"1"
//     }
//     1:{10 items
//     "ASIN":"B01LR207T8"
//     "title":"PlayStation 4 Pro - 1TB - Console Edition"
//     "price":"CDN$ 549.97"
//     "listPrice":""
//     "imageUrl":"https://m.media-amazon.com/images/I/319DGQem-qL._SL160_.jpg"
//     "detailPageURL":"https://www.amazon.ca/dp/B01LR207T8"
//     "rating":"4.5"
//     "totalReviews":"398"
//     "subtitle":"Playstation (Nov 10, 2016)"
//     "isPrimeEligible":"0"
//     }
//     2:{10 items
//     "ASIN":"B07YLZTK1S"
//     "title":"Only on PlayStation PS4™ Bundle"
//     "price":"CDN$ 559.99"
//     "listPrice":""
//     "imageUrl":"https://m.media-amazon.com/images/I/412Os29dO1L._SL160_.jpg"
//     "detailPageURL":"https://www.amazon.ca/dp/B07YLZTK1S"
//     "rating":"4.6"
//     "totalReviews":"577"
//     "subtitle":"Sony (Nov 27, 2019)"
//     "isPrimeEligible":"1"
//     }