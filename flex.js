const divFlex = document.getElementById("flex-container");
const divList = [1,2,3,4,5,6,7,8];

function displayGrid(){
    divList.map((val) => {
        divFlex.innerHTML +=  `<div class="flex-item item-bg-color">${val}</div>`
     })
     
}

displayGrid();
