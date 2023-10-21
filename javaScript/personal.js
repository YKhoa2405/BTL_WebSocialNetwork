$(document).ready(function(){

  $(".tittle input").click(function(){
    var k=$(this).parent().parent();
  $(k).children(".body").toggleClass("none");
   
});

$(window).scroll(function(){
if($(this).scrollTop()){
  $('.back-top').fadeIn();
}
else{$('.back-top').fadeOut();}
})
$('.back-top').click(function(){
  $('html,body').animate({
    scrollTop: 0
  },1000);//1000ms
})

jQuery(".dropdown").click(function(){
  jQuery(this).find(".sub-menu").slideToggle("500");
});

$("input[type=text]").on("change",function(){
  var k=$(this).val();
  var h=`<h4 style="background-color:lightgray;color: black;margin-top: 5px;border-radius: 5px; ">${k}</h4>`;
  var m= $(this).parent().children("div.commentBox")
  this.value= "";
  m.prepend(h)
})



})
$(document).ready(function(){
$("section.wrap").on("click","div.tittle a",function(){
$(this).parent().parent().remove()});
})
function chooseFile(FileInput) {
  if(FileInput.files && FileInput.files[0]){
let reader=new FileReader();
reader.onload=function(e){
  $('#image').attr('src',e.target.result);
}
reader.readAsDataURL(FileInput.files[0]);
  }
}

function chooseAvatar(FileInput) {
  if(FileInput.files && FileInput.files[0]){
let reader=new FileReader();
reader.onload=function(e){
  $('#img1').attr('src',e.target.result);
}
reader.readAsDataURL(FileInput.files[0]);
}
}

//phong to hinh
function zoom() {
   const images = document.querySelectorAll(".mainpicture img");
images.forEach(item => item.addEventListener("click",handelZoom));
function handelZoom(event) {
  const image = event.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
  <i class="fa-solid fa-angle-left lightbox-prev"></i>
  <img src="${image}"
  alt="" class="lightbox-image"/>
  <i class="fa-solid fa-angle-right lightbox-next"></i>
</div>
</div>`;
document.body.insertAdjacentHTML("beforeend",template);
}
let index=0;
document.body.addEventListener("click",function(e){
  const lightImage=document.querySelector(".lightbox-image");
  let lightSrc="";
  if(e.target.matches(".lightbox")){
      e.target.parentNode.removeChild(e.target);
  }else if(e.target.matches(".lightbox-next")){
      lightSrc=lightImage.getAttribute("src");
      index=[...images].findIndex(item => item.getAttribute("src")===lightSrc);
     index+=1;
     if(index >= images.length){index=0}
     const newSrc=[...images][index].getAttribute("src");
     lightImage.setAttribute("src",newSrc);
  }else if(e.target.matches(".lightbox-prev")){
      lightSrc=lightImage.getAttribute("src");
      index=[...images].findIndex(item => item.getAttribute("src")===lightSrc);
     index-=1;
     if(index < 0){index=images.length-1}
     const newSrc=[...images][index].getAttribute("src");
     lightImage.setAttribute("src",newSrc);
  }

});
}

$(window).on('load', function(event) {
  $('.load').delay(1000).fadeOut('fast');
});