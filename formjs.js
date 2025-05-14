document.getElementById('submit').addEventListener('click', () => {
  alert('Student information submitted!');
});

document.getElementById('preview').addEventListener('click', () => {
  const student_name = document.getElementById('Name').value;
  const department = document.getElementById('Department').value;
  const reg_number = document.getElementById('Reg').value;
  const age = document.getElementById('Age').value;
  const semester_year = document.getElementById('Year').value;
  const gpa = document.getElementById('GPA').value;
  const DSA = document.getElementById('DSA').value;
  const Java = document.getElementById('Java').value;
  const Python = document.getElementById('Python').value;
  const Cloud_computing = document.getElementById('Cloud_Computing').value;
  const Cybersecurity = document.getElementById('Cybersecurity').value;
  const Web_dev = document.getElementById('Web_Dev').value; 

  const outputHTML = `
    <p><strong>Name: </strong> ${student_name}</p>
    <p><strong>Department: </strong> ${department}</p>
    <p><strong>Registration No.: </strong> ${reg_number}</p>
    <p><strong>Age: </strong> ${age}</p>
    <p><strong>Year: </strong> ${semester_year}</p>
    <p><strong>GPA: </strong> ${gpa}</p>
    <p><strong>DSA Marks: </strong> ${DSA}</p>
    <p><strong>Java Marks: </strong> ${Java}</p>
    <p><strong>Python Marks: </strong> ${Python}</p>
    <p><strong>Cloud Computing Marks: </strong> ${Cloud_Computing}</p>
    <p><strong>Cybersecurity Marks: </strong> ${Cybersecurity}</p>
    <p><strong>Web Dev Marks: </strong> ${Web_Dev}</p>
  `;

  document.getElementById('student-details').innerHTML = outputHTML;
});

document.getElementById('submit').addEventListener('click', () => {
  alert('Student information submitted!');
});

document.addEventListener('DOMContentLoaded', function () {
  const clearBtn = document.getElementById('clearBtn');
  const form = document.getElementById('studentForm');

  clearBtn.addEventListener('click', function () {
    form.reset(); // Clear all input fields
  });
});

