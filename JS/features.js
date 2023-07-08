// THIS ENTIRE SCRIPT IS FOR HANDLING THE HIGHLIGHTS OF TABS WHEN CLICKED
"use strict";
// IT HIGHLIGHTS THE CURRENT TAB ON WHICH USER HAS CLICKED
function fixFocus(tabName, indexNO) {
  for (let i = 0; i < tabName.length; i++) {
    if (i != indexNO) {
      navigationTabs[0].children[i].classList.remove("fixFocus");
    } else {
      navigationTabs[0].children[i].classList.add("fixFocus");
    }
  }
}

// CODE THAT HANDLES THE UNDERLINE ON THE MAIN NAVIGATION WHEN THEY ARE CLICKED & THE PAGE LOADS
// Get the current URL
const currentURL = window.location.href;

// Iterate over the links and check if their href matches the current URL
for (let i = 0; i < navHighlight.length; i++) {
  const linkURL = navHighlight[i].href;

  if (currentURL === linkURL) {
    // Add the "fixFocus" class to the link with a matching URL
    navHighlight[i].classList.add("fixFocus");
    break; // Exit the loop after adding the class to the first matching link
  }
}
