`use strict`

window.addEventListener('DOMContentLoaded', () => {

    // Tabs ====================================================================

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer =================================================================================

    const deadLine = '2020-08-27';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    // Modal-window ===================================================================

    let modalBtn = document.querySelectorAll("button[data-modal]"),
        modalBlock = document.querySelector(".modal"),
        closeBtn = modalBlock.querySelector("div[data-close]");

    function openModal() {
        modalBlock.classList.add("show", "fade");
        modalBlock.classList.remove("hide");
        clearInterval(openModalTimer);
    }

    function closeModal() {
        modalBlock.classList.add("hide");
        modalBlock.classList.remove("show", "fade");
    }

    modalBtn.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault;
            openModal();
        });

        modalBlock.addEventListener('click', (event) => {
            event.preventDefault;

            let target = event.target;

            if (target && target.classList.contains('modal__close')) {
                closeModal();
            }

            if (target === modalBlock) {
                closeModal();
            }
        });
    });

    //let openModalTimer = setTimeout(openModal, 6000);

    function scrollShowModal() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', scrollShowModal);
            clearInterval(openModalTimer);
        }
    }
    window.addEventListener('scroll', scrollShowModal);

    // Создание карточек при помощи классов

    class MenuCard {
        constructor (src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH;
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        render() {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="menu__item">
                <img src="img/tabs/vegy.jpg" alt="vegy">
                <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
                <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>229</span> грн/день</div>
                </div>
                </div>
            `;
        }
    }




});