document.addEventListener("DOMContentLoaded", function(event) { 
	var articles = [
		{text: "Яворницький Д.І.", src: "images/narys.png", title: "Дніпрові Пороги: Географічно-історичний нарис. (перевидання 1989 року)", group: "books", href:"", link:"Переглянути"},
		{text: "Яворницький Д.І.", src: "images/zapysky.png", title: "Путешественные записки Василия Зуева от С.Петербурга до Херсона в 1871 и 1782 году. (Оригінальне видання 1787-го року)", group: "books", link:"Переглянути"},
		{text: "Манюк В.В.", src: "images/park-book.png", title: "Регіональний ландшафтний парк «Придніпровський». Серія: Охороняймо скарби природи Степового Подніпров’я. Брошура, 2010 рік", group: "books", link:"Переглянути"},

		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "antient"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "middleage"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "kozaky"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "impery"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "twenty"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "nowadays"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/map-placeholder.png", title: "Заголовок", group: "villages-history"},

		{text: "", src: "images/kromleh.png", title: "План порожистої частини Дніпра з позначенням розташування проектованих гідротехнічних споруд (за дослідженнями 1894-1895 та 1906-1907 рр.)", group: "maps", link:"Переглянути"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/granitni-skeli.png", title: "Гранітні скелі біля с. Волоське", group: "maps", link:"Переглянути"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/strilcha.png", title: "Стрільча скеля", group: "maps", link:"Переглянути"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/zvonetski.png", title: "Звонецькі скелі", group: "maps", link:"Переглянути"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/strilcha-balka.png", title: "Скелі на лівому березі Дніпра біля Стрільчої балки", group: "maps", link:"Переглянути"},
		{text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut", src: "images/sarmatsky-yarus.png", title: "Опорний розріз сарматського ярусу біля с. Суха Калина", group: "maps", link:"Переглянути"},

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
	var artilesPerPage = 6;
	var sidebar = document.getElementsByClassName("sidebar")[0];

	sidebar.onclick = function(event) {
		var target = event.target,
			activeAccordion = document.querySelector(".accordion.active"),
			activeAccordionItem = document.querySelector(".accordion-item.active");

		if(target.classList.contains("accordion") || target.classList.contains("accordion-item")) {
			activeAccordion && activeAccordion != target && target.parentElement.previousElementSibling != activeAccordion
				&& activeAccordion.classList.remove("active");
			activeAccordionItem && activeAccordionItem.classList.remove("active");
			target.classList.toggle("active");
			target.dataset.filter && filterActiveArticles(target.dataset.filter, articles);
		}
	}

  /** filterActiveArticles - 
   */
	function filterActiveArticles(filter, articles) {
		var filterArticles = articles.filter(function(item) {
			return item.group == filter;
		});
		setArticleContent(filterArticles, artilesPerPage, 1);
	}

	function bindPaginationClick() {
		// document.getElementsByClassName("pagination")[0].onclick = function(event) {
		// 	event.target.classList.contains("pagination-page") && setArticleContent(articles, artilesPerPage, event.target.dataset.page);
		// }
	}

	/**
	 * @param {[type]}
	 * @param {[type]}
	 * @param {[type]}
	 */
	function setArticleContent(articles, visibleQuantity, page) {
		var articlesInPage = articles.filter(function(item, index) {
			return index+1 < visibleQuantity*page && index+1 > visibleQuantity*(page-1);
		});

		var arr = articlesInPage.map(function(item, index) {
			return ["<div class='article'>",
								"<div class='article-img'>",
									"<img src='"+item.src+"' alt='"+item.title+"'>",
								"</div>",
								"<div class='article-text'>",
									"<p>"+item.title+"</p>",
									"<p>"+item.text+"</p>",
									"<a href='"+item.href+"' title=''>",
										"<span>"+item.link+"</span>",
									"</a>",
								"</div>",
						"</div>"].join("")
		});
		document.getElementsByClassName("articles")[0].innerHTML = arr.join("");
		if (arr.length > artilesPerPage) {
			document.getElementsByClassName("pagination")[0].classList.add("visible");
			bindPaginationClick();
		}
	}

	filterActiveArticles(document.getElementsByClassName("accordion active")[0].dataset.filter, articles);
});
