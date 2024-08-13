document.addEventListener('DOMContentLoaded', () => {
   // Mobile Menu

   function toggleMenu() {
      const burger = document.querySelector('#burger'),
         menu = document.querySelector('#mobile-menu');

      burger.addEventListener('click', () => {
         burger.classList.toggle('active');

         if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('flex', 'animate-fadeIn');
            document.body.style.overflow = 'hidden';
         } else {
            menu.classList.remove('animate-fadeIn');
            menu.classList.add('animate-fadeOut');

            setTimeout(() => {
               menu.classList.add('hidden');
               menu.classList.remove('flex', 'animate-fadeOut');
               document.body.style.overflow = '';
            }, 200);
         }
      });

      window.addEventListener('resize', () => {
         if (window.innerWidth > 767.99) {
            menu.classList.add('hidden');
            menu.classList.remove('flex', 'animate-fadeIn', 'animate-fadeOut');
            document.body.style.overflow = '';
            burger.classList.remove('active');
         }
      });
   }

   toggleMenu();

   // Tabs

   function toggleTabs(trigger, content) {
      const tabsTriggers = document.querySelectorAll(trigger),
         tabsContents = document.querySelectorAll(content);

      // Скрываем весь контент и показываем первый по умолчанию
      tabsContents.forEach((content) => {
         content.classList.add('hidden');
      });
      tabsContents[0].classList.remove('hidden');

      // Обрабатываем клик по табам
      tabsTriggers.forEach((trigger, i) => {
         trigger.addEventListener('click', () => {
            // Удаляем активный класс со всех табов
            tabsTriggers.forEach((trigger) => trigger.classList.remove('active'));

            // Добавляем активный класс к текущему табу
            trigger.classList.add('active');

            // Скрываем весь контент
            tabsContents.forEach((content) => {
               content.classList.add('hidden');
            });

            // Показываем контент, соответствующий активному табу
            tabsContents[i].classList.remove('hidden');
         });
      });
   }

   toggleTabs('.tab-trigger', '.tab-content');
});
