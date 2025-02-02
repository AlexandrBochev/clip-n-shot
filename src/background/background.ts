chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "captureScreen") {
    chrome.tabs.query({}, (tabs) => {
      if (!tabs.length) {
        sendResponse({ error: "No tabs available" });
        return;
      }
      chrome.storage.local.set({ tabList: tabs }, () => {
        sendResponse({ success: true });
      });
    });
    return true;
  }

  if (message.action === "captureViewport") {
    chrome.tabs.captureVisibleTab({ format: "png" }, (dataUrl) => {
      if (chrome.runtime.lastError) {
        console.error("❌ Error capturing viewport:", chrome.runtime.lastError);
        sendResponse({ error: chrome.runtime.lastError.message });
      } else {
        chrome.tabs.create({ url: `editor.html?screenshot=${encodeURIComponent(dataUrl)}` });
      }
    });
    return true;
  }
});