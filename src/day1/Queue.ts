type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item};
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) { 
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // Free -- not required
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        console.log({head: this.head});
        return this.head?.value;
    }
}

/* my custom solution:

export default class Queue<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(item: T): void {
        const newNode = new Node(item, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        if (!this.tail) {
            throw Error("tail is empty");
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
    }

    deque(): T | undefined {
        if (!this.head) { return undefined }

        const poppedNode = this.head;
        this.head = this.head.next;

        poppedNode.next = null;
        this.length -= 1;
        return poppedNode.item;
    }

    peek(): T | undefined {
        return this.head?.item ?? undefined;
    }
}

class Node<T> {
    public item: T;
    public next: Node<T> | null;

    constructor(item: T, next: Node<T> | null) {
        this.item = item;
        this.next = next;
    }
}
*/
