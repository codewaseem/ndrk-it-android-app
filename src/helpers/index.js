export const vibrate = (ms=50) => {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(ms);
    }
}