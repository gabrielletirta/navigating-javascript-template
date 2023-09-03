// Assignment lesson one:
console.log("Hello World");
console.log(1+2);

// Assignment lesson two:
// The usage difference between var, let, and const are : 
// var is function scoped. const and let are block scoped. Let cannot be declared. Variables that are defined with 'Let' cannot be declared more than once if we defined that previously in the same scope, whereas variables that are defined with 'Var' can be declared again even if it has been defined previously in the same scope. Const can neither be updated nor re-declared. Var and let can be declared without being initialized, const must be initialized during declaration.
let albumName = "Night Dancer";
const songAmount = 12;
var isBestAlbum = true;
// dateOfRelease equals null as for now. This will be updated once we get the exact release date in the future.
let dateOfRelease = null;

let albumWinner = `2023 best album goes to: ${albumName} with total ${songAmount} song! 
Is this album 2023's best album? ${isBestAlbum} 
Now, you can start pre-order this album on: ${dateOfRelease}`;

console.log(albumWinner);
console.warn('Stay tune!');