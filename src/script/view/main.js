/*const main = function () {

    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    const renderResult = function (results) {
        clubListElement.innerHTML = "";
        results.forEach(function (club) {
            // const name = club.name;
            // const fanArt = club.fanArt;
            // const description = club.description;
            const {
                name,
                fanArt,
                description
            } = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
            //     '<div class="club-info">\n' +
            //     '<h2>' + name + '</h2>\n' +
            //     '<p>' + description + '</p>' +
            //     '</div>';
            // template literals dibwah ini
            clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="club-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<p>' + description + '</p>' +
                '</div>';

            clubListElement.appendChild(clubElement);
        })
    };

    const fallbackResult = function (message) {
        clubListElement.innerHTML = "";
        // clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'

        //template literals
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;

    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
*/
//implementasi arrow
import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/club-list.js';
// import '../component/club-item.js';



const main = () => {
    //const searchElement = document.querySelector("#searchElement");
    const searchElement = document.querySelector("search-bar"); //binding dari index html

    const clubListElement = document.querySelector("club-List");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);

    };



    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;