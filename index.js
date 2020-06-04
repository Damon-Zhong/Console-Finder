const carouselEle= document.querySelector('#carouselExampleControls');
const displayEl = document.querySelector('#display');
const productDisEl = document.querySelector("#productDis")
const productList = [
    {'Name':'PS4', 'Pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg', 'Description': 'sometext','AmazonPrice':'$500','GooglePrice':'$498'},
    {'Name':'Switch', 'Pic':'https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/package_redblue.jpg', 'Description': 'sometext','AmazonPrice':'$450','GooglePrice':'$498'},
    {'Name':'Xbox', 'Pic':'https://images-na.ssl-images-amazon.com/images/I/61p7mgi0GAL._AC_SL1200_.jpg', 'Description': 'sometext','AmazonPrice':'$500','GooglePrice':'$498'}]


function getConsoleName(){
    let inputName = document.querySelector("#searchBox").value;
    console.log(inputName)
    return inputName
}

function searchConsole( consoleName ){
    //Hide slideshow and productlist 
    carouselEle.style.display = 'none';
    productDisEl.style.display = 'none';
    //Match input with our product list
    for( let i=0; i<productList.length; i++){
        if( productList[i].Name.includes( consoleName )){
            //Display product based on consoleName
            displayEl.innerHTML = 
            `<div id=${productList[i].Name} class="jumbotron">
                <p>${productList[i].Name}</p>
                <img src="${productList[i].Pic}" alt="">
                <p class="lead">${productList[i].Description}</p>
                <hr class="my-4">
                <p>Prices</p>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Amazon Price: ${productList[i].AmazonPrice}</span>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Google Shopping Price: ${productList[i].GooglePrice}</span>
                    </div>
                </div>
            </div>`;
            break;
        }else{
            displayEl.innerHTML = `<h3>Sorry! We could not find your console.`;
        }
    }
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

async function fetchGoogleData(){
    let googleAPI = ''
    const AmazonData = await fetch( googleAPI ).then( result => result.json())
}



// var searchConsoleBtn= document.querySelector('#searchBtn');
// searchConsoleBtn.addEventListener('click', searchConsoleFun);

// var productEle= document.querySelector('#allProducts');

// function searchConsoleFun(){
    
//     carouselEle.innerHTML = '<div id="carouselExampleControls" class="carousel slide hide" data-ride="carousel"></div>';
//     console.log(carouselEle.innerHTML); 
//     productEle.classList.remove('hideProduct');
// }
// var productPS4Ele=document.querySelector('#productPS4');
// var compareBtnPS4Btn=document.querySelector('#compareBtnPS4');
// console.log(document.querySelector('#compareBtnPS4'))
// compareBtnPS4Btn.addEventListener('click', compareBtnPS4Fun);
// function compareBtnPS4Fun(){
//     event.preventDefault;
//     console.log('compareBtnPS4 works');
//     productEle.innerHTML='<div id="allProducts" class="row hideProduct hide">'
//     productPS4Ele.classList.remove('hidePS4');
// }

// var productSwitchEle=document.querySelector('#productSwitch');
// var compareBtnSwitchBtn=document.querySelector('#compareBtnSwitch');
// compareBtnSwitchBtn.addEventListener('click',compareBtnSwitchFun);
// function compareBtnSwitchFun(){
//     event.preventDefault;
//     console.log('compareBtnSwitch works');
//     productEle.innerHTML='<div id="allProducts" class="row hideProduct hide">';
//     productSwitchEle.classList.remove('hideSwitch');
// }

// var productXboxEle=document.querySelector('#productXbox');
// var compareBtnXboxBtn= document.querySelector('#compareBtnXbox');
// compareBtnXboxBtn.addEventListener('click',compareBtnXboxFun);
// function compareBtnXboxFun(){
//     event.preventDefault;
//     console.log('compareBtnXbox works');
//     productEle.innerHTML='<div id="allProducts" class="row hideProduct hide">';
//     productXboxEle.classList.remove('hideXbox')
// }

// var homeBtnEle=document.querySelector('#homeBtn');
// homeBtnEle.addEventListener('click', homeBtnFun);
// function homeBtnFun(){
//     // event.preventDefault;
//     console.log('homeBtn works');

// }