<!-- markdownlint-disable MD041 -->
<p align="center">
    <img width="400px" height=auto src="https://tuchsoft.com/assets/images/logo-dark.webp?" />
</p>

<p align="center">
    <a href="https://twitter.com/tuchsoft"><img src="https://badgen.net/badge/twitter/@tuchsoft/?icon&label" /></a>
    <a href="https://tuchsoft.com"><img src="https://badgen.net/badge/icon/tuchsoft.com/?icon=chrome&label" /></a>
<a href="https://github.com/tuchsoft/"><img src="https://badgen.net/static/GitHub/Tuchsoft/?icon=github&label" /></a>
    
    
</p>

# **Section number icon filter (local\_numicon) \- Moodle Plugin**
Transforms leading numbers in sections and activities titles into icons.

![Section number icon filter poster](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/tuchsoft_local_numicon_poster.png)


## **Description**
This plugin converts numbers at the start of section and activity titles into icons, providing a visual and distinct numbering for your course elements.

By defualt the number must be the very first element of the title and followed immediately by a period (e.g., "1."), to be automatically transformed into an icon when the page loads, but you can configure another format if you like, see the [Configuring the Regular Expression](#configuring-the-regular-expression)

* **Number to Icon Conversion:** Converts leading numbers (or anything you want) in section and activity titles into visual badge icon.
* **Configurable Scope:** Provides Moodle settings to enable or disable the functionality independently for section and activity names.


## **Installation**
1. Place the local\_numicon folder into the /local/ directory of your Moodle installation.
2. In your Moodle site, go to *Site administration* \> *Notifications*.
3. Complete the installation process.
4. Navigate to `Site administration` \> `Plugins` \> `Filters` \> `Section number icon filter` to configure the plugin settings.


## **Configuration**
* **Enable for Sections:** Toggles the display of Numicon icons for section titles. This feature is enabled by default.
* **Enable for Activities:** Toggles the display of Numicon icons for activity titles. **Important Note:** Activity titles are displayed in various areas within Moodle, not solely on the course page. The plugin's functionality is not guaranteed to work consistently across all these locations.
* **Breadcrumb Title Display:** This setting allows you to control how titles are displayed within the breadcrumbs (show the icon, show the non trasformed text, hide both). Please be aware that the plugin cannot differentiate between activity and section titles in the breadcrumbs. Therefore, if a title in the breadcrumbs matches the configured format, it will be transformed regardless of the "Enable for Activities" and "Enable for Sections" settings (unless both are disabled, in which case the plugin will not modify breadcrumb titles).
* **Advanced Number Selection (Regex):** For users with more technical expertise, this field allows you to define a custom Regular Expression (regex) to identify the specific patterns in titles that should be converted into Numicon icons (or other elements). By default, the plugin only recognizes whole numbers followed by a period (e.g., "1."). This advanced setting unlocks the ability to select more intricate patterns, as discussed in the "Working with Subsections" section.


### **Configuring the Regular Expression**

To determine which part of the title will be transformed into the icon, this plugin utilizes a special syntax called Regular Expressions (often shortened to "regex"). Regex is a powerful tool for matching patterns of characters within a string.

This capability allows for the creation of quite sophisticated patterns, extending the plugin's utility beyond its original purpose. For example, you could potentially display words, informational snippets, or other content as icons.

The regex **MUST** include two capture groups, which can optionally be named. The first capture group (or the one specifically named "icon") is responsible for identifying the "icon" element itself. The second capture group (or the one named "title") should capture the remaining portion of the title. This separation allows you to potentially remove any formatting or markup used for the numbering.

You can learn more about regular expressions and test your patterns using the online tool [Regexr.com](https://regexr.com/). Feel free to click on any of the regex examples on this page to experiment with them directly.


#### **Working with Subsections**
When you're using subsections, you'll typically want to have sub-numbering as well. To achieve this, you'll need to adjust the default search regular expression.

You can set the regex to "[`^#([\d\.]*)\s+(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%23%28%5B%5Cd%5C.%5D%2A%29%5Cs%2B%28.%2A%29%2Fgm&text=%231.2%20Section%20title%0A%231.2.3.4%20Section%20title)" to enable a numbering format like "#1.2" and "#1", allowing you to use a number after the dot.
See [Other useful regex](#other-useful-regex)


#### **Other useful regex**

* **Letters and numbers** if you want to use letters and numbers in the numbering system you can set the regex to something like "[`^#([\d\\.A-Z]*)\s+(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%23%28%5B%5Cd%5C%5C.A-Z%5D%2A%29%5Cs%2B%28.%2A%29%2Fgm&text=%23A.1.2%20Section%20title%0A%231.2.A.1%20Section%20title)" that include numbers, uppercase letters and dot, preceeded by a hash (#). 
* **The first token** if you want to exlude any leading character, and simlpy use the first token in the title as the icon, you can use "[`^(.*?)\s+(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%28.%2A%3F%29%5Cs%2B%28.%2A%29%2Fgm&text=WHATEVER%20Section%20title%0A%241%20Section%20title)" or combining with the above format without the hash, you can use "[`^([\d\\.A-Z]*)\s+(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%28%5B%5Cd%5C%5C.A-Z%5D%2A%29%5Cs%2B%28.%2A%29%2Fgm&text=A.1.2%20Section%20title%0A1.2.A.1%20Section%20title)"; 
* **Roman numbers** if you want to use roman numbers insted of decimals you can use something like "[`^([IXV]+)\.\s*(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%28%5BIXV%5D%2B%29%5C.%5Cs%2A%28.%2A%29%2Fgm&text=IX.%20Section%20title%0AXVVI.%20Section%20title)".
* **Difficulty scale** you can use the plugins also to show any sort of badge like a difficulty scale or other type of info, for example using a regex like this one "[`^((?:EASY)+|(?:NORMAL)+|(?:DIFFICULT)+)\s*(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%28%28%3F%3AEASY%29%2B%7C%28%3F%3ANORMAL%29%2B%7C%28%3F%3ADIFFICULT%29%2B%29%5Cs%2A%28.%2A%29%2Fgm&text=DIFFICULT%20Section%20title%0AEASY%20Section%20title)".
* **Capturing the last token** you can use the last token instead of the first one to diaply the icon using named capture groups, (keep in mind that the icon will always be place at the beginning regardles of wherte the token is extracted from the text) you can use something like this "[`(?<title>.*?)\s+(?<num>\d+)$`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%28%3F%3Ctitle%3E.%2A%3F%29%5Cs%2B%28%3F%3Cnum%3E%5Cd%2B%29%24%2Fgm&text=Section%201%0ASection%20418%0A)";
* **Default** the defualt regex is "[`^(\d*?)\.\s*(.*)`](https://regexr.com/?engine=javascript&tool=details&expression=%2F%5E%28%5Cd%2A%3F%29%5C.%5Cs%2A%28.%2A%29%2Fgm&text=1.%20Section%20title%0A10.%20Section%20title)"


#### **Styles**
This plugin employs basic Bootstrap styling to generate the badges, and it intelligently inherits text colors from the surrounding elements.

The badge's background color will automatically match the color of the title text. The number displayed within the icon will have its color inverted to ensure good contrast: it will appear black on light backgrounds and white on dark backgrounds.

For more advanced customization of the badge appearance, you can easily apply your own styles by targeting the following CSS classes at the site level:

* `.numicon-container`: This class controls the positioning of the badge.
* `.numicon-icon`: This class styles the actual circular badge element.
* `.numicon-num`: This class styles the number text displayed inside the badge.

By adding or modifying CSS rules for these classes in your site's custom CSS, you have full control over the visual presentation of the icons.


## **Usage**
Once you've configured the plugin, it will automatically convert any leading numbers found in section and activity titles (where the feature is enabled) into their corresponding icons.

To make this work, simply name your sections following the default format ("{number}. {title}") or the custom regex pattern you've configured in the settings.
Keep in mind that the plugin's effect isn't visible while you're in course editing mode. To see the Numicon icons, you'll need to disable the "Edit mode".


## **Important Notes**
* **Course context:** Functionality only works pages in course context and below.
* **Numbering activities** When numbering activities, consider that they are frequently displayed outside of the main course context (such as in dashboard blocks and reports), where this plugin is not active; also, a consecutive numbering system might be confusing for users encountering these activities in different contexts.


## Issues
Please submit bugs and feature requests as **[new GitHub issues](https://github.com/tuchsoft/moodle-local_numicon/issues/new)**. 
Provide a **meaningful description** with relevant information to help us understand and address the issue effectively.


## Screenshot
Screenshot of the plugin in action, with theme "Boost" and "Custom section/Topic" format.

* **Course view** ![Course view Screenshot](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/screenshots/tuchsoft_local_numicon_screenshot_course_view.png)


* **Section view** ![Section view Screenshot](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/screenshots/tuchsoft_local_numicon_screenshot_section_view.png)


* **Mod view** ![Mod view Screenshot](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/screenshots/tuchsoft_local_numicon_screenshot_activity_view.png)
