$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $("#searchTerms").val()
  $.get(` https://api.github.com/search/repositories?q=${searchTerms}`, function(data){
    $('#results').html(displayRepositories(data))
  }).fail(function(error) {
    displayError()
  })
}

function displayRepositories(data) {
  const repos = data.repos
}

function showCommits() {

}


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
