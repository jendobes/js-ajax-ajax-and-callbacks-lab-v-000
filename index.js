$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = $("#searchTerms").val()
  $.get(` https://api.github.com/search/repositories?q=${searchTerms}`, function(data){
    displayRepositories(data.repos)
  }).fail(function(error) {
    displayError()
  })
}

function displayRepositories() {

}

function showCommits() {

}
