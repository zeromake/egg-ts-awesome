import { MigrationInterface, QueryRunner } from "typeorm";

export class post1556842331122 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            "CREATE TABLE `content` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `type` varchar(255) NOT NULL, `content` text NOT NULL, `resource_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
        );
        await queryRunner.query(
            "CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `title` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `contentId` int NULL, UNIQUE INDEX `REL_32a9d10422dfdbdf1817b27e67` (`contentId`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
        );
        await queryRunner.query(
            "ALTER TABLE `post` ADD CONSTRAINT `FK_32a9d10422dfdbdf1817b27e677` FOREIGN KEY (`contentId`) REFERENCES `content`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            "ALTER TABLE `post` DROP FOREIGN KEY `FK_32a9d10422dfdbdf1817b27e677`",
        );
        await queryRunner.query(
            "DROP INDEX `REL_32a9d10422dfdbdf1817b27e67` ON `post`",
        );
        await queryRunner.query("DROP TABLE `post`");
        await queryRunner.query("DROP TABLE `content`");
    }
}
