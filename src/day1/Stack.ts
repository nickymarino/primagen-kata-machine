type Node<T> = {
    value: T,
    prev?: Node<T>
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }


    push(item: T): void {
        const newNode = {value: item} as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.prev = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        this.head = head.prev;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

/* my custom solution:

type Node<T> = {
    value: T,
    next?: Node<T>
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }


    push(item: T): void {
        const newNode = {value: item} as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const popped = this.head;
        this.head = this.head.next;
        this.length--;
        return popped.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
*/