document.addEventListener("DOMContentLoaded", function () {
    const studentDetails = document.getElementById("studentDetails");
    let students = localStorage.getItem("students");

    if (students) {
        students = JSON.parse(students);
        students.forEach(element => {
        const details = document.createElement("div");
        details.innerHTML = `<p><strong>Name:</strong> ${element.name}</p><p><strong>Roll No.:</strong> ${element.rollNumber}</p><p><strong>Aggregate:</strong> ${element.aggregate}</p><hr>`;
        studentDetails.appendChild(details);
        });
    } else {
        studentDetails.innerHTML = "<p>No student details found.</p>";
    }
});
