/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

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
            }
            else {
                chrome.tabs.create({ url: `editor.html?screenshot=${encodeURIComponent(dataUrl)}` });
            }
        });
        return true;
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBLHVDQUF1QyxlQUFlO0FBQ3RELCtCQUErQixlQUFlO0FBQzlDLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGVBQWU7QUFDdkQ7QUFDQTtBQUNBLCtCQUErQix5Q0FBeUM7QUFDeEU7QUFDQTtBQUNBLHFDQUFxQywrQkFBK0IsNEJBQTRCLEdBQUc7QUFDbkc7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGlwLW4tc2hvdC8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcImNhcHR1cmVTY3JlZW5cIikge1xuICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7fSwgKHRhYnMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogXCJObyB0YWJzIGF2YWlsYWJsZVwiIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRhYkxpc3Q6IHRhYnMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwiY2FwdHVyZVZpZXdwb3J0XCIpIHtcbiAgICAgICAgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIoeyBmb3JtYXQ6IFwicG5nXCIgfSwgKGRhdGFVcmwpID0+IHtcbiAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi4p2MIEVycm9yIGNhcHR1cmluZyB2aWV3cG9ydDpcIiwgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IGBlZGl0b3IuaHRtbD9zY3JlZW5zaG90PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFVcmwpfWAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==