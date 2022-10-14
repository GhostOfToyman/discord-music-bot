export default {
    name: 'musicBot',
    title: 'MusicBot',
    type: 'document',
    fields: [
        {
            name: 'currentMusic',
            title: 'CurrentMusic',
            type: 'string'
        },
        {
            name: 'queue',
            title: 'Queue',
            type: 'array'
        },
        {
            name: 'loop',
            title: 'Loop',
            type: 'boolean'
        },
        {
            name: 'loopQueue',
            title: 'LoopQueue',
            type: 'boolean'
        },
        {
            name: 'joined',
            title: 'Joined',
            type: 'boolean'
        },
        {
            name: 'currentVc',
            title: 'CurrentVC',
            type: 'string',
        }   
    ]
}
