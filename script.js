document.addEventListener('DOMContentLoaded', function () {
		// Data e hora atual no footer
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

	// Slider automático
	const sliderImages = document.querySelectorAll('.slider-img');
	let current = 0;
	function showSlide(idx) {
		sliderImages.forEach((img, i) => {
			img.classList.remove('active');
		});
		sliderImages[idx].classList.add('active');
	}
	function nextSlide() {
		current = (current + 1) % sliderImages.length;
		showSlide(current);
	}
	if (sliderImages.length > 0) {
		showSlide(current);
		setInterval(nextSlide, 3000); // 3 segundos
	}

	// Submenu mobile toggle
	document.querySelectorAll('.has-submenu > a').forEach(function (el) {
		el.addEventListener('click', function (e) {
			if (window.innerWidth <= 800) {
				e.preventDefault();
				const submenu = this.nextElementSibling;
				if (submenu) {
					// Toggle submenu for mobile only
					if (submenu.style.display === 'flex') {
						submenu.style.display = 'none';
						submenu.style.opacity = '0';
						submenu.style.visibility = 'hidden';
					} else {
						submenu.style.display = 'flex';
						submenu.style.opacity = '1';
						submenu.style.visibility = 'visible';
					}
				}
			}
		});
	});

	// Reset submenu display on resize to desktop
	window.addEventListener('resize', function () {
		if (window.innerWidth > 800) {
			document.querySelectorAll('.submenu').forEach(function (submenu) {
				submenu.style.display = '';
				submenu.style.opacity = '';
				submenu.style.visibility = '';
			});
		}
	});
});
