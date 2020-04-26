

function calc () {
    const w =document.getElementById("widthR").value;
const h =document.getElementById("lengthR").value;
const d =document.getElementById("heightR").value;
// const unit =document.getElementById("sqm").value;
let unit = 0;
if (document.getElementById("sqm").checked) {
    unit = document.getElementById("sqm").value ;

} else if (document.getElementById("sqft").checked) {
   unit = document.getElementById("sqft").value ;

}


if (w==="" || h==="" || d==="") {
    alert("You need a value for each field")
}
var result =(w * h * d) ;



    document.getElementById("answertxt").value = (result+ " "+ unit);
   

}