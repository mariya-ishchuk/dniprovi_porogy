document.addEventListener("DOMContentLoaded", function(event) { 
	var articles = [
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/geology.png", title: "Геологічна Історія", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/tectonic.jpg", title: "Тектоніка", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/minerals.jpg", title: "Мінерали", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/stones-on-shore.jpg", title: "Геологічні пам’ятки", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/rapid.jpg", title: "Пороги Дніпра", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism-history"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism-history"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism-history"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/kromleh.png", title: "Кромлех у селі Микільське-на-Дніпрі", group: "microorganism", href:"kromleh.html"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/granitni-skeli.png", title: "Гранітні скелі біля с. Волоське", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/strilcha.png", title: "Стрільча скеля", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/zvonetski.png", title: "Звонецькі скелі", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/strilcha-balka.png", title: "Скелі на лівому березі Дніпра біля Стрільчої балки", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/sarmatsky-yarus.png", title: "Опорний розріз сарматського ярусу біля с. Суха Калина", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},

		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Запорозьке водосховище", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Затоки", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Ставки", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Річки", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Струмки", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Джерела", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "microorganism"},
		{text: "Флора Дніпрових Порогів (мохи, хвощі, папороті, хвойні та квіткові рослини)", src: "images/plants.jpg", title: "Рослини", group: "microorganism-fauna"},
		{text: "Дивовижний світ фауни Дніпрових Порогів – від молюсків і комах до плазунів, птахів і звірів", src: "images/animals.jpg", title: "Тварини", group: "flora-fauna"},
		{text: "Таємничий і різноманітний світ грибів Порожистого Дніпра", src: "images/mashrooms.jpg", title: "Гриби", group: "flora-fauna"},
		{text: "Найекстремальніші до природних умов, але вразливі до антропогенних змін організми", src: "images/lichens.jpg", title: "Лишайники", group: "flora-fauna"},
		{text: "Маловивчений на Дніпрових Порогах світ водоростей", src: "images/alga.jpg", title: "Водорості", group: "flora-fauna"},
		{text: "Мікроскопічні організми та їх роль в житті екосистем Порожистого Дніпра", src: "images/microorganism.jpg", title: "Мікроорганізми", group: "flora-fauna"},
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
	];

	var activeFilter = "legacy";
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
			return index <= visibleQuantity*page && index > visibleQuantity*(page-1);
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
