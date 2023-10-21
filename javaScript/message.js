$(document).ready(function(){
    $("button.click-funtion").click(function() {
        $("div.modal-funtion").toggleClass("block");
    });

    $("div.list>ul:not(:first-child)").hide();
    $("ul.choice a").click(function(){
        $("ul.choice a").removeClass("active");
        $(this).addClass("active");
        var box=$(this).attr("href");
        $("div.list>ul").hide();
        $(box).show();
    });

    $(".box>section:not(:first-child)").hide();

    $("div.list a").click(function(){
        $("div.list a").removeClass("appear");
        $(this).addClass("appear").addClass("none");
        var box=$(this).attr("href");
        $(".box>section").hide();
        setTimeout(function(){
            
        },100);
        $(box).show();
    });
    

    

    $("section input[type=text]").on("change",function(){
        var k=$(this).val();
        var h=`<h4 style="text-align:right;">${k}</h4>`;
        var m= $(this).parent().parent().parent().children("div.chat-box");
        m.append(h);
        this.value= ""
    });
    
});

function search(){
    var k=document.getElementById("kw").value;
    var item=document.querySelectorAll("div.list li")
    item.forEach(function(item){
        let text=item.innerText;
        if (text.indexOf(k)>=0) 
            item.style.display=""
        else item.style.display="none"
        
    })
}

var kichThuoc=document.getElementsByClassName("slider")[0].clientWidth;
var diChuyen=document.getElementsByClassName("chuyen")[0];
var chuyen=0;
var mang=diChuyen.getElementsByClassName("slide");
var max=kichThuoc * mang.length - kichThuoc;
function next() {
    if(chuyen < max)chuyen+=kichThuoc;
    else chuyen=0;
    diChuyen.style.marginLeft='-'+chuyen+'px';
};
function pre() {
    if(chuyen==0)chuyen=max;
    else chuyen-=kichThuoc;
    diChuyen.style.marginLeft='-'+chuyen+'px';

};
setInterval(function(){
next();
},3000);