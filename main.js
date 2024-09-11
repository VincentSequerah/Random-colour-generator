const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const changeColour = document.getElementById("changeColour");
const currentColour = document.getElementById('currentColour');
let newColour= '#FFFFFF';

changeColour.addEventListener('click', function () {    //change colour
    
newColour = '#';
    for (let i=0; i<6; i++ ){
        const randomNumber = Math.floor(Math.random()*hexValues.length);

        newColour +=hexValues[randomNumber]; 
    }



document.body.style.backgroundColor=newColour;
currentColour.innerText=newColour;
});

copyColour.addEventListener('click', function(){      //copy colour
    navigator.clipboard.writeText(newColour);
});
