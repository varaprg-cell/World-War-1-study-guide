(() => {
  const cover = document.getElementById('decoy-site');
  const site = document.getElementById('secret-site');
  const coverTitle = 'World War I Study Guide – 9th Grade';
  // Retire the earlier persistent unlock. Each fresh navigation starts covered.
  try { localStorage.removeItem('siteUnlocked'); } catch {}
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation?.type === 'reload') {
    cover.hidden = true;
    site.hidden = false;
    document.title = 'World War I Study Guide – 9th Grade';
    const script = document.createElement('script');
    script.src = 'app.js?v=20261108-2';
    document.body.append(script);
  }
  document.getElementById('lock-site').addEventListener('click', () => {
    location.replace(location.pathname + location.search);
  });
  // A restored browser history page should also return to the worksheet.
  window.addEventListener('pageshow', event => {
    if (event.persisted) {
      cover.hidden = false;
      site.hidden = true;
      document.title = coverTitle;
    }
  });
})();
