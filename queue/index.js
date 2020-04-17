class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}


//最小优先队列
class PriorityQueue extends Queue {
    constructor(props) {
        super(props)
    }

    enqueue(item, priority) {
        const queueItem = {
            item,
            priority
        }

        if (this.isEmpty()) {
            this.items.push(queueItem)
            return
        }

        let added = false
        for(let i = 0; i < this.items.length; i++) {
            if (queueItem.priority < this.items[i]['priority']) {
                this.items.splice(i, 0, queueItem)
                added = true
                break
            }
        }

        if (!added) {
            this.items.push(queueItem)
        }
    }
}
