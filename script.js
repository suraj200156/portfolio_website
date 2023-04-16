let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach (sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute ('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};




const checkbox = document.querySelector('.checkbox');
const html = document.querySelector('html');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    html.classList.remove('dark-mode');
  } else {
    html.classList.add('dark-mode');
  }
});




// function sendMail() {
//   var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       subject: document.getElementById("subject").value,
//       message: document.getElementById("message").value
//   };

//   const serviceID = "service_ydudrpo";
//   const templateID = "template_bwdwsfc";

//   emailjs.send(serviceID, templateID, params)
//       .then(function (response) {
//           console.log("SUCCESS", response);
//           alert("Your message was sent successfully!");
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("phone").value = "";
//           document.getElementById("subject").value = "";
//           document.getElementById("message").value = "";
//       }, function (error) {
//           console.log("FAILED", error);
//           alert("Check your connection!");
//       });
// }

function sendMail() {
  // Show the loader animation and loader_blur
  document.querySelector(".loader").style.display = "block";
  document.querySelector(".loader_blur").style.display = "block";

  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
  };

  const serviceID = "service_ydudrpo";
  const templateID = "template_bwdwsfc";

  emailjs.send(serviceID, templateID, params)
      .then(function (response) {
          console.log("SUCCESS", response);
          // Display popup on successful submission
          displayPopup();
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
      })
      .catch(function (error) {
          console.log("FAILED", error);
          alert("Check your connection!");
      })
      .finally(function () {
          // Hide the loader animation and loader_blur
          document.querySelector(".loader").style.display = "none";
          document.querySelector(".loader_blur").style.display = "none";
      });
}


function displayPopup() {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".popup_blur").classList.add("popup_blur", "active");

  document.querySelector(".close-btn").addEventListener("click", function () {
      document.querySelector(".popup").style.display = "none";
      document.querySelector(".popup_blur").classList.remove("popup_blur", "active");
  });
}



