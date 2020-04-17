//散列表
function HashTable() {
    var table = []

    //loselose散列函数
    var loseLoseHashCode = function(key) {
        var hash = 0
        for (var i=0; i<key.length; i++) {
            hash += key.charCodeAt(i)
        }

        //为了取得较小的数值，取hash值除以任意数的余数
        return hash % 37
    }

    //djb2散列函数
    /* var djb2HashCode = function(key) {
        var hash = 5381
        for (var i=0; i<key.length; i++) {
            hash = hash*33 + key.charCodeAt(i)
        }
        return hash % 1013
    } */

    this.put = function(key, value) {
        var position = loseLoseHashCode(key)
        table[position] = value
    }

    this.get = function(key) {
        return table[loseLoseHashCode(key)]
    }

    this.remove = function(key) {
        table[loseLoseHashCode(key)] = undefined
    }

    this.print = function() {
        for (var i=0; i<table.length; i++) {
            if (table[i] !== undefined) {
                console.log(`${i}: ${table[i]}`)
            }
        }
    }
}


//处理散列表的冲突（hash值冲突，后面的元素会覆盖前面的元素）
//离散连接法：为散列表的每个位置创建一个链表并将元素存储在里面
function HashTable() {
    var table = []
    var loseLoseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }

        //为了取得较小的数值，取hash值除以任意数的余数
        return hash % 37
    }

    var ValuePair = function (key, value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return `[${this.key}-${this.value}]`
        }
    }

    this.put = function (key, value) {
        var position = loseLoseHashCode(key)
        if (table[position] == undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }

    this.get = function (key) {
        var position = loseLoseHashCode(key)
        if (table[position] !== undefined) {
            var current = table[position].getHead()
            while(current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            if (current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }

    this.remove = function (key) {
        var position = loseLoseHashCode(key)
        if (table[position] === undefined) {
            return false
        }

        var current = table[position].getHead()
        while(current.next) {
            if (current.element.key === key) {
                table[position].remove(current.element)
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
            current = current.next
        }

        if (current.element.key === key) {
            table[position].remove(current.element)
            if (table[position].isEmpty()) {
                table[position] = undefined
            }
            return true
        }
    }
}


function LinkedList() {
    var Node = function (element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function (element) {
        var node = new Node(element)
        var current

        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        length++
    }

    this.insert = function (position, element) {
        if (position < 0 || position > length) {
            return false
        }

        var node = new Node(element)
        var current = head
        var previous
        var index = 0

        if (position === 0) {
            node.next = current
            head = node
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }

        length++
        return true
    }

    this.removeAt = function (position) {
        if (position < 0 || position >= length) {
            return null
        }

        var current = head
        var previous
        var index = 0

        if (position === 0) {
            head = current.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }

        length--
        return current.element
    }

    this.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function (element) {
        var current = head
        var index = 0

        while (current) {
            if (element === current.element) {
                return index
            }

            index++
            current = current.next
        }

        return -1
    }

    this.isEmpty = function () {
        return length === 0
    }

    this.size = function () {
        return length
    }

    this.getHead = function () {
        return head
    }

    this.toString = function () {
        var current = head
        var string = ''

        while (current) {
            string += ',' + current.element
            current = current.next
        }

        return string.slice(1)
    }
}