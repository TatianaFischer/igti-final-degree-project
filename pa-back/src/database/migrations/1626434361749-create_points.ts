import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPoints1626434361749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "points",
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          
          },
            {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          
          },
          {
            name: 'about',
            type: 'text',
                      
          },
          {
            name: 'instructions',
            type: 'text',
                      
          },
            {
            name: 'wastes_types',
            type: 'text',
                      
          },
           {
            name: 'others_actions',
            type: 'text',                      
          },
           {
            name: 'opening_hours',
            type: 'varchar',  
                              
          },
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropTable('points')
    }

}
