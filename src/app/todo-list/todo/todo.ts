export class Todo {
    public id: string;
    public name: string;
    public done: boolean;

    constructor (name: string) {
        this.name = name;
        this.done = false;
        this.id = this.getHash();
    }

    private getHash(): string {
        let hash: number = 0;
        let i: number = 0
        let len: number = this.name.length;

        let hashSrc: string = Date.now().toString();

        while ( i < len ) {
            hash  = ((hash << 5) - hash + hashSrc.charCodeAt(i++)) << 0;
        }

        hash = hash < 0 ? hash * -1 : hash;

        return hash.toString();
    }
}