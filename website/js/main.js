var loading = document.querySelector('#wrapper-loading');

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        loading.parentNode.removeChild(loading);
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     loading.parentNode.removeChild(loading);
// });