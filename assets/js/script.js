var c = 1000;

var exp1 = c < 999;
var exp2 = c > 1000;
console.log(c < 999);
console.log (c > 1000);

if (exp1 && exp2){
    console.log ('T T');

}

else if (exp1) {
    console.log ('T F');

}

else if(exp2) {
    console.log ('F T');

}

else {
    console.log ('F F');
}
