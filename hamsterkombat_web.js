// Programmer: @NabiKAZ (https://twitter.com/NabiKAZ) and Thanks for Erfan (https://github.com/ErfanBahramali)
// To run Hamster Telegram game on computer. Enter Telegram from this link https://web.telegram.org/k/ 
// Then open the game. When the "Play on your mobile" error appeared. Copy and paste this code in 
// your browser console (press F12). Both the game is run in the opened window and the address written in the console 
// can be run in a separate and full-screen browser.
// Caution: You are responsible for possible risks such as banning.
// The game link: https://t.me/Hamster_kombat_bot/start?startapp=kentId101554083

var el = document.getElementsByTagName('iframe')[0];
el.src = el.src.replace(/(tgWebAppPlatform=)[^&]+/, "$1android");
console.log('-='.repeat(50));
console.log("Use this address in your browser:", el.src);
console.log('-='.repeat(50));
