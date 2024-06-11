function initializeSlick() {
    $(".listmovie-slide").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
    });
}
//List danh sach movie theo tung API Link
async function startHome() {
    //NowPlayingMovie
    const apiLinkPlayingMovie = `${API_LINK}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    let listNowPlayingMovie = document.querySelector("#nowplay");
    let dataPlayingMovie = await getData(apiLinkPlayingMovie);
    renderListmovie(dataPlayingMovie, listNowPlayingMovie);

    //UpcomingMovie
    const apilinkUpcoming = `${API_LINK}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1 `;
    let listUpComingMovie = document.querySelector("#upcoming");
    let dataUpcomingMovie = await getData(apilinkUpcoming);
    renderListmovie(dataUpcomingMovie, listUpComingMovie);
    //TopRatedMovie
    const apiTopRated = ` ${API_LINK}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    let listTopRate = document.querySelector("#toprated");
    let dataTopRated = await getData(apiTopRated);
    renderListmovie(dataTopRated, listTopRate);

    //tv series
    const apiTvSeri = ` ${API_LINK}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    let tvSeries = document.querySelector("#tvseries");
    let dataTvSeri = await getData(apiTvSeri);

    renderListmovie(dataTvSeri, tvSeries);

    initializeSlick();
}
startHome();
