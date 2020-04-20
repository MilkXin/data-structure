function Dictionary() {
    var items = {}

    this.has = function(key) {
        return key in items
    }

    this.set = function(key, value) {
        items[key] = value
    }

    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }

        return false
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.values = function() {
        var values = []
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }

        return values
    }

    this.getItems = function() {
        return items
    }
}






//图
function Graph() {
    var vertices = [] //存储顶点
    var adjList = new Dictionary() //存储邻接表

    //向图中添加新的顶点
    this.addVertex = function(v) {
        vertices.push(v)
        adjList.set(v, [])
    }

    //添加顶点之间的边
    this.addEdge = function(v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function() {
        var s = ''
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->'
            var neighbors = adjList.get(vertices[i])
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n'
        }

        return s
    }
}

var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())