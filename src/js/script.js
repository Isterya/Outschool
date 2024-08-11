document.addEventListener('DOMContentLoaded', () => {
   function toggleMenu() {
      const burger = document.querySelector('#burger'),
         menu = document.querySelector('#mobile-menu'),
         body = document.querySelector('body');

      burger.addEventListener('click', () => {
         burger.classList.toggle('active');

         menu.classList.toggle('hidden');
         menu.classList.toggle('flex');

         document.body.style.overflow = 'hidden';
      });

      window.addEventListener('resize', () => {
         if (window.innerWidth > 767.99) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');

            burger.classList.remove('active');
         }
      });
   }

   toggleMenu();
});
