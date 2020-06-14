import './club-item.js';
class ClubList extends HTMLElement {
    // buat 2 (dua) fungsi di dalamnya yaitu setter clubs, dan render.
    set clubs(clubs) {
        //set clubs untuk menetapkan properti this._clubs pada class ini. Nantinya properti tersebut akan digunakan pada fungsi render dalam membuat custom element <club-item>.
        this._clubs = clubs;
        this.render();

    }

    render() {
        this.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club
            this.appendChild(clubItemElement);
        })

    }
    renderError(message) {
        //Perlu satu fungsi lagi pada custom element untuk menangani ketika hasil pencarian mengalami kegagalan atau tidak ditemukkan. Maka dari itu mari kita buat fungsi dengan nama renderError() dengan satu buah parameter yang merupakan pesan eror/alasan yang perlu ditampilkan.
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;

    }

}
customElements.define("club-list", ClubList);