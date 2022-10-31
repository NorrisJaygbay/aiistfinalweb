
// window.onload=function(){
//     const ollist=document.querySelector(".itcourses1");
//     const it_courses=document.querySelector(".itcourses");

//     document.onclick=function(div){
//         if(div.target.id !== 'itcourses1'){
//             it_courses.style.display="none";
// const it_courses=document.querySelector(".itcourses");
// const ollist=document.querySelector(".itcourses1");
// it_courses.addEventListener('click', ()=>{
//     it_courses.style.display="none";
// })
// ollist.addEventListener('click', ()=>{
//     it_courses.style.display="block";

// });      }
//         // else{
//         //     it_courses.style.display="block";
//         // }
//     }
// }
// 
// moon
// const moon_change=document.querySelector(".fa-moon");
// const moon_change1=document.getElementById("famoon");
// const body_change=document.querySelector(".body");
// const moon_main=document.querySelector(".moon");
// const header_copy=document.querySelector(".header");
// const it_courses=document.querySelector(".itcourses");
// moon_change.addEventListener("click",()=>{
//     body_change.style.background="black";
//     moon_change.style.display="none";
//     moon_change1.style.display="block";
// })
// moon_change1.addEventListener("click",()=>{
//     body_change.style.background="#ffffff";
//     moon_change.style.display="block";
//     moon_change1.style.display="none";
// })
// moon ends
// for up button and moon
// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset > 10){
//         moon_main.style.opacity="0";
//         moon_main.style.top="-10px";
//         moon_main.classList.add("pointer1");
//         // it_courses.style.display="none";
//         // it_courses.style.opacity="0";

//     }else{
//         moon_main.style.opacity="1";
//         moon_main.style.top="9px";
//         moon_main.classList.remove("pointer1");
//     }
// })

//  const ollist=document.querySelector(".itcourses1");

//         window.onclick = function(event){
//             if(event.target == ollist){
//                 it_courses.style.display="none";
//             }
//         }
// window.addEventListener('scroll',()=>{
    // if(window.pageYOffset > 300){
    //     header_copy.style.position="fixed";
    //     header_copy.style.top="0";
    //     header_copy.style.width="100%";


        // header_copy.classList.add("pointer2");
    // }else{
    //     header_copy.style.position="inherit";
        // header_copy.style.top="-20px";

        // header_copy.classList.remove("pointer2");
    // }
// })
// for up button and moon ends



// document.querySelector(".fa-phone").addEventListener("click",function(){
//     document.getElementById('firstheadercallicon1').style.display="block";
// }) 
window.addEventListener("scroll", ()=>{
    var to_top=document.querySelector("#top1");
    var apply_now=document.querySelector("#applynow");
    
    if(pageYOffset>300){
        to_top.classList.add("topadd");
        // apply_now.classList.add("applyall");

    }
    else if(pageYOffset>400){
        apply_now.classList.add("applyall");
    }
    else if(pageYOffset<300){
        to_top.classList.remove("topadd");
    }
    else{
        apply_now.classList.remove("applyall");
    }
});
window.onclick=function(event){
    // for call 
    var call_but=document.querySelector('#firstheadercallico');
    var call_icon=document.querySelector('#firstheadercallicon1');
    var fa_phone=document.querySelector('.fa-phone');
    var call_butin=document.querySelector('#firstheadercallicon2');
    // for call ends
    // for itcoueses
    var it_courses=document.querySelector('.itcourses');
    var it_cour=document.querySelector('#itcour');
    var it_courses3=document.querySelector('.itcourses3');
    var it_courses1con=document.querySelector('.itcourses1con');
    // for itcourses ends
    // for business
    var business_courses=document.querySelector('.business');
    var busi_cou=document.querySelector('#busi');
    var business_close=document.querySelector('.business3');
    var busi_cont=document.querySelector('.businesscourses');
    //for business ends
    // for nav
    var nav_manucon=document.querySelector('.nav-menucontrol');
    var nav_manucon1=document.querySelector('.nav-menucontrol1');
    var nav_manu=document.querySelector('.nav-menu');
    var ham_burger=document.querySelector('.hamburger');
    // for nav ends
    
    if(event.target==fa_phone){
        call_icon.style.display="block"; //for call
    }
    else if(event.target==call_butin){
        call_icon.style.display="block"; //for call
    }
    else if(event.target==busi_cou){
        business_courses.style.display="block"; //for business
    }
    else if(event.target==it_cour){
        it_courses.style.display="block"; //for itcourse
    } 
    else if(event.target==it_courses1con){
        it_courses.style.display="none"; //for itcourse
        // business_courses.style.display="none"; //for business
    }
    else if(event.target==business_close){
        business_courses.style.display="none"; //for business
    }
    else if(event.target==busi_cont){
        business_courses.style.display="none"; //for business
    }
    else if(event.target==it_courses3){
        it_courses.style.display="none"; //for itcourse
    }
    else if(event.target!=call_icon){
        call_icon.style.display="none"; //for call
    }
    else if(event.target==call_but){
        call_icon.style.display="none"; //for call
    }
    // else if(event.target==ham_burger){
    //     nav_manucon1.style.right="0%"; //for nav
    //     nav_manucon.style.left="30%"; //for nav
    //     nav_manu.style.left="30%"; //for nav
    // }
    // if(event.target==nav_manucon){
    //     nav_manucon.style.left="100%"; //for nav
    //     nav_manu.style.left="100%"; //for nav
    //     nav_manucon1.style.left="100%"; //for nav
    // }
    // else if(event.target==ham_burger){
    //     nav_manucon.style.right="0%"; //for nav

    // }
   
}
 // 1111111
 $(document).ready(function(){
 $("#h1").click(function(){
    $("#p1").show(1000);
    $("#p2").hide(1000);
    $("#p3").hide(1000);
    $(".h2").animate({fontSize:"2rem"},500);
    $(".h2").animate({fontSize:"1rem"},500);
    $(".h2").animate({fontSize:"1.8rem"},500);
});
$("#h2").click(function(){
    $("#p2").show(1000);
    $("#p1").hide(1000);
    $("#p3").hide(1000);
    $(".h2").animate({fontSize:"2rem"},500);
    $(".h2").animate({fontSize:"1rem"},500);
    $(".h2").animate({fontSize:"1.8rem"},500);
});
$("#h3").click(function(){
    $("#p3").show(1000);
    $("#p1").hide(1000);
    $("#p2").hide(1000);
    $(".h2").animate({fontSize:"2rem"},500);
    $(".h2").animate({fontSize:"1rem"},500);
    $(".h2").animate({fontSize:"1.8rem"},500);  
})
});
// 111111 end
// document.querySelector(".nav-menu").style.left="100%";
// document.querySelector(".nav-menucontrol1").style.left="100%";
// document.querySelector(".nav-menucontrol").style.right="100%";