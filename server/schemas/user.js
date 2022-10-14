export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userId',
            title: 'UserID',
            type: 'number',
        },
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'discordTag',
            title: 'DiscordTag',
            type: 'string',
        },
        // {
        //     name: 'musicBot',
        //     title: "MusicBot",
        //     type: 'reference',
        //     to: [{ type: 'musicBot' }],
        // }
    ]
}