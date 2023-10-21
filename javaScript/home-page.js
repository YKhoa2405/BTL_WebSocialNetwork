/*an hien noi dung jquery*/
$(document).ready(function()
{
    $("#show").click(function(){
        $(this).parent().parent().parent().next().show();
    });
    $("#hide").click(function(){
        $(this).parent().parent().parent().next().hide();
    });
});

//them anh
function chooseFile(fileInput) {
    if(fileInput.files && fileInput.files[0]){
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#display-image').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

//modal 
$(document).ready(function() {
    var modal =$('.js-modal');
    var btn = $('.js-btn');
    var span = $('.js-close');

    btn.click(function () {
        modal.show();
    })

    span.click(function () {
        modal.hide();
    })

    &(window).onabort('click', function(e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
});
//modal list
$(document).ready(function() {
    var modal =$('.js-modal-like');
    var btn = $('.js-list');
    var span = $('.js-close-like');

    btn.click(function () {
        modal.show();
    })

    span.click(function () {
        modal.hide();
    })

    &(window).onabort('click', function(e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
});

//goto top  
$(document).ready(function() {
    $(window).scroll(function(event) {
       var gotoTop = $('html,body').scrollTop();
    });
    $('.logo').click(function(event) {
       $('html,body').animate({scrollTop: 0},1000); //thoi gian truot len dau trang 1200ml
    });
 });

 //read more
function hideText()
{
    var dots=document.getElementById("dots");
    var moretext =document.getElementById("more");
    var read=document.getElementById("readM");
    if(dots.style.display==="none")
    {
        dots.style.display= "inline";
        read.innerHTML=" Đọc thêm";
        more.style.display="none";
    }
    else{
        dots.style.display="none";
        read.innerHTML="Ẩn";
        more.style.display="inline";

    }
}
//an hien thong bao
function hideUntifi(){
    var hideu=document.getElementById("hideU");
    var readu=document.getElementById("readU");
    if(hideu.style.display==="none"){
        hideu.style.display="inline";   
        readu.innerHTML='<i class="fa-solid fa-chevron-up"></i>'+ " Ẩn bớt";
        readu.style = "font-weight: bold"
    }
    else{
        hideu.style.display="none";
        readu.innerHTML='<i class="fa-solid fa-chevron-down"></i>'+" Xem thêm";
    }
}
//like and dislike
function likeF()
{
    var like =document.getElementById("btnlike");
    var disLike=document.getElementById("btndislike");
    like.onclick=function() {
        this.classList.toggle("liked");
        disLike.classList.remove("disliked")
        $(".count-people").html("201"); 
    }
    disLike.onclick=function() {
        this.classList.toggle("disliked");
        like.classList.remove("liked")
        $(".count-people").html("200"); 
    }
    var hidelike=document.getElementById("hideLike");
}
// comment
$(document).ready(function() {
    var countCmt =0;
    $("#comment-input").on("change",function(){
        var k=$(this).val();
        var h=`<h4>${k}</h4>`;
        var m= $(this).parent().children("div.commentBox");
        m.prepend(h);//chenf h4 vao m
        this.value = "";
        countCmt++;
        $(".count-cmt").html(`${countCmt}`);
    })
})
//share
$(document).ready(function() {
    var countShare =50;
    $("#btnshare").on("click",function(){
        countShare++;
        $(".count-share").html(`${countShare}`);
        alert("Chia sẻ thành công")
    })
})
// xoa ket ban
$(document).ready(function(){
    $("button.no").click(function(){
        $("div.add-friend").remove();
    });
});
//dong y ket ban
$(document).ready(function(){
    $("button.yes").click(function(){
        $("button.yes").remove();
        $("button.no").remove();
        $("button.ok").show();

    });
});
//loading
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    elem.style = "display: block";
    var width = 1;
    var id = setInterval(frame, 30);//thoi gian chay
    function frame() {
      if (width >= 100) {
        clearInterval(id);//xoa bo hen gio
    elem.style = "display: none";
    window.alert("Đăng tải thành công!!");
    i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
//loading trang

//hieu ung cho loading trang
$(window).on('load', function(event) {
    $('.load').delay(2500).fadeOut('fast');
 });
//an hien mat khau
function toggle() {
    var x = document.getElementById("passwords");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


