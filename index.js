$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $("#searchTerms").val()
  $.get(` https://api.github.com/search/repositories?q=${searchTerms}`, function(data){
    displayRepositories("I am a string")
  }).fail(function(error) {
    displayError()
  })
}

function displayRepositories(string) {
  console.log(string)
}

function showCommits() {

}


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
