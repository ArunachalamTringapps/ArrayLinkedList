class Node {
    data;
    nextNode;
    constructor(val)
    {
        this.data=val;
    }
} 

class Queue{
    rootNode = null;
    count = 0;
    addStack(val)
    {
        if(this.rootNode==null)
        {
            this.rootNode= new node(val)
            this.count++;
        }
        else{
            let temp=this.rootNode
            while(temp.nextNode != null)
            {
                temp=temp.nextNode;
                this.count++;
            }
            temp.nextNode = new node(val);
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
        let temp = this.rootNode;
        this.rootNode=temp.nextNode;
    }
    
}


let list = new Queue()
list.addStack(1);
list.addStack(2);
list.addStack(3);
list.remove();
list.printelements();