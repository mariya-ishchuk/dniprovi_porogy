document.addEventListener("DOMContentLoaded", function(event) { 
	var articles = [
					// КНИГИ
		{text: "Яворницький Д.І.", src: "images/narys.png", title: "Дніпрові Пороги: Географічно-історичний нарис. (перевидання 1989 року)", group: "books", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gOEdFWVVKTFdXdXM/view", link:"Переглянути"},
		{text: "Яворницький Д.І.", src: "images/zapysky.png", title: "Путешественные записки Василия Зуева от С.Петербурга до Херсона в 1871 и 1782 году. (Оригінальне видання 1787-го року)", group: "books", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gVi1lQTBySU1CVGM/view", link:"Переглянути"},
		{text: "Манюк В.В.", src: "images/park-book.png", title: "Регіональний ландшафтний парк «Придніпровський». Серія: Охороняймо скарби природи Степового Подніпров’я. Брошура, 2010 рік", group: "books", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gYlA1RlR2N0FoQXM/view", link:"Переглянути"},
					// МАПИ
		{text: "", src: "images/1894-1907.jpg", title: "План порожистої частини Дніпра з позначенням розташування проектованих гідротехнічних споруд (за дослідженнями 1894-1895 та 1906-1907 рр.)", group: "maps", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gQmlod3JXY2ZWc3c/view?usp=sharing", link:"Переглянути"},
		{text: "", src: "images/1917-1924.jpg", title: "План порожистої частини р. Дніпра (за даними зйомок 1917-18-22-24 рр.) (масштаб 1:50 000)", group: "maps", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gX2RLaHFJellaRGs/view?usp=sharing", link:"Переглянути"},
		{text: "", src: "images/plan01.jpg", title: "Навігаційні карти Дніпра 1880-х рр. (укладені за зйомкою Дніпровської описової партії під керівництвом полковника Полікарпова). Порожиста ділянка від м. Катеринослав до м. Олександрівськ", group: "maps", href:"https://drive.google.com/drive/folders/0BxpMnEYvr-1gX2dHQXN2dlFnaTQ?usp=sharing", link:"Переглянути"},
		{text: "", src: "images/plan1.jpg", title: "Навігаційні карти Дніпра 1880-х рр. (укладені за зйомкою Дніпровської описової партії під керівництвом полковника Полікарпова). Ділянка від м. Олександрівськ до Лимана (Дніпрово-Бузького)", group: "maps", href:"https://drive.google.com/drive/folders/0BxpMnEYvr-1gZ3RhRk9rdTJlRVU?usp=sharing", link:"Переглянути"},
		{text: "", src: "images/vkraina_1613_2+.jpg", title: "Мапа течії Дніпра з порогами Миколая Радзівіла (1613 р., за атласом В.Блау 1647 року)", group: "maps", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gTFp2TmhUZG1ZLU0/view?usp=sharing", link:"Переглянути"},
		{text: "", src: "images/vsevolod-timonov1894.jpg", title: "План Ненаситецького порогу з позначенням проектованих споруд (шлюзів) (до проекту інженера Тимонова – приведення порожистої частини Дніпра у судноплавний стан), 1894 рік", group: "maps", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gY2NENXJpZXVfVWM/view?usp=sharing", link:"Переглянути"},
		{text: "", src: "images/rlp-dp.jpeg", title: "Мапа регіонального ландшафтного парку «Дніпрові Пороги» (чинна і проектована для розширення частини)", group: "maps", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gVmpZSnByb2pQanc/view?usp=sharing", link:"Переглянути"},
					// СТАТТІ
		{text: "", src: "images/map-placeholder.png", title: "Матеріали до орнітофауни порожистої частини Дніпра. Попов Б.М. // Збірник праць зоологічного музею. – № 20. – Видавництво Академії наук УРСР. – Київ, 1937. – С.41–64.", group: "articles", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gVi1lQTBySU1CVGM/view", link:"Переглянути"},
		{text: "", src: "images/map-placeholder.png", title: "Дніпрові Пороги. Манюк В.В. // Природна спадщина Січеславщини. – Вип.1. – 2003.", group: "articles", href:"https://drive.google.com/file/d/0BxpMnEYvr-1gcUxJWDhXZU1ubmc/view", link:"Переглянути"},
		{text: "", src: "images/map-placeholder.png", title: "Дніпрові Пороги як заповідне ядро національного та європейського значення. Манюк В. В. // Розвиток заповідної справи в Україні і формування Пан-європейської екологічної мережі. Матеріали міжнар. науково-практ. конф. (м. Рахів, 11-13 листопада 2008 року).– Рахів, 2008. – С. 266-270.", group: "articles", href:"https://goo.gl/hKYvMM", link:"Переглянути"},
		{text: "", src: "images/map-placeholder.png", title: "Зони охорони пам’ятки історії національного значення «Фортеця Кодак». Харлан О.В. // «Берестецька битва в історії України». Матеріали науково-практичної конференції, присвяченої 365-річчю Берестецької битви та 25-річчю незалежності України. – с. Пляшева, 2016. – С.163-170.", group: "articles", href:"https://goo.gl/wd1M7B", link:"Переглянути"},
		{text: "", src: "images/map-placeholder.png", title: "Ландшафтний парк «Дніпрові пороги» як осередок патріотичного виховання. Вікторія Лола // Дніпропетровська обласна педагогічна газета «Джерело». – №14–16, квітень 2017 року. – С.10.", group: "articles", href:"https://goo.gl/kEjdPE", link:"Переглянути"},
					// ДІТЯМ
		{text: "", src: "images/plakat.jpg", title: "Регіональні ландшафтні парки Степового Подніпров’я. «Придніпровський» і «Дніпровські ліси». Плакат А2 (40х60 см), 2011 рік", group: "for-kids", href:"http://dikun.at.ua/_ld/0/32_-s-.jpg", link:"Переглянути"},
		{text: "", src: "images/eskiz.jpg", title: "Над Кодацьким порогом (художня повість). Адріан Кащенко", group: "for-kids", href:"https://goo.gl/DNwE9I", link:"Переглянути"},
		{text: "", src: "images/yurko.jpg", title: "Як Юрко подорожував на Дніпрові пороги (художня повість). О. Стешенко", group: "for-kids", href:"https://goo.gl/RVw4AH", link:"Переглянути"},
	]
	var activeFilter = "books";
	var articlesPerPage = 4;
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
							"<a href='"+item.href+"' title='' target='_blank'>",
								"<div class='article-img'>",
									"<img src='"+item.src+"' alt='"+item.title+"'>",
								"</div>",
								"<div class='article-text'>",
									"<h4>"+item.title+"</h4>",
									"<p>"+item.text+"</p>",
									"<div>",
									 	"<span>"+item.link+"</span>",
									"</div>",
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
