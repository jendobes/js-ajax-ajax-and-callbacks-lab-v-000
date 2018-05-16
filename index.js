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
  const repos = data.items
  const repoList = "<ul>" + repos.map(r => {`
    <li>
    <h2><a href="${r.html_url}">${r.name}</a></h2>
    <p>Description: ${r.description}</p>
    <p>Created by: ${r.owner.login}</p>
    <a href="#" onclick="showCommits(this)" data-repository="${r.name}" data-owner="${r.owner.login}">Show Commits</a>
    <p><img src="${r.owner.avatar_url}" height="45" width="45"></p>
    </li>
  `}).join('') + "</ul>"
  return repoList
}

function showCommits(el) {
  const owner = el.dataset.owner
}


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
