/*******************************
Singly Linked List
*******************************/

function Node(){
	this.content = null; 
	this.next = null; //Null by default, can be changed later
}

//Create a Singly Linked list with a given number of nodes
function createLinkedList(numberOfNodes){
	var head = new Node();
	var currNode = head;
	for (var i = 1; i < numberOfNodes; i++){
		var nextNode = new Node();
		currNode.next = nextNode;
		currNode = nextNode;
	}
}
