---
title: Drivers
sidebar_position: 1
---
<details>

<summary>**Table of Contents**</summary>

|[Documentation Workflow](/index.md)|  |
|--|--|
|[User Manual Update Guide](/user-manual-update-guide/user-manual-update-guide.md)|<li>[Branching and Page Updates](/user-manual-update-guide/branching-and-page-updates.md)</li><li>[Ignition Updates Board](/user-manual-update-guide/ignition-updates-board/ignition-updates-board.md)</li><ul><li>[Planning Meetings and IGN Issue Review](/user-manual-update-guide/ignition-updates-board/planning-meetings-and-ign-issue-review.md)</li><li>[Internal Version and Complete Changelogs](/user-manual-update-guide/ignition-updates-board/internal-version-and-complete-changelogs.md)</li></ul><li>[Writing Tasks Board](/user-manual-update-guide/writing-tasks-board.md)</li><li>[Deprecated Pages](/user-manual-update-guide/deprecated-pages.md)</li><li>[User Manual Versioning](/user-manual-update-guide/user-manual-versioning.md)</li>|
|[User Manual Style Guide](/user-manual-style-guide/user-manual-style-guide.md)|<li>[Structure and Navigation](/user-manual-style-guide/structure-and-navigation.md)</li><li>[Formatting Guidelines](/user-manual-style-guide/formatting-guidelines.md)</li><li>[Style Conventions](/user-manual-style-guide/style-conventions.md)</li><li>[Syntax for Functions](/user-manual-style-guide/syntax-for-functions.md)</li><li>[Images](/user-manual-style-guide/images.md)</li><li>[Word List](/user-manual-style-guide/word-list.md)</li> |
|[Tips and Tricks](/tips-and-tricks/tips-and-tricks.md)|<li>[CheatSheets](/tips-and-tricks/cheatsheets/cheatsheets.md)</li><ul><li>[Drivers](/tips-and-tricks/cheatsheets/new-drivers.md)</li></ul><li>[Documentation Permalinks](/documentation-permalinks.md)</li>|

</details>

# Drivers

## Required New Driver Page Updates
When a new driver is created, the following pages need to be built or updated: 

1. Create the main driver subpage under [OPC UA Drivers](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/opc-ua/opc-ua-drivers), or an existing driver subpage as applicable.
    1. All main driver pages should include a connection procedure, device properties, and specific instruction for how to use the driver regarding addressing, defining terminology, or highlighting limitations.
2. Add the driver name and link to the new driver main page to the [Connecting to a Device list](https://www.docs.inductiveautomation.com/docs/8.1/ignition-modules/opc-ua#connecting-to-a-device) on the OPC UA page. 
3. Add a new driver section with links and brief description to the [Driver Modules](https://www.docs.inductiveautomation.com/docs/8.1/getting-started/modules-overview/core-modules/opc-ua-module/driver-modules) page. 
4. Add the Module Identifier and Module Filename to the [Module Identifiers table](https://www.docs.inductiveautomation.com/docs/8.1/platform/docker-image#module-identifiers-table).
5. Add the Driver Name and Device Type to the [Device Types table](https://www.docs.inductiveautomation.com/docs/8.1/appendix/scripting-functions/system-device/system-device-addDevice#device-types) on the system.device.addDevice page. 
6. Add any scripting functions associated with the driver to the System Functions section. For example, see the [system.iec61850](https://www.docs.inductiveautomation.com/docs/8.1/appendix/scripting-functions/system-iec61850) pages.  
7. Add the driver to the [NITV page](https://www.docs.inductiveautomation.com/docs/8.1/new-in-this-version) once it’s ready to be published. 
