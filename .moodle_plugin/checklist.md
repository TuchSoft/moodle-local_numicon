**Moodle Plugin Pre-Publication Checklist**

**General Information**

  **Descriptions:**
    * [x] Short description written (English).
    * [x] Complete description written (English).
    * [x] Consistency verified between short description, complete description, and README.
  **Moodle Versions:**
    * [ ] Compatibility checked with all supported Moodle versions.
  **Repository Name:**
    * [x] Verified that the repository name follows the convention `moodle-{plugintype}_{pluginname}`.
  **URLs:**
    * [x] Public repository available.
    * [x] Bug tracker available
    * [ ] Documentation available
    * [ ] Website available
  **Screenshots:**
    * [ ] At least one illustrative screenshot of the plugin in action included.
  **License:**
    * [ ] Verified that all core files have GPL v3+ license.
    * [ ] Compatibility of licenses for any external libraries verified.
    * [ ] No binary files without source code present.
  **Intellectual Property:**
    * [ ] Ensured that you have all necessary rights for plugin publication.
  **Subscription/Credentials (if required):**
    * [ ] Any subscription or credential requirements clearly indicated.
    * [ ] A working demo provided (if applicable).

**Installation and Dependencies**

  **Installation:**
    * [ ] Plugin installation from ZIP file tested.
    * [ ] Any extra installation steps clearly documented.
  **Dependencies:**
    * [ ] Dependencies (other plugins, external libraries, system requirements) clearly indicated in the description, README, and `version.php`.
    * [ ] Avoided the use of Composer for dependency management (Moodle guidelines).

**Functionality and Coding Style**

  **Functionality:**
    * [ ] Plugin tested with Moodle debugging enabled at the "DEVELOPER" level.
    * [ ] Verified that there are no PHP errors of any kind during usage.
  **Cross-DB:**
    * [ ] Plugin tested with MySQL database.
    * [ ] Plugin tested with PostgreSQL database.
    * [ ] Otherwise, a valid reason provided for the lack of cross-DB compatibility.
  **Coding Style:**
    * [ ] Ensured that the code follows Moodle coding guidelines.
  **English in Code:**
    * [ ] All code comments are in English.
    * [ ] All variable names are in English.
    * [ ] All function names are in English.
    * [ ] Other code elements (e.g., constants) are in English.
  **Boilerplate:**
    * [ ] Standard boilerplate with GPL license added at the beginning of each PHP file.
  **Copyright:**
    * [ ] `@copyright` tag added at the beginning of files with your name (and references if reusing others' code).
  **CSS Styles:**
    * [ ] Namespace used for CSS selectors (e.g., `.path-mod-myplugin .element`).
  **Namespace Collisions:**
    * [ ] "Frankenstyle" prefix used for database tables (e.g., `block_yourname_something`).
    * [ ] "Frankenstyle" prefix used for configuration settings.
    * [ ] "Frankenstyle" prefix used for function names (except standard module functions).
    * [ ] "Frankenstyle" prefix used for class names.
    * [ ] "Frankenstyle" prefix used for constant names.
    * [ ] "Frankenstyle" prefix used for global variable names (avoid global definitions without a prefix).

**Configuration and Language**

  **Settings Storage:**
    * [ ] Plugin settings are saved in `config_plugins`.
    * [ ] Direct use of tables in `config` has been avoided.
    * [ ] `get_config()` and `set_config()` functions used to manage settings.
    * [ ] Setting names follow the convention `plugintype_pluginname/settingname`.
  **Strings:**
    * [ ] `get_string()` function used for all user-visible text.
    * [ ] Only English is directly present in the plugin code (translations go to `lang.moodle.org`).
    * [ ] No leading or trailing spaces in strings.
    * [ ] String file formatted as a data array (`$string['id'] = 'value';`).
    * [ ] Concatenation, heredoc, or nowdoc not used to define strings.
    * [ ] Titles of sections and settings are in lowercase (Moodle standard).

**Privacy and Security**

  **Privacy:**
    * [ ] Collection, storage, processing, or sharing of unnecessary personal data avoided.
    * [ ] Moodle Privacy API implemented for any external integrations (especially meta-data providers).
    * [ ] Clear information provided about the data processed in the plugin description and via the Privacy API.
  **Security:**
    * [ ] User-provided input is never trusted.
    * [ ] `required_param()` function used with the expected data type to sanitize all user input.
    * [ ] Placeholders used in SQL queries to prevent SQL injection.
    * [ ] `sesskey` verified before performing any action that modifies data submitted via forms.
    * [ ] `require_login()` present in pages requiring authentication.
    * [ ] User capabilities verified before displaying features or allowing actions.
    * [ ] Potentially dangerous PHP functions avoided when used with user-provided data (e.g., `call_user_func()`, `eval()`, `unserialize()`).