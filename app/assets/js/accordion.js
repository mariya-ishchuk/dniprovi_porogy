function initAccordion(articles, activeFilter, articlesPerPage = 6, activePage = 1, sidebar) {
	var articles = articles;
	var activeFilter = activeFilter;
	var articlesPerPage = articlesPerPage;
	var activePage = activePage;
	var sidebar = sidebar;

	if (!sidebar) return;

	sidebar.onclick = function(event) {
		var target = event.target,
			activeAccordion = document.querySelector(".accordion.active"),
			activeAccordionItem = document.querySelector(".accordion-item.active");

		if(target.classList.contains("accordion") || target.classList.contains("accordion-item")) {
			target.classList.contains("accordion") && setBreadcrumbs(target.dataset.filter);
			activeFilter = target.dataset.filter;
			activeAccordion && activeAccordion != target && target.parentElement.previousElementSibling != activeAccordion
				&& activeAccordion.classList.remove("active");
			activeAccordionItem && activeAccordionItem.classList.remove("active");
			target.classList.toggle("active");
			target.dataset.filter && filterActiveArticles(activeFilter, articles, activePage);
		}
	}

	function filterActiveArticles(filter, articles, activePage) {
		var filterArticles = articles.filter(function(item) {
			return item.group == filter;
		});
		setArticleContent(filterArticles, articlesPerPage, activePage);
	}

	function setActivePaginator(page) {
		if (!document.getElementsByClassName("pagination")[0]) return;
		document.querySelector(".pagination-page.active").classList.remove("active");
		document.querySelector("[data-page='"+page+"']").classList.add("active");
	}

	function bindPaginationClick() {
		if (!document.getElementsByClassName("pagination")[0]) return;
		document.getElementsByClassName("pagination")[0].onclick = function(event) {
			var filterArticles = articles.filter(function(item) {
				return item.group == activeFilter;
			});
			var paginaionControls = {
				"prev": (activePage - 1) <= 0 ? 1 : activePage - 1,
				"next": (activePage + 1) >= Math.ceil(filterArticles.length / articlesPerPage) ? Math.ceil(filterArticles.length / articlesPerPage) : (activePage + 1)
			};
			activePage = paginaionControls[event.target.dataset.page] ? paginaionControls[event.target.dataset.page] : parseInt(event.target.dataset.page);
			if (event.target.classList.contains("pagination-page")) {
				filterActiveArticles(activeFilter, articles, activePage);
				setActivePaginator(activePage);
			}
		}
	}

	/**
	 * @param {[type]}
	 * @param {[type]}
	 * @param {[type]}
	 */
	function setArticleContent(articles, visibleQuantity, page) {
		var articlesInPage = articles.filter(function(item, index) {
			return index < visibleQuantity*page && index >= visibleQuantity*(page-1);
		});

		var arr = articlesInPage.map(function(item, index) {
			return ["<div class='article'>",
							"<a href='"+item.href+"' title=''>",
								"<div class='article-img'>",
									"<img src='"+item.src+"' alt='"+item.title+"'>",
								"</div>",
								"<div class='article-text'>",
									"<h4>"+item.title+"</h4>",
									"<p>"+item.text+"</p>",
								"</div>",
							"</a>",
						"</div>"].join("")
		});
		document.getElementsByClassName("articles")[0].innerHTML = arr.join("");
		if (articles.length > articlesPerPage) {
			if (!document.getElementsByClassName("pagination")[0]) return;
			if (document.getElementsByClassName("pagination")[0].classList.contains("visible")) return;
			document.getElementsByClassName("pagination")[0].classList.add("visible");
			activePage = 1;
			setActivePaginator(activePage);
			bindPaginationClick();
		} else {
			document.getElementsByClassName("pagination")[0].classList.remove("visible");
		}
	}

	function setBreadcrumbs(text) {
		document.getElementsByClassName("dynamic-breadcrumb")[0].innerHTML = document.querySelector("[data-filter='"+text+"']").innerText;
	}

	filterActiveArticles(activeFilter, articles, activePage);
	setBreadcrumbs(activeFilter);
}
