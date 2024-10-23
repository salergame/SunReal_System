document.addEventListener("DOMContentLoaded", function () {
    // Статические данные этажей и комнат
    const roomSelection = document.querySelector('.room-grid');
    const floors = [
        { number: 1, rooms: [{ number: 101 }, { number: 102 }, { number: 103 }] },
        { number: 2, rooms: [{ number: 201 }, { number: 202 }, { number: 203 }, { number: 204 }, { number: 205 }, { number: 206 }] },
        { number: 3, rooms: [{ number: 301 }, { number: 302 }] }
    ];

    let selectedRoom = ''; // Переменная для хранения выбранного номера комнаты

    // Функция для загрузки этажей в выпадающий список
    function loadFloors() {
        const floorSelect = document.getElementById('floorSelect');
        floorSelect.innerHTML = ''; // Очистить предыдущие опции

        // Добавляем опции для каждого этажа
        floors.forEach(floor => {
            const option = document.createElement('option');
            option.value = floor.number;
            option.textContent = `Этаж ${floor.number}`;
            floorSelect.appendChild(option);
        });
    }

    // Функция для отображения доступных комнат по выбранному этажу
    function loadRoomsByFloor(floor) {
        const selectedFloor = floors.find(f => f.number == floor); // Найти этаж по номеру
        const rooms = selectedFloor ? selectedFloor.rooms : [];

        roomSelection.innerHTML = ''; // Очистить предыдущие номера комнат

        if (rooms.length === 0) {
            const message = document.createElement('div');
            message.textContent = 'Нет доступных комнат';
            roomSelection.appendChild(message);
            return;
        }

        // Отображаем каждую комнату в виде элемента
        rooms.forEach(room => {
            const roomDiv = document.createElement('div');
            roomDiv.className = 'room';
            roomDiv.textContent = `Комната ${room.number}`;
            roomDiv.dataset.roomNumber = room.number; // Хранение номера комнаты в data-атрибуте

            roomDiv.addEventListener('click', () => {
                selectRoom(room.number, roomDiv);
            });

            roomSelection.appendChild(roomDiv); // Добавляем комнату в контейнер
        });
    }

    // Функция для выбора комнаты
    function selectRoom(roomNumber, roomDiv) {
        selectedRoom = roomNumber; // Устанавливаем выбранную комнату
        document.querySelectorAll('.room').forEach(r => r.classList.remove('selected')); // Убираем выделение с других комнат
        roomDiv.classList.add('selected'); // Добавляем выделение к выбранной комнате
        document.getElementById('selectedRoom').value = selectedRoom; // Устанавливаем номер комнаты в скрытое поле формы
    }

    // Обработчик события для изменения выбора этажа
    document.getElementById('floorSelect').addEventListener('change', function () {
        const selectedFloor = this.value;
        loadRoomsByFloor(selectedFloor); // Загрузка комнат для выбранного этажа
    });

    loadFloors(); // Инициализируем загрузку этажей при загрузке страницы

    // Добавляем анимации появления при прокрутке
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const bottomElement = document.querySelector('.bottom-element'); 

    function checkVisibility() {
        const scrollY = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Проверяем, достигли ли конца страницы для отображения элемента
        if (scrollY >= documentHeight) {
            bottomElement.classList.add('visible');
        } else {
            bottomElement.classList.remove('visible');
        }

        // Проверяем видимость элементов с анимацией
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // Плавное изменение цвета ссылок меню при наведении
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'color 0.5s ease';
            link.style.color = '#007BFF';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#333';
        });
    });
});
