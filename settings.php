<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Section number icon filter - A simple JS based filter to turn number into icon in section,course and activity title
 *
 * @package local_numicon
 * @copyright 2025 TuchSoft <https://tuchsoft.com>
 * @author Mattia Bonzi <mattia@tuchsoft.com>
 * @see https://tuchsoft.com/plugin/moodle/local_numicon <Documentations and tutorials>
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$settings = new admin_settingpage('local_numicon_settings', get_string('pluginname', 'local_numicon'));
$ADMIN->add('filtersettings', $settings);

if ($ADMIN->fulltree) {
    $settings->add(new admin_setting_heading('local_numicon/generalsettings',
        new lang_string('settings:generalheader', 'local_numicon'), ''));

    $settings->add(new admin_setting_configcheckbox('local_numicon/section',
        new lang_string('settings:section', 'local_numicon'),
        new lang_string('settings:section_desc', 'local_numicon'),
        true));

    $settings->add(new admin_setting_configcheckbox('local_numicon/activity',
        new lang_string('settings:activity', 'local_numicon'),
        new lang_string('settings:activity_desc', 'local_numicon'),
        false));

    $settings->add(new admin_setting_configselect('local_numicon/breadcrumb',
        new lang_string('settings:breadcrumb', 'local_numicon'),
        new lang_string('settings:breadcrumb_desc', 'local_numicon'),
        'hide', [
            'hide' => new lang_string('settings:breadcrumb:hide', 'local_numicon'),
            'show' => new lang_string('settings:breadcrumb:show', 'local_numicon'),
            'icon' => new lang_string('settings:breadcrumb:icon', 'local_numicon'),
        ]));



    $settings->add(new admin_setting_configtext('local_numicon/regex',
        new lang_string('settings:regex', 'local_numicon'),
        new lang_string('settings:regex_desc', 'local_numicon'),
        "^(\\d*?)\\.\\s*(.*)"));
}
