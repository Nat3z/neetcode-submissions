class DynamicArray {
    arr: number[]
    size: number
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.arr = []
        this.size = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.getSize() == this.getCapacity()) 
            this.resize();
            
        this.arr.push(n);
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.arr.pop();
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.size *= 2;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.arr.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.size;
    }
}
