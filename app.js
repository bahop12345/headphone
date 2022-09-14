

/*=========showmenu===========*/
const 	navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close')

	if(navToggle){
		navToggle.addEventListener('click',() =>{
			navMenu.classList.add('show-menu')
		})
	}


	if(navClose){
		navClose.addEventListener('click',() =>{
			navMenu.classList.remove('show-menu')
		})
	}


/*=========removeMenu========*/
const navLink = document.querySelectorAll('.nav_link')

	function linkAction(){
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show-menu')
	}

	navLink.forEach(n => n.addEventListener('click', linkAction))


/*===============Change background header================*/

function scrollHeader(){
	const header = document.getElementById('header')
	if(this.scrollY >= 50) header.classList.add('scroll-header');
	else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*====================show Scroll Up===================*/
function scrollUp(){
    const scrollUp = document.getElementById('srcoll-up');
   
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*===========scroll reveal animation===============*/
// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
// })

// sr.reveal(`.home_header, .section_title`,{delay: 600})
// sr.reveal(`.home_footer`,{delay: 700})
// sr.reveal(`.home_img`,{delay: 700 , origin :'top'})


// sr.reveal(`.sponsor_img , .products_card , .footer_logo ,.footer_content , .footer_copy`,{origin :'top' , interval : 100})
// sr.reveal(`.specs_data , .discount_anmate`,{origin :'left' , interval : 100})
// sr.reveal(`.discount__img ,.specs_img ` , {origin : 'right'})
// sr.reveal(`.case_img`, {origin : 'top'})
// sr.reveal(`.case_data`, {origin : 'top'})

// ScrollReveal().reveal('.specs_img', { origin: 'top' });


$(document).ready(function () {
	$(".sponsor_container").slick({
		// infinite: true,  // chay vo tan
		// slidesToShow: 3,  //so phan tu muon hien
		// slidesToScroll: 1, // so luong dich chuyen
		// arrows: true, // tat mui ten 2 ben
		// autoplay: true, // tu dong chay
		// autoplaySpeed: 1000,
		// dots: true, //dau cham o duoi
		// responsive: [
		// 	{
		// 		breakpoint: 1025,
		// 		settings: {
		// 			slidesToShow: 3,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 		slidesToShow: 1,
		// 		autoplay:false,
		// 		arrows: false,
		// 		infinite: false,
		// 		},
		// 	},
			
		   
		// ]
	});
  }
);