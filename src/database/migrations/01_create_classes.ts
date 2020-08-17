import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //criando relecionamento com a tabela users atraves do user id para saber qual professor realiza determinada aula
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}