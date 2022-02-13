const params = process.argv.slice(2);
function areaofCircle(r) {

let area=r*r*Math.PI;

let text= `Yarıçapı ${r} olan dairenin alanı: ${area}` 

console.log(text);


}

areaofCircle(params[0]);