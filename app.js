const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector('#movie-box');



const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    showMovies(data.results)
}

const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach(element => {
        const box = document.createElement("div");
        box.classList.add("card");
        box.style.width = "18rem";
        box.innerHTML = `

        <img src="${IMGPATH + element.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.original_title}</h5>
            <h3>${element.vote_average}</h3>
            <p class="card-text">${element.overview}</p>
        </div>
        `;
        
        movieBox.appendChild(box)
    });
}


getMovies(APIURL);

document.querySelector('#search').addEventListener('keyup', function (event) {
    if (event.target.value != "") {
        getMovies(SEARCHAPI + event.target.value)
    } else {
        getMovies(APIURL)
    }
})