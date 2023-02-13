class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}

class LinkedList{
        rootNode = null;
        count = 0;
        addElement(value){
                if(this.rootNode == null){
                    this.rootNode= new Node(value)
                    this.count++;
                }else{
                    var temp = this.rootNode;
                    while(temp.nextNode != null){
                        temp = temp.nextNode;
                    }
                    temp.nextNode = new Node(value);
                    this.count++;
                }
            }
        n1;
        n2;
        addElements(value, index){
            if(index<0 || index>=this.count){
                console.log("Invalid inputs")
            }
            else{
            this.n1=new Node(value);
            this.count++;
            if(index==0){
                this.n1.nextNode=this.rootNode;
                this.rootNode=this.n1
            }
            else{
                this.n2=this.rootNode;
                for(let i=0;this.n2!=null && i<index-1;i++){
                    this.n2=this.n2.nextNode;
                }
                this.n1.nextNode=this.n2.nextNode;
                this.n2.nextNode=this.n1;
            }
            }
            
        }

        removeElement(index){
            var temp=this.rootNode;
            if(index==0){
                this.rootNode=temp.nextNode;
            }
            else{
                for(let i=1;temp.nextNode!=null && i<index;i++){
                        temp=temp.nextNode;
                }
            temp.nextNode=temp.nextNode.nextNode;
            this.count--;
            }
        }
        
        printElements(){
            var temp = this.rootNode;
            if(temp == null){
                console.log("Is empty!")
            }else{
            while(temp != null ){
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
        }
}


var list = new LinkedList()
list.addElement(0);
list.addElement(1);
list.addElement(3);
list.addElements(2,2);
list.addElements(100,3);
list.removeElement(4);
list.printElements();