document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.getElementById('menu'); // Ensure this is correct

  menuIcon.addEventListener('click', () => {
    console.log('Menu icon clicked'); // Debug log
    nav.classList.toggle('active');
  });

  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(e, tabname) {
    console.log('Opening tab:', tabname); // Debug log
    for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    e.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  window.opentab = opentab;
});
