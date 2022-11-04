
window.addEventListener("scroll", ()=>{
    var to_top=document.querySelector("#top1");
    var apply_now=document.querySelector("#applynow");
    
    if(pageYOffset>500){
        to_top.classList.add("topadd");
    }
    else {
        to_top.classList.remove("topadd");
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
    // for the apply form
    var apply_fo=document.querySelector('.afap3');
    var apply_form=document.querySelector('.applyform');
    var apply_body=document.querySelector('.body');
    var apply_form2=document.querySelector('.applyform2');
    var apply_formclose=document.querySelector('.applyformclose');

    // for the apply form ends
    
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
    else if(event.target==apply_fo){
        apply_form.style.display="block"; //for apply form
    } 
    else if(event.target==apply_formclose){
        apply_form.style.display="none"; //for apply form
    } 
    else if(event.target==it_courses1con){
        it_courses.style.display="none"; //for itcourse
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
    else if(event.target==apply_form2){
        apply_form.style.display="none"; //for apply form
    }
    else if(event.target!=call_icon){
        call_icon.style.display="none"; //for call
    }
   
    else if(event.target==call_but){
        call_icon.style.display="none"; //for call
    }
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