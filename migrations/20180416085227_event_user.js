exports.up = function(knex, Promise) {
  return knex.schema.createTable('events_users', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.integer('events_id').notNullable().references('events.id').onDelete('CASCADE');
    table.integer('users_id').notNullable().references('users.id').onDelete('CASCADE');
    //table.timestamps(true, true)
    // OR
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events_users')
}
