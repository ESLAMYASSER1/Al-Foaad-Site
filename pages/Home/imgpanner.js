var imgPannerImg =document.getElementById("imgpannerimg");
window.onload=imgPannerImg.src="../../images/BW-logo.png"   

var images=["../../images/editable/images.jpeg","../../images/editable/images1.jpeg","../../images/editable/images2.jpeg","../../images/editable/images3.jpeg"]



setInterval(imgChanger,4000)

var imgcounter =0
async function imgChanger(){
    imgPannerImg.src=images[imgcounter]
    imgcounter++
    if(imgcounter>=(images.length) || imgcounter<0){
        imgcounter=0
    }
}

var imgpannerbtnleft=document.getElementById("imgptnleft")
var imgpannerbtnright=document.getElementById("imgptnright")

imgpannerbtnleft.addEventListener("click",async function(){imgcounter-=2;imgPannerImg.src=images[imgcounter]; if(imgcounter==(images.length) || imgcounter<0){imgcounter=1;}console.log(imgcounter)})
imgpannerbtnright.addEventListener("click",async function(){imgcounter++;imgPannerImg.src=images[imgcounter];if(imgcounter==(images.length) || imgcounter<0){imgcounter=1;}console.log(imgcounter)})


