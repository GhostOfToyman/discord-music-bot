import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
// import musicBot from './musicBot'
// import administrator from './administrator'
// import specialPriv from './specialPriv'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user
    // , musicBot, administrator, specialPriv
  ]),
})
