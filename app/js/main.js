// Modal
const consultation = document.querySelectorAll('.btn'),
    cons = document.querySelectorAll('.cons'),
    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    closer = document.querySelectorAll('.modal__close'),
    confid = document.querySelector('.confid'),
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
    confid.addEventListener('click', confidModal);
    
    function openModal() {
        overlay.classList.add('active');
        modal.classList.add('active');
        submit.addEventListener('click', thanksModal);
    }

    function closeModal() {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.getElementById('modal-confid').classList.remove('active');
        closer.removeEventListener('click', closeModal);
        confid.removeEventListener('click', confidModal);

    }

    function confidModal() {
        overlay.classList.add('active');
        document.getElementById('modal-confid').classList.add('active');
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

    
        
    



    

    
