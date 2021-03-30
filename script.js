//het blok (ul) selecteren waar de filmposters in geplaatst gaan worden
const filteredMovies = document.getElementById('results');

//functie maken om filmposters toe te voegen
addMovies = function(array) {
    //alle films in de array langs gaan
    for (i=0; i < array.length; i++) {
        //nieuwe li, a en img maken
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const newImg = document.createElement('img');
        //href meegeven aan de a en laten openen in nieuw scherm
        newA.href=("https://www.imdb.com/title/" + array[i].imdbID);
        newA.target="_blank";
        //src meegeven aan de img
        newImg.src=array[i].Poster;
        //plaats de img in de a
        newA.appendChild(newImg);
        //plaats de a in de li
        newLi.appendChild(newA);
        //plaats de li in de ul
        filteredMovies.appendChild(newLi);
    };
};

//bij het openen van de pagina start je met het toevoegen van alle films 
addMovies(movies);

//de filters voor de andere arrays
const dieHardMovies = movies.filter(i => i.Title.includes('Die Hard'));
const harryPotterMovies = movies.filter(i => i.Title.includes('Harry Potter'));
const muppetMovies = movies.filter(i => i.Title.includes('Muppet'));
const stephenKingMovies = movies.filter(i => i.Title.includes('Stephen King'));
const newestMovies = movies.filter(i => parseInt(i.Year) > 2010);

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

//zet de gekozen gefilterde array op de pagina
const runSwitch = (expr) => {
    switch (expr) {
        //maak eerst de huidige lijst op de pagina leeg, dan de nieuwe toevoegen
        case 'newest':
            removeMovies();
            addMovies(newestMovies);
            break;
        case 'die-hard':
            removeMovies();        
            addMovies(dieHardMovies);
            break;
        case 'harry-potter':
            removeMovies();        
            addMovies(harryPotterMovies);
            break;
        case 'muppets':
            removeMovies();        
            addMovies(muppetMovies);
            break;
        case 'stephen-king':
            removeMovies();        
            addMovies(stephenKingMovies);
            break;
        default:        
            addMovies(movies);
    };
};

//zorg dat aanvinken van de radiobuttons iets gaat doen
const radioButtons = document.querySelectorAll('input[type=radio][name="what-movie"]');
radioButtons.forEach(i => i.addEventListener('change', () => {
    //check welke radiobutton aangevinkt is
    console.log(i.value);
    const expr = i.value;
    //bepaal welke array moet worden gebruikt
    runSwitch(expr);
}));


