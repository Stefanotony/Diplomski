const film = {
  film1: {
    naziv: "Interstellar",
    kratak_opis:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque cum, incidunt pariatur repellendus eum velit magnam, maiores eos nam quod quaerat ducimus unde quia aut? Suscipit et aliquid ea ex!",
    dug_opis:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo veniam distinctio voluptas harum, incidunt recusandae porro laboriosam veritatis odit culpa, amet perferendis aut quae. Quia unde excepturi quos non impedit nobis, consectetur at quo ea officiis inventore exercitationem similique aperiam a, error doloremque iure molestiae dolorem cupiditate cum illum dolor commodi. Veniam illum error accusantium veritatis hic, laboriosam ullam. Id minima delectus nulla voluptas harum non possimus quam, iure laudantium? Temporibus amet vel ea voluptates cupiditate a, aliquam eos molestiae?",
    zanr: "Akcija, Avantura, Naučna fantastika",
    trajanje: "3h35m",
    trejler: "https://www.youtube.com/embed/zSWdZVtXT7E",
    rezija: "Cristofer Nolan",
    scenario: "Fran Walsh, Philippa Boyens",
    od_datum: "25.septembra",
    do_datum: "04.oktobra",
    vreme_1: "18:00h",
    vreme_2: "21:00h",
    cena: "350",
    sala: "SALA1",
    ocena: "10",
    imdb: "https://www.imdb.com/title/tt0816692/",
    slika: "images/movie-p1.jpg",
    baner: "images/movie-b2.jpg",
    g_glumac1: "M. Mekonahi",
    g_glumac1_slika: "images/glumac-1.jpg",
    g_glumac2: "Dz. Cestejn",
    g_glumac2_slika: "images/glumac-2.jpg",
    g_glumac3: "M. Kejn",
    g_glumac3_slika: "images/glumac-3.jpg",
  },
};

document.getElementById("u-zanr").innerHTML = film.film1.zanr;
document.getElementById("u-naziv").innerHTML = film.film1.naziv;
document.getElementById("u-ocena").innerHTML = film.film1.ocena;
document.getElementById("u-ocena").innerHTML = film.film1.ocena;
document.getElementById("u-dug_opis").innerHTML = film.film1.kratak_opis;
document.getElementById("u-trejler").src = film.film1.trejler;
