// index.js
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Tab switching functionality
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(e, tabname) {
    for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  // Expose opentab function globally if needed
  window.opentab = opentab;
});
