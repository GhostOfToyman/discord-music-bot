export default {
    name: 'user',
    title: 'User',
    userId: 'string',
    discordTag: 'string',
    musicBot: 'document',
    fields: [
        {
            name: "musicBot",
            title: "MusicBot",
            to: [{ type: 'musicBot' }]
        }
    ],
    specialpriv: 'document',
    fields: [
        {
            name: 'specialPriv',
            title: 'SpecialPriv',
            to: [{ type: 'specialPriv' }]
        }
    ]
}