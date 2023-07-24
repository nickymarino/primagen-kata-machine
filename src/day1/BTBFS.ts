function find(curr: BinaryNode<number> | null | undefined, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (find(curr.left, needle)) {
        return true;
    }

    return find(curr.right, needle);
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    return find(head, needle);
}
