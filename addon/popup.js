function updateLabel() {
  const enabled = chrome.extension.getBackgroundPage().enabled;
  document.getElementById('toggle_button').value = enabled ? 'Disable' : 'Enable';
}

function onToggle() {
  const background = chrome.extension.getBackgroundPage();

  if (background.enabled) {
    background.disable();
  } else {
    background.enable();
  }

  updateLabel();
}

window.addEventListener('load', function () {
  document.getElementById('toggle_button').addEventListener('click', onToggle);
  updateLabel();
});
