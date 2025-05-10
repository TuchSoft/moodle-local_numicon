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
 * Course number icon filter - A simple JS based filter to turn number into icon in section,course and activity title
 *
 * #package local_numicon
 * @copyright 2025 TuchSoft <https://tuchsoft.com>
 * @author Mattia Bonzi <mattia@tuchsoft.com>
 * @see https://tuchsoft.com/plugin/moodle/local_numicon <Documentations and tutorials>
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery'], function($) {
    return {
        init: function (regex, section = true, activity = false, icon = 'fa-square') {

            const addNumIcon = function(classes) {
                document.querySelectorAll(classes).forEach(el => {
                    const match = el.textContent.trim().match(regex);
                    if (match) {
                        el.innerHTML = `<div class="text-center numicon-container">
                                            <i class="numicon-icon fa-solid ${icon}"></i>
                                            <span class="numicon-num">${match[1]}</span>
                                        </div> 
                                        <span class="ms-1 numicon-tilte">${match[2] ? match[2].trim() : ''}</span>`;
                    }
                });
            };

            let classes = [];
            if (section) {
                classes.push('.sectionname, .sectionheading, [data-for="section_title"].courseindex-link');
            }
            if (activity) {
                classes.push('.instancename, [data-for="cm_name"].courseindex-link');
            }
            classes = classes.join(', ');
            $(document).ready(() => {
                addNumIcon(classes);
                const observer = new MutationObserver(() => {
                    addNumIcon(classes);
                });
                observer.observe(document.querySelector('.courseindex'), { childList: true, subtree: true });
            });

        }
    };
});