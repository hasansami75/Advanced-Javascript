//Falsy:
//const name = '0'; 0 hoile false hobe
//''- empty string hoile false hobe
// variable er value na dile undefined dekhabe
// null dile false dekhabe
//NaN hoile false hobe
// false dile false hobe

//truthy:
//' ' - string er vitor kisu thakle true hobe
let name = 'false';
if(name){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}