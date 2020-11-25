$(document).ready(function () {
	$("#slides").superslides({
		animation: "fade",
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: [
			"Software Engineer",
			"Full-Stack Web Developer",
			"Udemy Fanatic",
			"Javascript Lover"
		],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 4,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			768: {
				items: 3
			},
			938: {
				items: 4
			}
		}
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;

	$(window).scroll(function () {
		if (window.pageYOffset > skillsTopOffset - $(window).height() + 250) {
			$(".chart").easyPieChart({
				autoplay: true,
				autoplayTimeout: 5000,
				nav: true,
				easing: "easeInOut",
				barColor: "#fff",
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function (from, to, percent) {
					$(this.el).find(".percent").text(Math.round(percent));
				}
			});
			var owl = $(".owl-carousel");

			owl.trigger("play.owl.autoplay", [3000]);
		}

		if (
			!countUpFinished &&
			window.pageYOffset > statsTopOffset - $(window).height() + 250
		) {
			$(".counter").each(function () {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			});

			countUpFinished = true;
		}
	});

	$("[data-fancybox]").fancybox();
});
