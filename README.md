<!-- markdownlint-disable MD041 -->
<p align="center">
    <img width="400px" height=auto src="https://tuchsoft.com/assets/images/logo-dark.webp" />
</p>

<p align="center">
    <a href="https://twitter.com/tuchsoft"><img src="https://badgen.net/badge/twitter/@tuchsoft/?icon&label" /></a>
    <a href="https://tuchsoft.com"><img src="https://badgen.net/badge/icon/tuchsoft.com/?icon=chrome&label" /></a>
<a href="https://github.com/tuchsoft/"><img src="https://badgen.net/static/GitHub/Tuchsoft/?icon=github&label" /></a>
    
    
</p>

## **Course number icon filter (local\_numicon) \- Moodle Plugin**

Transforms leading numbers in sections and activities titles to icons.

### **Description**

This plugin converts numbers at the start of section and activity titles into icons, providing a visual and distinct numbering for your course elements.

The number must be the very first element of the title and followed immediately by a period (e.g., "1."), this will then be automatically transformed into an icon when the page loads.


* **Number to Icon Conversion:** Converts leading numbers in section and activity titles into visual Numicon representations.
* **Configurable Scope:** Provides Moodle settings to enable or disable the functionality independently for section and activity names.

### **Installation**

1. Place the local\_numicon folder into the /local/ directory of your Moodle installation.
2. In your Moodle site, go to *Site administration* \> *Notifications*.
3. Complete the installation process.
4. Navigate to *Site administration* \> *Plugins* \> *Local plugins* \> *Number icon filter* to configure the plugin settings.

### **Configuration**

The plugin's settings page allows you to:

* **Enable for Sections:** Enable/disable Numicon display for section titles. This is enabled by default.
* **Enable for Activities:** Enable/disable Numicon display for activity titles. **Note:** Activity titles appear in various locations throughout Moodle, not just on the course page. The plugin's functionality is not guaranteed in all of these locations.
* **Icon Shape**: Choose between a square or circle icon style for the displayed Numicon.
* **Advanced Number Selection (Regex)**: For advanced users, a regular expression (regex) field is available to customize the pattern used for identifying numbers at the start of titles. By default, the plugin only supports whole numbers followed by a period (e.g., "1."). This advanced setting allows for the selection of more complex patterns


### **Usage**

Once configured, the plugin will automatically transform leading numbers in section and activity titles (where enabled) into Numicon icons. For example, if a section is titled "1. Introduction", the "1." will be replaced with the Numicon representation of the number 1.

### **Important Notes**

* **Number Formatting:** The number *must* be at the beginning of the title and followed by a dot (e.g., "1.", "2.", "3.").
* **Number limit:** Numbers greater than 99 will not display correctly.
* **Limited Page Support:** Functionality only works for course pages.


### Issues

Please submit bugs and feature requests as **[new GitHub issues](https://github.com/tuchsoft/moodle-local_numicon/issues/new)**. 
Provide a **meaningful description** with relevant information to help us understand and address the issue effectively.




### Screenshot

* **Square icon** ![Screenshot Square](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/master/.moodle_plugin/screenshot/tuchsoft_local_numicon_square_icon_screenshot.png)

* **Circle icon** ![Screenshot Circle](https://raw.githubusercontent.com/TuchSoft/moodle-local_numicon/refs/heads/master/.moodle_plugin/screenshot/tuchsoft_local_numicon_circle_icon_screenshot.png)