document.addEventListener('DOMContentLoaded', () => {
   function toggleMenu() {
      const burger = document.querySelector('#burger'),
         menu = document.querySelector('#mobile-menu');

      burger.addEventListener('click', () => {
         burger.classList.toggle('active');

         menu.classList.toggle('hidden');
         menu.classList.toggle('flex');

         if (menu.classList.contains('hidden')) {
            document.body.style.overflow = '';
         } else {
            document.body.style.overflow = 'hidden';
         }
      });

      window.addEventListener('resize', () => {
         if (window.innerWidth > 767.99) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');

            document.body.style.overflow = '';

            burger.classList.remove('active');
         }
      });
   }

   toggleMenu();
});
