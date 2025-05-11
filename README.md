<!-- markdownlint-disable MD041 -->
<p align="center">
    <img width="400px" height=auto src="https://tuchsoft.com/assets/images/logo-dark.webp" />
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

By defualt the number must be the very first element of the title and followed immediately by a period (e.g., "1."), to be automatically transformed into an icon when the page loads, but you can configure another format if you like, see the "Using with subsection".

* **Number to Icon Conversion:** Converts leading numbers in section and activity titles into visual Numicon representations.
* **Configurable Scope:** Provides Moodle settings to enable or disable the functionality independently for section and activity names.


## **Installation**

1. Place the local\_numicon folder into the /local/ directory of your Moodle installation.
2. In your Moodle site, go to *Site administration* \> *Notifications*.
3. Complete the installation process.
4. Navigate to *Site administration* \> *Plugins* \> *Filters* \> *Section number icon filter* to configure the plugin settings.


## **Configuration**
The plugin's settings page allows you to:

* **Enable for Sections:** Enable/disable Numicon display for section titles. This is enabled by default.
* **Enable for Activities:** Enable/disable Numicon display for activity titles. **Note:** Activity titles appear in various locations throughout Moodle, not just on the course page. The plugin's functionality is not guaranteed in all of these locations.
* **Set the icon Shape**: Choose between a square or circle icon style for the displayed Numicon.
* **Set Advanced Number Selection (Regex)**: For advanced users, a regular expression (regex) field is available to customize the pattern used for identifying numbers (or anything else) in the titles. By default, the plugin only supports whole numbers followed by a period (e.g., "1."). This advanced setting allows for the selection of more complex patterns, see "Working tih subsections"


### **Working with Subsections**
When you're using subsections, you'll typically want to have sub-numbering as well. To achieve this, you'll need to adjust the default search regular expression.

You can set the regex to "" to enable a numbering format like "#1.2" and "#1", allowing you to use a number after the dot. Keep in mind that excessively long numbers (for example, "#13.12") might not fit well within the icon. If you need to use larger numbers, you can adjust the styling of the elements to accommodate them.

It's worth noting that the regex can be set to any other pattern as well. For instance, you could configure it to use letters instead of numbers by setting the regex accordingly (e.g., you might use a regex that matches "#A.1" or "#A"). This gives you a lot of flexibility in how your subsections are numbered.


### **Numbering activities**
When numbering activities, please keep in mind that this feature might work best with certain themes. This is because activity titles often already include icons, and the numbering filter is disabled by default for activity titles.

Furthermore, consider that activities are frequently displayed outside of the main course context (such as in dashboard blocks and reports). Therefore, a consecutive numbering system might be confusing for users encountering these activities in different contexts.


## **Usage**
Once you've configured the plugin, it will automatically convert any leading numbers found in section and activity titles (where the feature is enabled) into their corresponding Numicon icons. For instance, a section titled "1. Introduction" will display the Numicon shape for the number 1 in place of "1.".

To make this work, simply name your sections following the default format ("{number}. {title}") or the custom regex pattern you've configured in the settings.
Keep in mind that the plugin's effect isn't visible while you're in course editing mode. To see the Numicon icons, you'll need to disable the "Edit mode".


## **Important Notes**
* **Number limit:** Numbers greater than 2 digits will not display correctly.
* **Course context:** Functionality only works pages in course context and below.


## Issues
Please submit bugs and feature requests as **[new GitHub issues](https://github.com/tuchsoft/moodle-local_numicon/issues/new)**. 
Provide a **meaningful description** with relevant information to help us understand and address the issue effectively.


## Screenshot
Screenshot of the plugin in action, with theme "Boost" and "Custom section/Topic" format.

* **Course view** ![Course view Screenshot](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/screenshot/tuchsoft_local_numicon_screenshot_course_view.png)

* **Section view** ![Section view Screenshot](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/screenshot/tuchsoft_local_numicon_screenshot_section_view.png)

* **Mod view** ![Mod view Screenshot](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/main/.moodle_plugin/screenshot/tuchsoft_local_numicon_screenshot_section_view.png)