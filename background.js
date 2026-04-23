chrome.commands.onCommand.addListener((command) => {
  if (command === "trigger-hello") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"]
        });
        chrome.scripting.insertCSS({
          target: { tabId: tabs[0].id },
          files: ["styles.css"]
        });
      }
    });
  }
});
