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
 * #package local_numicon
 * @copyright 2025 TuchSoft <https://tuchsoft.com>
 * @author Mattia Bonzi <mattia@tuchsoft.com>
 * @see https://tuchsoft.com/plugin/moodle/local_numicon <Documentations and tutorials>
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery'], function($) {
    return {
        init: function (regex, breadcrumb = 'hide', section = true, activity = false ) {
            const addNumIcon = function(classes) {
                const emojiRegex = /\p{Emoji}/u;
                const breadcrumbClass = '.breadcrumb-item > a, .breadcrumb-item > span';
                if (breadcrumb == 'icon') {
                    classes += ','+breadcrumbClass;
                }

                document.querySelectorAll(classes).forEach(el => {
                    const match = el.innerText.trim().match(regex);
                    if (match) {
                        let icon = (match.groups && match.groups.icon ? match.groups.icon : match[1]).trim();
                        let title = (match.groups && match.groups.title ? match.groups.title : match[2]).trim();
                        let iconclass = 'numicon-num';

                        if (emojiRegex.test(icon)) {
                            iconclass += 'numicon-emoji';
                        }

                        el.innerHTML = `<div class="text-center numicon-container">
                                            <div class="numicon-icon">
                                                <span class="${iconclass}">${icon}</span>
                                            </div>
                                        </div> 
                                        ${title}`;
                    }
                });

                //manage breadcrums
                if (breadcrumb == 'hide') {
                    document.querySelectorAll(breadcrumbClass).forEach(el => {
                        const match = el.innerText.trim().match(regex);
                        if (match) {
                            el.innerText = match[2].trim();
                        }
                    });
                }
            };

            let classes = [];


            if (section) {
                classes.push(
                    '.sectionname',
                    '.sectionheading',
                    '.sectionname > a',
                    '[data-for="section_title"].courseindex-link',
                    'body[id^="page-course-view-section"] .page-header-headings > h1');
            }

            if (activity) {
                classes.push(
                    '.instancename',
                    '.instancename > a',
                    '[data-for="cm_name"].courseindex-link',
                    'body[id^="page-mod"] .page-header-headings > h1');
            }

            classes = classes.join(',');
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