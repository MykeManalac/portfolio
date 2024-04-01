
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=>observer.observe(el));

$('#download-resume').on('click',()=>{
    $('#download-link')[0].click();
});

Array.from($('.accordion-toggle')).forEach((toggle)=>{
    $(toggle).on('click',()=>{
        let s = toggle.parentNode.nextElementSibling;
        s.classList.toggle('accordion-show');
        let c = toggle.children[0].innerText;
        if(c == 'keyboard_double_arrow_down'){
            toggle.children[0].innerText = 'keyboard_double_arrow_up'
        }else{
            toggle.children[0].innerText = 'keyboard_double_arrow_down'
        }
    });
});

$('#btn-proj1').on('click',()=>{
    $('#link-proj1')[0].click();
});

$('#btn-proj2').on('click',()=>{
    $('#link-proj2')[0].click();
});

$('#btn-proj3').on('click',()=>{
    $('#link-proj3')[0].click();
});

// jQuery.fn.center = function () {
//     this.css("position","absolute");
//     this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
//                                                 $(window).scrollTop()) + "px");
//     this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
//                                                 $(window).scrollLeft()) + "px");
//     return this;
// }

Array.from($('.project-desc-image, .init-details-img')).forEach((imgCont)=>{
    let s = imgCont.firstElementChild.src;
    $(imgCont).on('click',()=>{
        $('#selected-image').attr('src','');
        $('#selected-image').attr('src', s);
        // $('#image-modal').center();
        $('#image-modal').css('display','block');
        $('#image-modal').css('opacity','0');
        $('#image-modal').css('scale','0.8');
        setTimeout(()=>{
            $('#image-modal').css('opacity','1');
            $('#image-modal').css('scale','1');
        },200);
    });
});

$('#close-modal-btn').on('click',()=>{
    $('#image-modal').hide();
});




