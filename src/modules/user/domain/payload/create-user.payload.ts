export class CreateUserPayload {
    constructor(
        readonly zealyId: string,
        readonly name: string,
        readonly address: string,
        readonly discord: string,
        readonly twitter: string,
        readonly discordId: string,
        readonly avt?: string,
    ) {}
}
