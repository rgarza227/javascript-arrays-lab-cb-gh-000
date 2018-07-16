// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
kittens.shift()
}

function appendKitten(name) {
  var kittens2 = kittens
  return kittens2.concat(name)
}

function prependKitten(name){
  var kittens3 = kittens
  return kittens3.unshift(name)
}

function removeLastKitten(){

}

function removeFirstKitten(){

}
