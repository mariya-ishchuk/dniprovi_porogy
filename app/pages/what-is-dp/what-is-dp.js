function whatIsDPInit() {
	var activeFilter = "nature";
	var sidebar = document.getElementsByClassName("sidebar")[0];

	sidebar.onclick = function(event) {
		var target = event.target,
			activeAccordion = document.querySelector(".accordion.active");

		if(target.classList.contains("accordion")) {
			activeFilter = target.dataset.filter;
			setBreadcrumbs(target.dataset.filter);
			activeAccordion && activeAccordion.classList.remove("active");
			target.classList.toggle("active");
			document.querySelector(".article.active") &&
				document.querySelector(".article.active").classList.remove("active");
			document.querySelector("[data-article='"+target.dataset.filter+"']") &&
				document.querySelector("[data-article='"+target.dataset.filter+"']").classList.add("active");
		}
	}

	function setBreadcrumbs(text) {
		document.getElementsByClassName("dynamic-breadcrumb")[0].innerHTML = document.querySelector("[data-filter='"+text+"']").innerText;
	};
	setBreadcrumbs(activeFilter);
};

document.getElementsByClassName("page-what-is-dp")[0] && document.getElementsByClassName("sidebar")[0] && whatIsDPInit();
