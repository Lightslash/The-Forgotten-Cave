class character {

	constructor(lifePoints, manaPoints, int, strength, agi, luck ){
		this.lifePoints = lifePoints;
		this.manaPoints = manaPoints;
		this.int = int;
		this.strength = strength;
		this.agi = agi;
		this.luck = luck;
	}

	getLifePoints(){
		return lifePoints;
	}

	getManaPoints(){
		return manaPoints;
	}

	getInt(){
		return int;
	}

	getStrength(){
		return strength;
	}

	getAgi(){
		return agi;
	}

	getLuck(){
		return luck;
	}

	setLifePoints(lifePoints){
		this.lifePoints = lifePoints;
	}

	setManaPoints(manaPoints){
		this.manaPoints = manaPoints;
	}

	setInt(int){
		this.int = int;
	}

	setStrength(strength){
		this.strength = strength;
	}

	setAgi(agi){
		this.agi = agi;
	}

	setLuck(luck){
		this.luck = luck;
	}
}