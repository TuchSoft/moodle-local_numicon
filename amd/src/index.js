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

                        if (isUnicodeEmoji(icon)) {
                            iconclass += ' numicon-emoji';
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

            const isUnicodeEmoji = function (char) {
                const codePoint = char.codePointAt(0);
                return (
                    (codePoint >= 0x1F600 && codePoint <= 0x1F64F) || // Emoticons
                    (codePoint >= 0x1F300 && codePoint <= 0x1F5FF) || // Miscellaneous Symbols and Pictographs
                    (codePoint >= 0x1F680 && codePoint <= 0x1F6FF) || // Transport and Map Symbols
                    (codePoint >= 0x1F700 && codePoint <= 0x1F77F) || // Alchemical Symbols
                    (codePoint >= 0x1F780 && codePoint <= 0x1F7FF) || // Geometric Shapes Extended
                    (codePoint >= 0x1F800 && codePoint <= 0x1F8FF) || // Supplemental Arrows-C
                    (codePoint >= 0x1F900 && codePoint <= 0x1F9FF) || // Supplemental Symbols and Pictographs
                    (codePoint >= 0x1FA00 && codePoint <= 0x1FA6F) || // Chess Symbols
                    (codePoint >= 0x1FA70 && codePoint <= 0x1FAFF) || // Symbols and Pictographs Extended-A
                    (codePoint >= 0x2600 && codePoint <= 0x26FF) ||   // Miscellaneous Symbols
                    (codePoint >= 0x2700 && codePoint <= 0x27BF) ||   // Dingbats
                    (codePoint >= 0x1F1E0 && codePoint <= 0x1F1FF) || // Regional Indicator Symbols (for flags)
                    (codePoint >= 0x1F200 && codePoint <= 0x1F2FF) || // Enclosed CJK Letters and Months
                    (codePoint >= 0x1F000 && codePoint <= 0x1F02F) || // Mahjong Tiles
                    (codePoint >= 0x1F030 && codePoint <= 0x1F09F) || // Domino Tiles
                    (codePoint >= 0x1F0A0 && codePoint <= 0x1F0FF) || // Playing Cards
                    (codePoint >= 0x1F9A0 && codePoint <= 0x1F9FF) || // More Supplemental Symbols and Pictographs
                    (codePoint >= 0x1FAD0 && codePoint <= 0x1FAD9) || // Skateboard
                    (codePoint >= 0x1FAE0 && codePoint <= 0x1FAFF) || // Symbols and Pictographs Extended-B
                    (codePoint >= 0x1FB00 && codePoint <= 0x1FBFF) || // Symbols for Legacy Computing
                    (codePoint >= 0x1FC00 && codePoint <= 0x1FC9F) || // Ornamental Dingbats
                    (codePoint >= 0x1FD00 && codePoint <= 0x1FDFF) || // Geometric Shapes Extended-A
                    (codePoint >= 0x1FE00 && codePoint <= 0x1FEFF) || // Supplemental Punctuation
                    (codePoint >= 0x1FF00 && codePoint <= 0x1FFFD) ||   // Symbols and Pictographs Extended-C
                    (codePoint >= 0x2B50 && codePoint <= 0x2B50)     // Black Medium Star
                    // ... and potentially more ranges
                );
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