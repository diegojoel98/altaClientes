export class Client {
    constructor(
        public id: number = 0,
        public name: string,
        public group: number
    ) { }
}

export class Group {
    constructor(
        public group: number,
        public name: string
    ) { }
}