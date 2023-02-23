const darkModeBtn = document.querySelector('.dark-mode-btn');

//1. проверка ночного режима на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

//2. проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    darkModeBtn.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

//3. если меняются системные настройки меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) =>{
    const newColorScheme = event.matches ? 'dark' : 'light' ;

    if (newColorScheme === 'dark') {
        darkModeBtn.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        // чтобы сохранились в хранилище обновление компьютерной системы
        localStorage.setItem('darkMode' , 'dark');
    } else {
        darkModeBtn.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        // чтобы сохранились в хранилище обновление компьютерной системы
        localStorage.setItem('darkMode' , 'light');
    }
});

// включение темного режима по кнопке
darkModeBtn.addEventListener('click', function(){
    darkModeBtn.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');
    // добавляем значение в localStorage в зависимости от условия
    if (isDark) {
        localStorage.setItem('darkMode' , 'dark');
    } else {
        localStorage.setItem('darkMode' , 'light');
    }
});

