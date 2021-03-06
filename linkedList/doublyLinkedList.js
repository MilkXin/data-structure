//双向链表
function DoublyLinkedList() {
    var Node = function(element) {
        this.element = element
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null //最后一项

    this.insert = function(position, element) {
        if (position < 0 || position > length) {
            return false
        }

        var node = new Node(element)
        var current = head
        var previous
        var index = 0

        if (position === 0) {
            if (!head) {
                head = node
                tail = node
            } else {
                node.next = current
                current.prev = node
                head = node
            }
        } else if (position === length) {
            current = tail
            current.next = node
            node.prev = current
            tail = node
        } else {
            while(index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
            current.prev = node
            node.prev = previous
        }

        length++
        return true
    }

    this.removeAt = function(position) {
        if (position < 0 || position >= length) {
            return null
        }

        var current = head
        var previous
        var index = 0

        if (position === 0) {
            head = current.next
            if (length === 1) {
                tail = null
            } else {
                head.prev = null
            }
        } else if (position === length - 1) {
            current = tail
            tail = current.prev
            tail.next = null
        } else {
            while(index++ < position) {
                previous = current
                current = current.next
                previous.next = current.next
                current.next.prev = previous
            }
        }

        length--
        return current.element
    }
}