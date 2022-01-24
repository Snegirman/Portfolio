document.addEventListener('DOMContentLoaded', () => {
  
  // Tabs

const tabs = document.querySelectorAll('.tabheader__item'),
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

      tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach ((item, index) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
      });
// Modal 

const modal = document.querySelector('.modal'),
      openModalBtn = document.querySelector('[data-modal]'),
      closeModalBtn = document.querySelector('.modal__close');

      function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }

      openModalBtn.addEventListener('click', openModal);
      closeModalBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
          closeModal();
        }
      });
      function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
          openModal();
          window.removeEventListener('scroll', showModalByScroll);
        }
      }
      window.addEventListener('scroll', showModalByScroll);
});