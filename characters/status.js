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

	function maxLife(maxLife){
		$(".life .max").text("/ " + maxLife);
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
		setLife(getLife() - manaLost);
	}

	function maxMana(maxMana){
		$(".mana .max").text("/ " + maxMana);
	}