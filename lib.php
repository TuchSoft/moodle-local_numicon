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

/**
 * Extend course navigations to add the plugin's JS and CSS files in course conext
 * @param $navigation
 * @param $course
 * @param $context
 * @throws \core\exception\coding_exception
 * @throws dml_exception
 */
function local_numicon_extend_navigation_course($navigation, $course, $context) {
    global $PAGE, $USER;
    if ($USER->editing) {
        return;
    }
    $config = get_config('local_numicon');

    $config = [
        $config->regex,
        $config->breadcrumb,
        $config->section,
        $config->activity];

    $PAGE->requires->js_call_amd('local_numicon/index', 'init', $config);
    $PAGE->requires->css('/local/numicon/style.css');

}
