const btnSumar = document.getElementById("btnMas");
const btnRestar = document.getElementById("btnMenos");

const inputNumber = document.getElementById("numProducto");

console.log(inputNumber);

let inputCantidad = parseInt(document.getElementById('numProducto').value); ;

inputNumber.addEventListener('change',()=>{
    inputCantidad = inputNumber.value;
    console.log(inputCantidad);
});

btnSumar.onclick = function(){ 
     
    if(inputCantidad < 10){  
    	document.getElementById('numProducto').value = ++inputCantidad; 
	    console.log(document.getElementById('numProducto'));
    	console.log("sumas");
    	console.log(inputCantidad);
  }
}

btnRestar.onclick = function(){
    console.log("Restamos?");
    if(inputCantidad>0){
        document.getElementById('numProducto').value = --inputCantidad; 
        console.log("Restas");
    }else{
        console.log("No");
    }
    console.log(inputCantidad);
}

