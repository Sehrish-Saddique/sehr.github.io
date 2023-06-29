let originalImageUrl = "";
let originalText = "";

function upDate(previewPic){
    originalImageUrl = document.getElementById("image").style.backgroundImage;
    originalText = document.getElementById("image").innerHTML;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
  document.getElementById("image").style.backgroundImage = originalImageUrl;
  document.getElementById("image").innerHTML = originalText;
}

