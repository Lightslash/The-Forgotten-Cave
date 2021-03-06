$( function() {
	var buttons = $(".section button");
	var inputs = $(".section input");
	var active = $("#intro");
	var nextSection = "#intro";
	var life = $("#status .life .value");
	var mana = $("#status .mana .value");
	var maxLife = 1000;
	var maxMana = 100;
	var keyAcquired = false;
	
	startGame();

	function firstSection(){
		$(".section input+button#goNamer").click(function(){
			var input = $(".section input");
			if(input.val() == false){
				$('#fiche #personnage .name h2').text("John Doe");
			}
			else
				$('#fiche #personnage .name h2').text($(".section input").val());
			$("#fiche").toggle(500);
		});
	}

	function loadEvents(){
		buttons = $(".section button");
		buttons.click( function() {
			var addID = "#";
			nextSection = addID.concat($(this).attr('go'));
			var lifeLost = $(this).attr('lifeLost');
			var loadSectionFromFile = $(this).attr('nextFile');
			var getKey = $(this).attr('keyacquired');
			var getAction = $(this).attr('action');
			// For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if(typeof getKey !== typeof undefined && getKey !== false){
				keyAcquired = true;
				if($("#key").attr('style') == "display: none;")
					$("#key").toggle(500);
				$(".only-with-key").show();
				$(".only-without-key").toggle();
			}
			if (typeof loadSectionFromFile !== typeof undefined && loadSectionFromFile !== false) {
				loadNextPart(loadSectionFromFile, lifeLost);
			}
			else if(typeof getAction !== typeof undefined)
				endGame();
			else{
				active = $(nextSection);
				gotoSection(lifeLost);
			}
		} );
	}
	
	function loadNextPart(loadSectionFromFile,lifeLost){
		$("#replace").load(loadSectionFromFile, function(){
			$(".only-with-key").hide();
			active = $(nextSection);
			gotoSection(lifeLost);
			buttons.unbind("click");
			loadEvents();
		});
	}
	
	function gotoSection(lifeLost) {
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
		alert("Vous avez perdu " + lifeLost + " PVs.");
		setLife(getLife() - lifeLost);
		checkLife();
	}

	function checkLife(){
		if(getLife() <= 0)
			endGame();
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
		//Fonction qui ajoute un event listener sur le premier input
		firstSection();
		//Fonction qui démarre le jeu au chargement de la page
		loadEvents();
		$("#fiche").hide();
		$("#key").hide();
		$(".section").hide();
		active.show();
		setLife(maxLife);
		updateLife();
		setMana(maxMana);
		updateMana();
	}
	
	function endGame() {
		//...
		if(getLife() <= 0)
			alert("Vous êtes mort");
		else
			alert("Jeu terminé");
		buttons.unbind("click");
		active=$("#intro");
		startGame();
	}
	
	//konami code
	var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
	n = 0;
	$(document).keydown(function (e) {

	    if (e.keyCode === k[n++]) {
	        if (n === k.length) {
	            window.location.replace("http://thelastgambit.comeleleu.fr/");
	            n = 0;
	        }
	    }
	    else {
	        n = 0;
	    }
	});
	
} );