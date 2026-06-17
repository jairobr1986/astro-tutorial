document.querySelector('.hamburger')?.addEventListener('click', (event) => {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;

  const isExpanded = nav.classList.toggle('expanded');
  event.currentTarget.setAttribute('aria-expanded', String(isExpanded));
});
