class inventory{
	constructor(){
		this.slotsQuantity = 20;
		this.itemList = [];
	}

	getSlotsQuantity(){
		return this.slots;
	}

	getItemList(){
		return this.itemList;
	}

	setSlotsQuantity(slotsQuantity){
		this.slotsQuantity = slotsQuantity;
	}

	addItem(item){
		this.itemList.push(item);
	}

	deleteItem(item){
		for(var i = 0; i < itemList.length(); i++){
			if(this.itemList[i].name == item.name)
				delete this.itemList[i];
		}
	}
}