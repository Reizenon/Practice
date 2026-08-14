document.addEventListener('DOMContentLoaded', function() {
  const consentBanner = document.getElementById('cookie-consent');
  const acceptBtn = document.getElementById('accept-cookies');
  const consentKey = 'cookie_consent_given';

  if (localStorage.getItem(consentKey) === 'true') {
    consentBanner.classList.add('hidden');
  }

  acceptBtn.addEventListener('click', function() {
    localStorage.setItem(consentKey, 'true');
    consentBanner.classList.add('hidden');
  });
});