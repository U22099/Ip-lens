if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Ip-lens/sw.js', { scope: '/Ip-lens/' })})}