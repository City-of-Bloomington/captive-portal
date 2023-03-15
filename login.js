"use strict";
function loadAction(e) {
    let url        = window.location.href,
        params     = new URLSearchParams(location.search),
        statusCode = parseInt(params.get('statusCode'));

    const statusMessages = [
        'Success',
        'You are already logged in. No further action is required on your part.',
        'You are not configured to authenticate against web portal. No further action is required on your part.',
        'The username specified cannot be used at this time. Perhaps the username is already logged into the system?',
        'The User has been excluded. Please contact the administrator.',
        'Invalid username and password. Please try again.',
        'Invalid email address format. Please try again.'
    ];

    document.forms[0].action = params.get('switch_url');
    if (statusCode > 0 && statusCode <= 6) {
        alert(statusMessages[statusCode]);
    }
}

window.addEventListener('load', loadAction);
