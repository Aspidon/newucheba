`use strict`

window.addEventListener('DOMContentLoaded', () => {

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    console.log(tabsContent[0]);

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

    // Таймер

    const deadLine = '2020-08-27';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Data.parse(new Date()),
            days = Math.floor(t / (1000*60*60*24)),
            hours = Math.floor((t / (1000*60*60)) % 24),
            minuts = Math.floor((t / (1000*60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);
    }

});