class Node {
    data;
    nextNode;
    constructor(val)
    {
        this.data=val;
    }
} 

class Stack{
    rootNode = null;
    count = 0;
    addStack(val)
    {
        if(this.rootNode==null)
        {
            this.rootNode= new Node(val)
            this.count++;
        }
        else{
            let temp=this.rootNode
            while(temp.nextNode != null)
            {
                temp=temp.nextNode;
                this.count++;
            }
            temp.nextNode = new Node(val);
        }

    }

    printelements()
    {
        let temp = this.rootNode;
            if(temp == null)
            {
                console.log("Is empty!")
            }
            else
            {
                while(temp != null )
                {
                    console.log(temp.data)
                    temp = temp.nextNode;
                }
            }
    }

    remove()
    {
        let i=1
        let n1= this.rootNode
        while(i<this.count-1)
        {
           n1=n1.nextNode;
            i++;
        }
        n1.nextNode=n1.nextNode.nextNode
    }
    
}


let list = new Stack()
list.addStack(1);
list.addStack(2);
list.addStack(3);
list.remove();
list.printelements();