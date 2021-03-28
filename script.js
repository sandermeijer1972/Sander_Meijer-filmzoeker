//het blok (ul) selecteren waar de filmposters in geplaatst gaan worden
const filteredMovies = document.getElementById('results');

//alle films in de array langs gaan
for (i=0; i < movies.length; i++) {
    //nieuwe li, a en img maken
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    const newImg = document.createElement('img');
    //href meegeven aan de a en laten openen in nieuw scherm
    newA.href=("https://www.imdb.com/title/" + movies[i].imdbID);
    newA.target="_blank";
    //src meegeven aan de img
    newImg.src=movies[i].Poster;
    //plaats de img in de a
    newA.appendChild(newImg);
    //plaats de a in de li
    newLi.appendChild(newA);
    //plaats de li in de ul
    filteredMovies.appendChild(newLi);
};


//voordat je een bepaalde lijst gaat krijgen, verwijder je alle films
removeMovies = function() {
    //het aantal films in je ul
    const numberOfMovies = filteredMovies.getElementsByTagName("li").length;
    for (i = 0; i < numberOfMovies; i++) {
        //eerste film in de lijst
        const firstMovie = filteredMovies.getElementsByTagName("li")[0];        
        filteredMovies.removeChild(firstMovie);
    };
};



