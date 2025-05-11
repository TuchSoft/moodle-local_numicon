**Moodle Plugin Pre-Publication Checklist**

**General Information**

  **Descriptions:**
    * [x] Short description written (English).
    * [x] Complete description written (English).
    * [x] README
  **Moodle Versions:**
    * [ ] Compatibility checked with all supported Moodle versions.
  **Repository Name:**
    * [x] Verified that the repository name follows the convention `moodle-{plugintype}_{pluginname}`.
  **URLs:**
    * [x] Public repository available.
    * [x] Bug tracker available
    * [-] Documentation available (if needed)
    * [ ] Website available
  **Screenshots:**
    * [x] At least one illustrative screenshot of the plugin in action included.
  **License:**
    * [x] Standard boilerplate with GPL license added at the beginning of each PHP file.
    * [x] Compatibility of licenses for any external libraries verified.
    * [-] No binary files without source code present.
    * [x] Ensured that you have all necessary rights for plugin publication.
    * [x] `@copyright` tag added at the beginning of files with your name (and references if reusing others' code).

**Installation and Dependencies**

  **Installation:**
    * [x] Plugin installation from ZIP file tested.
    * [ ] Plugin installation during site install tested.
    * [-] Any extra installation steps clearly documented.
  **Dependencies:**
    * [-] Dependencies (other plugins, external libraries, system requirements) clearly indicated in the description, README, and `version.php`.
    * [x] Avoided the use of Composer for dependency management (Moodle guidelines).

**Functionality and Coding Style**

  **Functionality:**
    * [x] Plugin tested with Moodle debugging enabled at the "DEVELOPER" level with all major supported version
    * [x] Verified that there are no PHP errors of any kind during usage.
  **Cross-DB:**
    * [x] Plugin use standard DB method or has been tested with all databse.
    * [-] A valid reason is provided for the lack of cross-DB compatibility.
  **Coding Style:**
    * [x] All check from moodle-cs are green
    * [x] All check from grunt are green
    * [x] All code compoenents (comments, variable, function, constants, tec..)comments are in English.
    * [-] Namespace used for CSS selectors (e.g., `.path-mod-myplugin .element`).
    * [-] "Frankenstyle" prefix used for database tables (e.g., `block_yourname_something`).
    * [x] "Frankenstyle" prefix used for configuration settings.
    * [x] "Frankenstyle" prefix used for function names (except standard module functions).
    * [x] "Frankenstyle" prefix used for class/namespace names.
    * [-] "Frankenstyle" prefix used for gloabl constant names.
    * [-] "Frankenstyle" prefix used for global variable names.

**Configuration and Language**

  **Settings Storage:**
    * [x] Plugin settings are managed with the config API.
    * [x] Direct use of tables in `config` has been avoided.
    * [x] `get_config()` and `set_config()` functions used to manage settings.
    * [x] Setting names follow the convention `plugintype_pluginname/settingname`.
  **Strings:**
    * [x] `get_string()` function used for all user-visible text.
    * [x] Only English is directly present in the plugin code (translations go to `lang.moodle.org`).
    * [x] No leading or trailing spaces in strings.
    * [x] String file formatted as a data array (`$string['id'] = 'value';`).
    * [x] Concatenation, heredoc, or nowdoc not used to define strings.
    * [x] Titles of sections and settings are in lowercase (Moodle standard).

**Privacy and Security**

  **Privacy:**
    * [x] Collection, storage, processing, or sharing of unnecessary personal data avoided.
    * [-] Moodle Privacy API implemented for any external integrations (especially meta-data providers).
    * [x] Clear information provided about the data processed in the plugin description and via the Privacy API.
  **Security:**
    * [-] User-provided input is never trusted.
    * [-] `required_param()` function used with the expected data type to sanitize all user input.
    * [-] Placeholders used in SQL queries to prevent SQL injection.
    * [-] `sesskey` verified before performing any action that modifies data submitted via forms.
    * [-] `require_login()` present in pages requiring authentication.
    * [-] User capabilities verified before displaying features or allowing actions.
    * [x] Potentially dangerous PHP functions avoided when used with user-provided data (e.g., `call_user_func()`, `eval()`, `unserialize()`).