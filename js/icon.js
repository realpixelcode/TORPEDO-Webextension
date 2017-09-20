document.addEventListener("click", (e) => {
  switch($(e.target).attr('id')){
    case "torpedoPage":
      chrome.tabs.create({ url: "https://www.secuso.informatik.tu-darmstadt.de/de/secuso/forschung/ergebnisse/torpedo/" });
      break;
    case "options":
      chrome.runtime.openOptionsPage();
      break;
    case "error":
      if(e.target.classList == "error"){
        chrome.extension.getBackgroundPage().sendEmail();
      }
      break;
  }
});

function init(e) {
  var torpedoPage = $(document.body).find("#torpedoPage").get(0);
  var options = $(document.body).find("#options").get(0);
  var error = $(document.body).find("#error").get(0);
  torpedoPage.innerHTML = chrome.i18n.getMessage("extensionName");
  options.innerHTML = chrome.i18n.getMessage("options");
  var status = chrome.extension.getBackgroundPage().getStatus();
  $(error).removeClass();
  if(status.err == ""){
    $(error).addClass("working");
    error.innerHTML = chrome.i18n.getMessage("OK");
  }
  else {
    $(error).addClass("error");
    error.innerHTML = chrome.i18n.getMessage("error");
  }
}

document.addEventListener('DOMContentLoaded', init);