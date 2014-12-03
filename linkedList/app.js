var linkedList = new LinkedList('person_0');

var totalNumber = 31;

for (var i = 1; i < totalNumber; i++) {

	linkedList.insertBefore(linkedList.head.element, 'person_'+i);

};

linkedList.toString();
document.write('<br><br>');

var interval = 2;
var counter = 1;


function kill(linkedList, interval){
	var currentNode = linkedList.head;
	do{
		if(counter%(interval+1) === 0){
			counter = 1;
			linkedList.remove(currentNode.element)
			totalNumber--;
		}
		else{
			counter++;
		}
		currentNode = currentNode.next;
	}while(currentNode !== linkedList.head && totalNumber>interval);
	linkedList.toString();
}

while(totalNumber>interval){
	kill(linkedList, interval);
	document.write('<br><br>');
}