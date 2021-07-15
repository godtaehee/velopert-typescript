"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
for (var i = 0; i < 5; i++) {
    queue.enqueue(i);
}
for (var i = 0; i < 5; i++) {
    console.log(queue.dequeue());
}
