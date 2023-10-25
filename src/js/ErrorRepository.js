export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [200, 'OK'], 
        ]);
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return 'Unknown error';
    }
}
