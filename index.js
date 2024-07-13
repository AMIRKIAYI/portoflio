// index.js
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', function () {
      nav.classList.toggle('active');
  });
});






var tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(e, tabname) {
      for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      e.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }

// function opentab(tabName) {
//     var i;
//     var x = document.getElementsByClassName("tab-contents");
//     for (i = 0; i < x.length; i++) {
//       x[i].classList.remove("active-tab");
//     }
//     document.getElementById(tabName).classList.add("active-tab");
//   }