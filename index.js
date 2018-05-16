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
  const repoList = "<ul>" + repos.map(r => {
    <li>
    "This is so fun"
    </li>
  }).join('') + "</ul>"
  return repoList
}

function showCommits() {

}


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
