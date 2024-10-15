document.querySelector('.google').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Google OAuth...');
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth';
});

document.querySelector('.facebook').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Facebook OAuth...');
    window.location.href = 'https://www.facebook.com/v10.0/dialog/oauth';
});

document.querySelector('.instagram').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Instagram OAuth...');
    window.location.href = 'https://api.instagram.com/oauth/authorize';
});
