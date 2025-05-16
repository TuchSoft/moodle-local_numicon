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

$string['pluginname'] = 'Section number icon filter';
$string['privacy:metadata'] = 'This plugin does not store personal data, nor does it export personal data to an external location.';

$string['settings:activity'] = 'Enable on activity\'s title';
$string['settings:activity_desc'] = 'Enable the number to icon transformation on activity\'s title';
$string['settings:breadcrumb'] = 'What to do in breadcrums';
$string['settings:breadcrumb:hide'] = 'Hide the number';
$string['settings:breadcrumb:icon'] = 'Render the icon';
$string['settings:breadcrumb:show'] = 'Show the number as text';
$string['settings:breadcrumb_desc'] = 'How do you want to manage the breadcrums, usaly are too small to show the icon';
$string['settings:generalheader'] = 'General settings';
$string['settings:icon'] = 'Icon';
$string['settings:icon:circle'] = 'Circle';
$string['settings:icon:square'] = 'Square';
$string['settings:icon_desc'] = 'Background icon to use (square or circle)';
$string['settings:regex'] = 'Regex';
$string['settings:regex_desc'] = 'For advanced users only.<br> Regex to match the number: $1 = number, $2 = rest of the title';
$string['settings:section'] = 'Enable on section\'s title';
$string['settings:section_desc'] = 'Enable the number to icon transformation on section\'s title';
