$(document).ready(function (){
});

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  const url = "https://api.github.com/repos/" + owner + "/" + repo + "/commits";

  $.get(url, function(data) {
    console.log(data);

    const commits = data;
    const commitList = "<ul>" + commits.map(c => {
      return (`
        <li>
        <p>SHA: ${c.sha}</p>
        <p>Author: ${c.commit.author.name}</p>
        <p>Author login: ${c.author.login}</p>
        <p><img src="${c.author.avatar_url}" height="45" width="45"></p>
        </li>
        `)
    }).join('') + "</ul>"
    document.getElementById("details").innerHTML = commitList
  }).fail(function() {
    displayError();
  });
}

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}
