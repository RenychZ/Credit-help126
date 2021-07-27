// Modal
const consultation = document.querySelectorAll('.btn'),
    cons = document.querySelectorAll('.cons'),
    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    closer = document.querySelectorAll('.modal__close'),
    submit = document.getElementById('submit');



    consultation.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    closer.forEach(e => {
        e.addEventListener('click', closeModal);
    });
    cons.forEach(i => {
        i.addEventListener('click', openModal);
    });
    
    function openModal() {
        overlay.classList.add('active');
        modal.classList.add('active');
        submit.addEventListener('click', thanksModal);
    }

    function closeModal() {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        closer.removeEventListener('click', closeModal);
    }

    
    
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = document.querySelector('.header').offsetHeight;
            // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    
        
    



    

    
