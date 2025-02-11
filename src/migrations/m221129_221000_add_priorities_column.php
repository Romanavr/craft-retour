<?php

namespace nystudio107\retour\migrations;

use Craft;
use craft\db\Migration;

/**
 * m221129_221000_add_priorities_column migration.
 */
class m221129_221000_add_priorities_column extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Add in the siteId columns
        if (!$this->db->columnExists('{{%retour_static_redirects}}', 'priority')) {
            $this->addColumn(
                '{{%retour_static_redirects}}',
                'priority',
                $this->integer()->null()->after('redirectHttpCode')->defaultValue(5)
            );
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m221129_221000_add_priorities_column cannot be reverted.\n";
        return false;
    }
}
