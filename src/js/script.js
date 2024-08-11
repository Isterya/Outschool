document.addEventListener('DOMContentLoaded', () => {
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
});
