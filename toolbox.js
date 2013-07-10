/*******************************
Singly Linked List
*******************************/

function Node(){
	this.content = null; 
	this.next = null; //Null by default, can be changed later
}


/*******************************
Doubly Linked List
*******************************/

function doubleNode(){
	this.content = null;
	this.next = null; //Next Pointer
	this.prev = null; //Previous Pointer
}


//Creates a singly(default) or doubly linked list. linkedlisttpye = Double, for doubly linked list
function createLinkedList(numberOfNodes, linkedListType){
	if (linkedListType.toString() == "Double"){
		var head = new doubleNode();
	}else{
		var head = new Node();
	}
	var currNode = head;
	for (var i = 1; i < numberOfNodes; i++){
		if (linkedListType.toString() == "Double"){
			var nextNode = new doubleNode();
			currNode.next = nextNode;
			nextNode.prev = currNode;
			currNode = nextNode;
		}else{
			var nextNode = new Node();
			currNode.next = nextNode;
			currNode = nextNode;
		}
	}
}

function stack(){
	var stackArray = new Array();

	//Figure out how prototypes and class methods work in JS
}