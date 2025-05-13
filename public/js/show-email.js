// Copy email to clipboard and show feedback on click
document.addEventListener("DOMContentLoaded", function () {
  var emailLink = document.getElementById("show-email-link");
  var email = "william_hick@hotmail.co.uk";
  if (emailLink) {
    emailLink.addEventListener("click", function (e) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(function () {
        var originalText = emailLink.textContent;
        emailLink.textContent = "Copied!";
        emailLink.style.color = "#7dcfff";
        setTimeout(function () {
          emailLink.textContent = originalText;
          emailLink.style.color = "";
        }, 1200);
      });
    });
  }
});
