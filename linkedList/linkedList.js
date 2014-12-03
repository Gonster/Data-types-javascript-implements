var Node = function(element){

	this.element = element;

	this.next = null;

	this.previous = null;

}



var LinkedList = function(element){

	this.head = new Node(element);

	this.head.next = this.head;

	this.head.previous = this.head;

}



LinkedList.prototype.find = function(element){

	var currentNode = this.head;

	while(currentNode.element !== element){

		if(currentNode.next !== this.head){

			currentNode = currentNode.next;

		}

		else{

			return null;

		}

	}

	return currentNode;

}



LinkedList.prototype.insertAfter = function(positionElement, newElement){

	var baseNode = this.find(positionElement);

	if(baseNode){

		var newNode = new Node(newElement);

		newNode.previous = baseNode;

		newNode.next = baseNode.next;

		baseNode.next.previous = newNode;
		baseNode.next = newNode;
	}

}



LinkedList.prototype.insertBefore = function(positionElement, newElement){

	var baseNode = this.find(positionElement);

	if(baseNode){

		var newNode = new Node(newElement);

		newNode.previous = baseNode.previous;

		newNode.next = baseNode;

		baseNode.previous.next = newNode;
		baseNode.previous = newNode;
	}

}



LinkedList.prototype.remove = function(element){

	var currentNode = this.find(element);
	if(currentNode === this.head) this.head = currentNode.next;
	if(currentNode) {
		currentNode.previous.next = currentNode.next;
		currentNode.next.previous = currentNode.previous;
	}
}



LinkedList.prototype.toString = function(){

	var currentNode = this.head;
	var resultString = '';
	do{

		resultString+=currentNode.element+'->';

		var currentNode = currentNode.next;

	}while(currentNode !== this.head);
	document.write(resultString);
}
