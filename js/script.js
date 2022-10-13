const timer = document.getElementById('timer');
const text = document.getElementById('text');
const start = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let timerId;
const array = [ 
        'Пусть все твои мечты непременно сбудутся, всё, что загадано, обязательно исполнится! Улыбок, счастья, радости и веселья',
        'В самый счастливый день — самые чудесные пожелания: счастья, нежности, исполненных желаний и всегда замечательного настроения',
        'Пусть каждый день начинается с улыбки и заканчивается сладким сном, рядом будет дорогой и любящий человек, который разделит настоящее и будущее',
        'Пусть начинания будут быстрыми и блестящими, пусть все сбывается по взмаху волшебной палочки! Успехов, процветания, мира и добра тебе',
        'Просто будь счастлив!'
];

start.addEventListener('click', showTimer)

function showTimer() {
        stopBtn.classList.add('active');
        start.classList.remove('active');
        timerId = setInterval(() => timer.innerText = Math.floor(Math.random() * 10 + 1), 100);
}

stopBtn.addEventListener('click', showText);

function showText() {
        clearInterval(timerId);
        stopBtn.classList.remove('active');
        text.innerText = array[Math.floor(Math.random() * array.length)];
        text.style.backgroundColor = 'aquamarine';
}