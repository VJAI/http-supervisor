const background = chrome.extension.getBackgroundPage();

function updateLabel() {
  background.isSupervisorEnabled(function (result) {
    document.getElementById('toggle_button').value = result ? 'Disable' : 'Enable';
  });
}

function onToggle() {
  background.isSupervisorEnabled(function (result) {
    if (result) {
      background.disable(updateLabel);
    } else {
      background.enable(updateLabel);
    }
  });
}

window.addEventListener('load', function () {
  document.getElementById('toggle_button').addEventListener('click', onToggle);
  updateLabel();
});
