$( function() {
	var buttons = $(".section button");
	var active = $("#intro");
	var life = $("#status .life .value");
	var mana = $("#status .mana .value");
	var maxLife = 1000;
	var maxMana = 100;
	
	startGame();

	function loadEvents(){
		buttons.click( function() {
			var nextSection = $(this).attr('go');
			var addID = "#";
			active = $(addID.concat(nextSection));
			var lifeLost = $(this).attr('lifeLost');
			var loadSectionFromFile = $(this).attr('nextfile');	

			// For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if (typeof loadSectionFromFile !== typeof undefined && loadSectionFromFile !== false) {
				loadNextPart(loadSectionFromFile);
			}
			gotoSection(active, lifeLost);
		} );
	}
	
	function loadNextPart(loadSectionFromFile){
		$("#replace").load(loadSectionFromFile);
		buttons.unbind("click");
		loadEvents();
	}
	
	function gotoSection(key, lifeLost) {
		//Va à a la section donnée par le bouton
		if (typeof lifeLost !== typeof undefined && lifeLost !== false) {
			loseLife(lifeLost);
		}
		$(".section").hide();
		active.show();
	}
	
	function getLife() {
		//Récupère la valeur de la vie
		return life.text();
	}	

	function setLife(v) {
		//Change la valeur de la vie
		life.text(v);
		updateLife();
	}
	
	function updateLife(){
		// Met à jour la barre de pv
		var progressBarre = $(".life progress");
		progressBarre.attr('value', (getLife() * 100)/maxLife);
	}

	function loseLife(lifeLost) {
		//Enlève "lifeLost" pdv
		setLife(getLife() - lifeLost);

	}

	function setMana(v) {
		//Change la valeur du mana
		mana.text(v);
		updateMana();
	}

	function getMana() {
		///Récupère la quantité de mana disponible
		return mana.text();
	}

	function updateMana(){
		//Met à jour la barre de mana
		var progressBarre = $(".mana progress");
		progressBarre.attr('value', (getMana() * 100)/maxMana);
	}

	function loseMana(manaLost) {
		//Enlève "manaLost" points de mana
		setMana(getMana() - manaLost);

	}

	function startGame() {
		//Fonction qui démarre le jeu au chargement de la page
		loadEvents();
		$(".section").hide();
		active.show();
		setLife(maxLife);
		updateLife();
		setMana(maxMana);
		updateMana();
	}
	
	function endGame() {
		//...
	}
	
} );