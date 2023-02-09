<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221117092501 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE gift ADD owner_user_id INT, ADD given_by_user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE gift ADD CONSTRAINT FK_A47C990D2B18554A FOREIGN KEY (owner_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE gift ADD CONSTRAINT FK_A47C990D80D2723 FOREIGN KEY (given_by_user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_A47C990D2B18554A ON gift (owner_user_id)');
        $this->addSql('CREATE INDEX IDX_A47C990D80D2723 ON gift (given_by_user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE gift DROP FOREIGN KEY FK_A47C990D2B18554A');
        $this->addSql('ALTER TABLE gift DROP FOREIGN KEY FK_A47C990D80D2723');
        $this->addSql('DROP INDEX IDX_A47C990D2B18554A ON gift');
        $this->addSql('DROP INDEX IDX_A47C990D80D2723 ON gift');
        $this->addSql('ALTER TABLE gift DROP owner_user_id, DROP given_by_user_id');
    }
}
