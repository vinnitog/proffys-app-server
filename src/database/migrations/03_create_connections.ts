import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table =>{
        table.increments('id').primary();

        //criando relecionamento com a tabela users atraves do user id para saber o professor que teve o contato estabelecido
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}