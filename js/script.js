// scroll navbar
const navbar = document.querySelector('#navbar');

window.onscroll = () => {
    scrollNavbar();
}

var scrollNavbar = () => {
    if(document.documentElement.scrollTop > 160) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled")
    }
}

// toggle plans
document.addEventListener("DOMContentLoaded", function () {
	var tabBodies = document.querySelectorAll(".tab-slider--body");
	var navItems = document.querySelectorAll(".tab-slider--nav li");

	tabBodies[0].style.display = "block";

	function showTab(tabId, buttonID) {
		for (var i = 0; i < tabBodies.length; i++) {
			tabBodies[i].style.display = "none";
		}
		document.getElementById(tabId).style.display = "block";

		if (tabId === "tab2") {
			document.querySelector(".tab-slider--tabs").classList.add("slide");
		} else {
			document.querySelector(".tab-slider--tabs").classList.remove("slide");
		}

		for (var i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove("active");
		}

		document.getElementById(buttonID).classList.toggle("active");
	}

	for (var i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener("click", function () {
			var activeTab = this.getAttribute("rel");
			var getTabID = this.getAttribute("id");
			showTab(activeTab, getTabID);
		});
	}
});


// slider
	$('.slide-track').slick({
		autoplay: true,
		autoplaySpeed: 500, // Slide duration in milliseconds
		dots: false, // Show navigation dots
		arrows:false,
		infinite: true, // Enable infinite looping
		speed: 500, // Transition speed in milliseconds
		slidesToShow: 5, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll at a time
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
				breakpoint: 320,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
		  ]
	});


// form validation

function validateForm() {
	var nameInput = document.getElementById('name');
	var phoneInput = document.getElementById('phone');
	var emailInput = document.getElementById('email');

	// Validate Name
	// var nameRegex = /^[a-zA-Z\s]+$/;
	// if (!nameRegex.test(nameInput.value)) {
	// 	alert('Please enter a valid name.');
	// 	nameInput.focus();
	// 	return false;
	// }

	// Validate Phone Number
	var phoneRegex = /^[0-9]{10}$/;
	if (!phoneRegex.test(phoneInput.value)) {
		alert('Please enter a valid 10-digit phone number.');
		phoneInput.focus();
		return false;
	}

	// Validate Email Address
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailInput.value)) {
		alert('Please enter a valid email address.');
		emailInput.focus();
		return false;
	}

	// Form is valid, allow submission
	return true;
}
