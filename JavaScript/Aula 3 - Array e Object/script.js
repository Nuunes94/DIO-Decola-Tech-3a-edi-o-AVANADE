// o que são vetores ou arrays

// como declarar um array

let array = ['string', 1, true];
console.log(array);

// pode guardar varios tipos de dados 

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);

// for each
array.forEach(function(item, index){console.log(item, index)});

// push
array.push('novo item');
console.log(array);

//pop
array.pop()
console.log(array);

// shift
array.shift();
console.log(array);

//unshift
array.unshift('novo item no inicio')
console.log(array);

// indexOf
console.log(array.indexOf('string'));

// splice
array.splice(0 , 3);
console.log(array);

// slice
let novoArray = array.slice(0 , 3);
console.log(novoArray);

// object

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'Objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInt = object.array;
console.log(arrayInt);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);


