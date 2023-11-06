function set(choice) {
  if (choice == 1) {
    window.localStorage.setItem('redirect','desktop')
    window.location = "/d/"
  }
  if (choice == 2) {
    window.localStorage.setItem('redirect','mobile')
      //alert('coming soon')
    window.location = "/m/"
  }
  if (choice == 3) {
    window.localStorage.setItem('redirect','boring')
    window.location = "/boring.html"
  }
}