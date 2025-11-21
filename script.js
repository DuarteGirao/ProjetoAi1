document.addEventListener('DOMContentLoaded', function () {
	// Footer date/time (unchanged)
	function updateDateTime() {
		const now = new Date();
		const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
		const formatted = now.toLocaleString('pt-PT', options).replace(',', ' —');
		const dtElem = document.getElementById('datetime');
		if (dtElem) dtElem.textContent = 'Data e hora atual: ' + formatted;
	}
	updateDateTime();
	setInterval(updateDateTime, 1000);

	const toggle = document.querySelector('.nav-toggle');
	const mainNav = document.querySelector('.main-nav');
	const menu = document.getElementById('primary-menu');

	// Garantir que o menu começa fechado em dispositivos móveis
	// Close the menu when the layout uses the mobile/tablet collapsed navbar
	if (mainNav && window.innerWidth <= 900) {
		mainNav.classList.remove('open');
		if (toggle) toggle.setAttribute('aria-expanded', 'false');
	}

	// Keep state consistent when resizing across the collapse breakpoint
	window.addEventListener('resize', function () {
		if (!mainNav || !toggle) return;
		if (window.innerWidth <= 900) {
			mainNav.classList.remove('open');
			toggle.setAttribute('aria-expanded', 'false');
		} else {
			// on larger screens, ensure menu is visible and aria reflects expanded
			mainNav.classList.remove('open');
			toggle.setAttribute('aria-expanded', 'true');
		}
	});

	// Strict minimal behavior: start closed and toggle only when clicking the hamburger.
	if (toggle && mainNav && menu) {
		toggle.setAttribute('aria-expanded', 'false');
		toggle.addEventListener('click', function (e) {
			e.stopPropagation();
			const expanded = this.getAttribute('aria-expanded') === 'true';
			this.setAttribute('aria-expanded', String(!expanded));
			mainNav.classList.toggle('open');
		});
	}

	// Prefer hover for submenu on desktop: prevent parent link navigation on non-touch large viewports
	(function enableHoverSubmenu() {
		const parentLinks = document.querySelectorAll('.has-submenu > a');
		if (!parentLinks.length) return;
		function isTouch() {
			return ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
		}
		parentLinks.forEach(function (link) {
			link.setAttribute('aria-haspopup', 'true');
			link.addEventListener('click', function (e) {
				if (!isTouch() && window.innerWidth > 800) {
					// desktop non-touch: clicking the parent should not navigate — hover will open submenu
					e.preventDefault();
				}
			});
		});
	})();

	// Preserve a non-intrusive slider if present (does not affect nav behavior)
	const sliderImages = document.querySelectorAll('.slider-img');
	if (sliderImages.length > 0) {
		let current = 0;
		function showSlide(idx) {
			sliderImages.forEach(img => img.classList.remove('active'));
			sliderImages[idx].classList.add('active');
		}
		function nextSlide() {
			current = (current + 1) % sliderImages.length;
			showSlide(current);
		}
		showSlide(current);
		setInterval(nextSlide, 3000);
	}
});
