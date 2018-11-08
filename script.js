function getAll(){
  fetch('http://api.techlaunch.io:88/all')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}

function getRandom(){
  fetch('http://api.techlaunch.io:88/random')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}

function singleQuote(num){
  fetch(`http://api.techlaunch.io:88/${num}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}

// getAll();
// getRandom();
singleQuote(13);