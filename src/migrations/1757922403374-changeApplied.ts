import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeApplied1757922403374 implements MigrationInterface {
    name = 'ChangeApplied1757922403374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "createdat"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_a001483d5ba65dad16557cd6ddb"`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "authorId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_a001483d5ba65dad16557cd6ddb" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_a001483d5ba65dad16557cd6ddb"`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "authorId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_a001483d5ba65dad16557cd6ddb" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD "createdat" TIMESTAMP NOT NULL`);
    }

}
