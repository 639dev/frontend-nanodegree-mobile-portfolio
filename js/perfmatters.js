var stats = document.getElementById("crp-stats");

function logCRP() {
    var t = window.performance.timing,
        dcl = t.domContentLoadedEventStart - t.domLoading,
        complete = t.domComplete - t.domLoading;
    stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms'
}
window.addEventListener("load", function(event) {
    logCRP()
})