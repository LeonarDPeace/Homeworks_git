class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue (){
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek(){
        return this.items.length > 0 ? this.items[0] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size(){
        this.items.length;
    }

    print() {
        this.items.forEach(item => {
            console.log(item);
        });
    }
}

export default Queue;