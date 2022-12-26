import throttle from 'lodash.throttle';
// import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

// const onPlay = function ({seconds}) {
//     // data is an object containing properties specific to that event
//     //ключ videoplayer-current-time, JSON формат
// const savedTime = localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// // timeupdate
// // {duration: 61.857, percent: 0.049, seconds: 3.034}

// player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
// //Алексей сказал, что даже если строка, лучше парсить ее.