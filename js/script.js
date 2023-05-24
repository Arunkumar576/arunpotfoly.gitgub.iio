/**
 * @Author: Your name
 * @Date:   2023-05-14 13:26:54
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-05-23 15:07:08
 */


          



//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


menuIcon.onclick = () => {
 menuIcon.classList.toggle('bx-x');
 navbar.classList.toggle('active');



 }

 
//scroll sections

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scrol
            sec.classList.add('show-animation');
            
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animation')
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)
    
    // remove.toggle icon and navbar when click navbar links(scrol)


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animationn footer on scrol
    let footer =document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);
   
}


// var btn=document.getElementById('btn');
// btn.addEventListener('click',function(e){
//     e.preventDefault()
//     console.log('hi')
//     var name=document.getElementById('name').value;
//     var email=document.getElementById('email').value;
//     var sub=document.getElementById('sub').value;
//     var mgs=document.getElementById('mgs').value;
//     var body='name:' +name+ '<br/>email:'+email+'<br\>subject:'+sub+'<br\>message'+mgs;
    
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "arunkumarkpm69@gmail.com",
//         Password : "Arunpyk7@",
//         To : 'them@website.com',
//         From : email,
//         Subject : sub,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// })