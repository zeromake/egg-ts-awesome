import { MigrationInterface, QueryRunner } from "typeorm";

export class user1558011455832 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            "ALTER TABLE `users` ADD `email` varchar(255) NOT NULL DEFAULT ''",
        );
        await queryRunner.query(
            "ALTER TABLE `users` ADD `phone` varchar(255) NOT NULL DEFAULT ''",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `phone`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `email`");
    }
}
