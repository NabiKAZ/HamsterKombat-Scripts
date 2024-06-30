// Programmer: @NabiKAZ (https://twitter.com/NabiKAZ) and Thanks for https://twitter.com/0xMammad
// Run Hamster on the desktop version
// First, you need to activate the following option in Telegram beta:
// `Settings > Advanced > Experimental settings > Enable webview inspecting`
// Then you open Hamster and right-click and click `Inspect`.
// Copy and paste this script in the `Console` tab.

var session = JSON.parse(sessionStorage.getItem("__telegram__initParams"));
session["tgWebAppPlatform"] = "android";
sessionStorage.setItem("__telegram__initParams", JSON.stringify(session));
window.location.reload();
