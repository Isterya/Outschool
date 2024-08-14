document.addEventListener('DOMContentLoaded', () => {
   // Mobile Menu

   function toggleMenu() {
      const burger = document.querySelector('#burger'),
         menu = document.querySelector('#mobile-menu'),
         menuLinks = menu.querySelectorAll('a');

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

         menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
               menu.classList.remove('animate-fadeIn');
               menu.classList.add('animate-fadeOut');

               setTimeout(() => {
                  menu.classList.add('hidden');
                  menu.classList.remove('flex', 'animate-fadeOut');
                  document.body.style.overflow = '';
               }, 200);
            });
         });
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
      const tabsContainer = document.querySelector(trigger).parentElement,
         tabsTriggers = document.querySelectorAll(trigger),
         tabsContents = document.querySelectorAll(content);

      tabsContents.forEach((content) => content.classList.add('hidden'));
      tabsContents[0].classList.remove('hidden');
      tabsTriggers[0].classList.add('active');

      tabsContainer.addEventListener('click', (event) => {
         const clickedTab = event.target.closest(trigger);

         if (!clickedTab) return;

         const currentActiveTab = tabsContainer.querySelector('.active');

         if (clickedTab === currentActiveTab) return;

         currentActiveTab.classList.remove('active');
         const currentIndex = Array.from(tabsTriggers).indexOf(currentActiveTab);
         tabsContents[currentIndex].classList.add('hidden');

         clickedTab.classList.add('active');

         const newIndex = Array.from(tabsTriggers).indexOf(clickedTab);
         tabsContents[newIndex].classList.remove('hidden');
      });
   }

   toggleTabs('.tab-trigger', '.tab-content');

   // Accordion

   function accordion() {
      const items = document.querySelectorAll('.accordion-trigger');

      items.forEach((item) => {
         item.addEventListener('click', () => {
            const parent = item.parentNode;

            if (parent.classList.contains('active')) {
               parent.classList.remove('active');
            } else {
               document.querySelectorAll('.accordion-item').forEach((item) => item.classList.remove('active'));

               parent.classList.add('active');
            }
         });
      });
   }

   accordion();
});
