chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Injected custom css");
			// ----------------------------------------------------------
		}
	}, 100);
	async function loadLogo() {
		const logo = document.querySelector(".logo").children[0];
		// console.log("Search found: ", logo);
		if (logo) {
			logo.src =
				"https://www.itse.gob.ar/wp-content/uploads/2021/04/logo-itse-nuevo-e1619458244687.png";
		} else {
			setTimeout(loadLogo, 10);
		}
	}
	loadLogo();
});
