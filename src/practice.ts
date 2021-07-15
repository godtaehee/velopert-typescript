class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();

for(let i = 0; i < 5; i++) {
  queue.enqueue(i);
}

for(let i = 0; i < 5; i++) {
  console.log(queue.dequeue());
}
