class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    // Jika kita ingin element ini ketika diterapkan langsung melakukan rendering maka kita dapat memanggil fungsi this.render() di dalam connectedCallback.


    //untuk menampilkan elemen yang dibutuhkan pada melalui properti this.innerHTML. Apa saja yang dibutuhkan? Kita bisa melihatnya pada berkas index.html. => tugas fungsi renmder()
    render() {
        this.innerHTML = `<h2>Club Finder</h2>`;

    }

}

customElements.define("app-bar", AppBar); //untuk mendefinisikan custom element yang kita buat agar dapat digunakan pada DOM.