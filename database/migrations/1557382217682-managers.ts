import { MigrationInterface, QueryRunner } from "typeorm";

export class managers1557382217682 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            "CREATE TABLE `managers` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `last_ip` varchar(40) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `managers`");
    }
}
