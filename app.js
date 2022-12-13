function submitForm() {
  // Get the values of the form fields
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var message = document.getElementsByName("message")[0].value;

  // Create the mailto: URL
  var url =
    "mailto:hilrickwebdev@gmail.com?subject=Message from " +
    name +
    "&body=" +
    message;

  // Open the URL in a new window
  window.open(url);
}
