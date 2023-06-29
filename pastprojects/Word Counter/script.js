let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text=this.value;
    console.log(text);
    let char = text.length;
    document.getElementById("char").innerHTML = char;
    text = text.trim();

    let words= text.split(" ");
    let cleanlist = words.filter(function(elm){
        return elm!="";
    });
    console.log(words);
    document.getElementById("word").innerHTML = cleanlist.length;


});