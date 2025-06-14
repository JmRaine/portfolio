document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const phone = document.getElementById("phone").value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const dob = document.getElementById("dob").value;
      const course = document.getElementById("course").value;
      const termsAccepted = document.getElementById("terms").checked;
  
      if (!termsAccepted) {
        alert("Please accept the terms and conditions.");
        return;
      }
  
      alert(`Registration Successfully\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${course}`);
    });
  });
  