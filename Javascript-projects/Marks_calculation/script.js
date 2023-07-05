// var stdrecord;

   
function btnclick(){   
    event.preventDefault(); // Prevent form submission
    var fscMarks;
    var matricMarks;
    var entryTestMarks;
    var name = document.getElementById("name").value;
    var rollNumber = document.getElementById("rollnmbr").value;
    var totalMatricMarks = 1100;
    var totalFscMarks = 1100;
    var totalEntryTestMarks = 400;
   
    if((document.getElementById("matricmarks").value)> totalMatricMarks || (document.getElementById("matricmarks").value)<0)
    {
        alert("Matric Marks are invaid");
    }
    else{
         matricMarks = document.getElementById("matricmarks").value;

    }
    if((document.getElementById("fscmarks").value)>totalFscMarks || (document.getElementById("fscmarks").value)<0)
    {
        alert("Fsc Marks are invaid");
    }
    else{
         fscMarks = document.getElementById("fscmarks").value;

    }
    if((document.getElementById("entrymarks").value)>totalEntryTestMarks || (document.getElementById("entrymarks").value)<0)
    {
        alert("Entry Test Marks are invaid");
    }
    else{
         entryTestMarks = document.getElementById("entrymarks").value;

    }

    // var std = new Student(name,rollNumber,matricMarks,fscMarks,entryTestMarks);
    // console.log(std);
    // localStorage.setItem('std',JSON.stringify(std));
 
    var resultMessage = "<strong> Name: </strong>" + name + "<br>";
    resultMessage += "<strong> Roll Number: </strong>" + rollNumber + "<br>";
    resultMessage += "<strong> Matric Marks: </strong>" + matricMarks + "<br>";
    resultMessage += "<strong> FSC Marks: </strong>" + fscMarks + "<br>";
    resultMessage += " <strong> Entry Test Marks: </strong>" + entryTestMarks;

    // Display the result on the screen
    document.getElementById("result").innerHTML = resultMessage;


    
   
    var matricPercentage = (matricMarks / totalMatricMarks) * 100;
    var fscPercentage = (fscMarks / totalFscMarks) * 100;
    var entryTestPercentage = (entryTestMarks / totalEntryTestMarks) * 100;

    var aggregate = (matricPercentage * 0.2) + (fscPercentage * 0.3) + (entryTestPercentage * 0.5);
    var msg="<strong> Aggregate is: </strong>";
    document.getElementById("aggregate").innerHTML = aggregate.toFixed(2);
    document.getElementById("aggregate").innerHTML =msg + aggregate.toFixed(2) ;

    var resultElement = document.getElementById('container2');

    resultElement.innerHTML = "<strong> Aggregate: </strong> " + aggregate.toFixed(2);

 
    resultElement.innerHTML = "<strong> Student Name: </strong> " + name + "<br><strong> Aggregate: </strong> " + aggregate.toFixed(2);

    if ((aggregate) >= 60) {
        resultElement.style.color = 'green';
        resultElement.innerHTML += "<br><br><strong>Congratulations!</strong> You are eligible for admission.";
    } else {
        resultElement.style.color = 'red';
        resultElement.innerHTML += "<br><br>Sorry, you are not eligible for admission.";
    }

    resultElement.style.display = 'block';


    let stdData = { name: name,
        aggregate: aggregate.toFixed(2)}
        var array=[];
    array.push(stdData);
    localStorage.setItem("array",JSON.stringify(array));
    console.log(array);
  
    //document.getElementById("myForm").reset();

};


// class Student{
//     constructor(name,rollNumber,matricMarks,fscMarks,entryTestMarks)
//     {
//         this.name=name;
//         this.rollNumber=rollNumber;
//         this.matricMarks=matricMarks;
//         this.fscMarks=fscMarks;
//         this.entryTestMarks=entryTestMarks;
//     }
// }
function stdRecord(){
    //  record=(localStorage.getItem(std));
    // document.getElementById("record").innerHTML = record;
    window.location.href = 'record.html';

   
 
    

    
}