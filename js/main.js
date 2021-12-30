function maskNumber(){
    document.getElementById('telefone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

maskNumber();

let nav = document.querySelector('nav');
let links = document.querySelectorAll('.link');
let titleObserver = document.getElementById('observer')
let logo = document.getElementById('logo')
let logo2 = document.getElementById('logo2')
let burgerInner = document.querySelector('.hamburger-inner');
let attr = document.querySelector('data')

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            links.forEach(link => link.classList.add('links-white'))
            nav.classList.add('nav-white')
            logo.style.display = 'block';
            logo2.style.display = 'none';
            burgerInner.classList.add('hamburger-black')
            
        }else{
            nav.classList.remove('nav-white')
            links.forEach(link => link.classList.remove('links-white'))
            logo.style.display = 'none';
            logo2.style.display = 'block';
            burgerInner.classList.remove('hamburger-black')
        }
       
    })

});

observer.observe(titleObserver)

//observer na home
let home = document.querySelector('#home');
let observeHome = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       if(entry.isIntersecting){
           links[0].classList.add('link-active');
       }else{
        links[0].classList.remove('link-active');
       }
    })
},{
    threshold:0.3,
})

observeHome.observe(home)

//observar sobre
let sobre = document.querySelector('#sobre');
let observeSobre = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       if(entry.isIntersecting){
           links[1].classList.add('link-active');
       }else{
        links[1].classList.remove('link-active');
       }
    })
},{
    threshold:0.4,
})
observeSobre.observe(sobre)

//observar diferenciais
let diferenciais = document.querySelector('#diferenciais');
let observeDiferenciais = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       if(entry.isIntersecting){
           links[2].classList.add('link-active');
       }else{
        links[2].classList.remove('link-active');
       }
    })
},{
    threshold:0.9,
})
observeDiferenciais.observe(diferenciais)

//observar curso
let curso = document.querySelector('.newsletter');
let observeCurso = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       if(entry.isIntersecting){
           links[3].classList.add('link-active');
       }else{
        links[3].classList.remove('link-active');
       }
    })
},{
    threshold:1,
})
observeCurso.observe(curso)

let contato = document.querySelector('footer');
let observeContato = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       if(entry.isIntersecting){
           links[4].classList.add('link-active');
       }else{
        links[4].classList.remove('link-active');
       }
    })
},{
    threshold:0.8,
})
observeContato.observe(contato)



//script para acionar o menu mobile
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu-mobile');
let bg = document.querySelector('.bg');
let linksMobile = document.querySelectorAll('.link-mobile')

burger.addEventListener('click', ()=>{
  burger.classList.toggle('is-active');
   menu.classList.toggle('menu-active');
  
   if(burger.classList.contains('is-active')){
     document.body.style.overflow = 'hidden';
     bg.style.display = 'block';
   }else{
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
   }
});


//fechar ao clicar no bg

   bg.addEventListener('click', ()=>{
     menu.classList.remove('menu-active');
     burger.classList.remove('is-active');
     document.body.style.overflow = 'auto';
     bg.style.display = 'none';
     burger.style.display = 'block';
   });


   linksMobile.forEach(link => {
    link.addEventListener('click',()=>{
        menu.classList.remove('menu-active');
        burger.classList.remove('is-active');
        document.body.style.overflow = 'auto';
        bg.style.display = 'none';
        burger.style.display = 'block';
    })
   })

 
