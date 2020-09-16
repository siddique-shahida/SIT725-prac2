module.exports.ll = function(){
class ListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);
LinkedList.prototype.print = function()
{
    var curr=this.head;
    console.log(curr)
    var str="";
    while(curr){
        str+="data: "+curr.data+"\n";
        curr=curr.next;
        }
    console.log(str);
    return str;
}

var result = list.print();
return result;

}