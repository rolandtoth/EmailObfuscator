document.addEventListener('DOMContentLoaded', function () {

    // restore mailto: links
    Array.prototype.forEach.call(document.querySelectorAll('a[href^="GOSPAM:"]'), function (el) {

        var email = el.getAttribute('href').substr(7);
        // replace email with its reversed version
        email = email.split('').reverse().join('');
        // replace "GOSPAM:" with "mailto:"
        el.setAttribute('href', 'mailto:' + email);
    });

    Array.prototype.forEach.call(document.querySelectorAll('.email-obfuscator-unreverse'), function (el) {
        el.innerHTML = el.innerHTML.split('').reverse().join('');
        el.removeAttribute('style');
    });
});
