// const api = '';

// async function game(api){

//     const result = await fetch(api).then((result)=>result.json());
//     console.log(result);
    
// }


//user input console name click search
//slideshow section replaced by product card with price in CA$ (option: convert currency)

//user click compare
//display data from api (call api function)

//user click covert currency
//calculate converted amount in designated currency
//search by input return


// const searchEl = document.querySelector("#searchBox")
// const carouselEl = document.querySelector("#carousel")
// const displayEl = document.querySelector("#display")

// const productList = [
//     {'Name':'PS4', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
//     {'Name':'PS3', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
//     {'Name':'PS2', 'pic':'https://i5.walmartimages.ca/images/Large/766/752/6000197766752.jpg','Description':'sometext'},
// ]

// function searchConsole( consoleName ){
//     //Hide the slideshow
//     carouselEl.style.display = 'none';
//     productList.forEach( 
//         function( item, index ){
//             if( item.Name.includes( consoleName )){
//                 console.log(`display`)
//                 displayEl.innerHTML = `
//                 <div class="card">
//                     <img src="${item.pic}" class="card-img-top"/>
//                     <div class="card-body">
//                         <h5 class="card-title">${item.Name}</h5>
//                         <p class="card-text"> ${item.Description} </p>
//                         <button href="#" target="_blank" class="btn btn-primary" onclick="comparePrices(${item.Name})">Compare</button>
//                     </div>
//                 </div>`;
//             } 
//         }
//     )
// }

// function comparePrices(){

// }
var searchConsoleBtn= document.querySelector('#searchBtn');
searchConsoleBtn.addEventListener('click', searchConsoleFun);
var carouselEle= document.querySelector('.carousel');
var productEle= document.querySelector('#allProducts');

function searchConsoleFun(){
    console.log('works');
    carouselEle.innerHTML = '<div id="carouselExampleControls" class="carousel slide hide" data-ride="carousel"></div>';
    console.log(carouselEle.innerHTML); 
    productEle.classList.remove('hideProduct');


    


}
var productPS4Ele=document.querySelector('#productPS4');
var compareBtnPS4Btn=document.querySelector('#compareBtnPS4');
compareBtnPS4Btn.addEventListener('click', compareBtnPS4Fun);
function compareBtnPS4Fun(){
    event.preventDefault;
    console.log('compareBtnPS4 works');
    productEle.innerHTML='<div id="allProducts" class="row hideProduct hide">'
    productPS4Ele.classList.remove('hidePS4');

}

var productSwitchEle=document.querySelector('#productSwitch');
var compareBtnSwitchBtn=document.querySelector('#compareBtnSwitch');
compareBtnSwitchBtn.addEventListener('click',compareBtnSwitchFun);
function compareBtnSwitchFun(){
    event.preventDefault;
    console.log('compareBtnSwitch works');
    productEle.innerHTML='<div id="allProducts" class="row hideProduct hide">';
    productSwitchEle.classList.remove('hideSwitch');
}

var productXboxEle=document.querySelector('#productXbox');
var compareBtnXboxBtn= document.querySelector('#compareBtnXbox');
compareBtnXboxBtn.addEventListener('click',compareBtnXboxFun);
function compareBtnXboxFun(){
    event.preventDefault;
    console.log('compareBtnXbox works');
    productEle.innerHTML='<div id="allProducts" class="row hideProduct hide">';
    productXboxEle.classList.remove('hideXbox')
}

// var homeBtnEle=document.querySelector('#homeBtn');
// homeBtnEle.addEventListener('click', homeBtnFun);
// function homeBtnFun(){
//     // event.preventDefault;
//     console.log('homeBtn works');

// }