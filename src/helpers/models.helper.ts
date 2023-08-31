export class ListModelRes<T> {
    constructor(readonly rows: T[], readonly total: number) {}
}
