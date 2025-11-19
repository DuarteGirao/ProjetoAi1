document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.nav-toggle');
	const mainNav = document.querySelector('.main-nav');
	const menu = document.getElementById('primary-menu');

	if (!toggle || !mainNav || !menu) return;

	toggle.addEventListener('click', function () {
		const expanded = this.getAttribute('aria-expanded') === 'true';
		this.setAttribute('aria-expanded', String(!expanded));
		mainNav.classList.toggle('open');
	});

	menu.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('click', function () {
			if (mainNav.classList.contains('open')) {
				mainNav.classList.remove('open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	});
});
