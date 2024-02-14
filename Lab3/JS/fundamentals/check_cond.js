let userName = prompt('What\'s your name?', '');

if (userName === 'Admin') {
    let pass = prompt('Enter password', '');
    if (pass === 'TheMaster') {
        alert('Welcome');
    } else if(pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName === '' || userName === null) {
    alert('Canceled');
} else {
    alert('I don\'t know you');
}