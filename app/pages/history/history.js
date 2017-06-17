document.addEventListener("DOMContentLoaded", function(event) { 
	var articles = [
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/geology.png", title: "Стародавність", group: "history-nadpor", href:""},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/tectonic.jpg", title: "Середньовіччя", group: "history-nadpor"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/minerals.jpg", title: "Козацькі часи", group: "history-nadpor"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/stones-on-shore.jpg", title: "Під владою імперії", group: "history-nadpor"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/rapid.jpg", title: "ХХ століття", group: "history-nadpor"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/stones-on-shore.jpg", title: "Сучасність", group: "history-nadpor"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/rapid.jpg", title: "Історія сіл Надпоріжжя", group: "history-nadpor"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "middleage"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/kozaky.jpg", title: "Заголовок", group: "kozaky"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "impery"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "twenty"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "nowadays"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "villages-history"},

		{text: "Залишки стоянок давніх людей", src: "images/camp.jpg", title: "Стоянки", group: "archeology"},
		{text: "Ритуальні поховальні земляні споруди різних культур", src: "images/mound.jpg", title: "Могили (кургани)", group: "archeology"},
		{text: "Середньовічні ремісницькі поселення та укріплені городища", src: "images/habitation.jpg", title: "Городища та Поселення", group: "archeology"},
		{text: "Залишки фортець та інших оборонних споруд", src: "images/fortification.jpg", title: "Фортифікації", group: "archeology"},
		{text: "Місця історичних битв біля Дніпрових порогів", src: "images/battle-place.jpg", title: "Місця битв", group: "archeology"},
		{text: "Мегалітичні кам’яні споруди епохи бронзи, давні капища", src: "images/saint-kromleh.jpg", title: "Святилища, Кромлехи", group: "archeology"},

		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Запорозьке водосховище", group: "basin"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Затоки", group: "basin"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Ставки", group: "basin"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Річки", group: "basin"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Струмки", group: "basin"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Джерела", group: "basin"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "reservoir"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "bay"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "pond"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "river"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "stream"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "pond"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "source"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "source"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Рослини", group: "flora-fauna"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Тварини", group: "flora-fauna"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Гриби", group: "flora-fauna"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Лишайники", group: "flora-fauna"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Водорості", group: "flora-fauna"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Мікроорганізми", group: "flora-fauna"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "plants"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "animals"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "mashrooms"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "mashrooms"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "lichen"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "alga"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "alga"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Прісноводні", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Болота", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Узбережні та засолені", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Піски", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Скельні", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Трав'яні (степи і луки)", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Чагарники", group: "habitat"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "freshwater"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "swamp"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "coastal"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "coastal"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "sand"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "rocks"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "herbal"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "bushes"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "forests"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "forests"},

		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Вододіли", group: "landscape"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Балки та яри", group: "landscape"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Корінні береги Дніпра", group: "landscape"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Долина Дніпра", group: "landscape"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Долини малих річок", group: "landscape"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "watershed"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "ravine"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "shore"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "valley"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "river-valley"},
	]
	var activeFilter = "history-nadpor";
	var articlesPerPage = 6;
	var activePage = 1;
	var sidebar = document.getElementsByClassName("sidebar")[0];

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

  /** filterActiveArticles - 
   */
	function filterActiveArticles(filter, articles, activePage) {
		var filterArticles = articles.filter(function(item) {
			return item.group == filter;
		});
		setArticleContent(filterArticles, articlesPerPage, activePage);
	}

	function setActivePaginator(page) {
		document.querySelector(".pagination-page.active").classList.remove("active");
		document.querySelector("[data-page='"+page+"']").classList.add("active");
	}

	function bindPaginationClick() {
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
});
