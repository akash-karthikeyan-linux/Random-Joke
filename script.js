let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function fetchJoke() {
    spinner.classList.remove("d-none");
    fetch("https://apis.ccbp.in/jokes/random")
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            spinner.classList.add("d-none");
            jokeText.textContent = data.value;
        });
}

jokeBtn.addEventListener("click", fetchJoke);