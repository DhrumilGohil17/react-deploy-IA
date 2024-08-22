---
title: Deprecated Pages
sidebar_position: 4
---
<details>

<summary>**Table of Contents**</summary>

|[Documentation Workflow](/index.md)|  |
|--|--|
|[User Manual Update Guide](/user-manual-update-guide/user-manual-update-guide.md)|<li>[Branching and Page Updates](/user-manual-update-guide/branching-and-page-updates.md)</li><li>[Ignition Updates Board](/user-manual-update-guide/ignition-updates-board/ignition-updates-board.md)</li><ul><li>[Planning Meetings and IGN Issue Review](/user-manual-update-guide/ignition-updates-board/planning-meetings-and-ign-issue-review.md)</li><li>[Internal Version and Complete Changelogs](/user-manual-update-guide/ignition-updates-board/internal-version-and-complete-changelogs.md)</li></ul><li>[Writing Tasks Board](/user-manual-update-guide/writing-tasks-board.md)</li><li>[Deprecated Pages](/user-manual-update-guide/deprecated-pages.md)</li><li>[User Manual Versioning](/user-manual-update-guide/user-manual-versioning.md)</li>|
|[User Manual Style Guide](/user-manual-style-guide/user-manual-style-guide.md)|<li>[Structure and Navigation](/user-manual-style-guide/structure-and-navigation.md)</li><li>[Formatting Guidelines](/user-manual-style-guide/formatting-guidelines.md)</li><li>[Style Conventions](/user-manual-style-guide/style-conventions.md)</li><li>[Syntax for Functions](/user-manual-style-guide/syntax-for-functions.md)</li><li>[Images](/user-manual-style-guide/images.md)</li><li>[Word List](/user-manual-style-guide/word-list.md)</li> |
|[Tips and Tricks](/tips-and-tricks/tips-and-tricks.md)|<li>[CheatSheets](/tips-and-tricks/cheatsheets/cheatsheets.md)</li><ul><li>[Drivers](/tips-and-tricks/cheatsheets/new-drivers.md)</li></ul><li>[Documentation Permalinks](/documentation-permalinks.md)</li>|

</details>

# Deprecated Pages
The [Deprecated Pages](https://www.docs.inductiveautomation.com/docs/deprecated/intro) section of the User Manual exists as a part of the Legacy Documentation to help bridge the gap for customers who have not yet updated to the most recent minor version. 

The decision to add content to the Deprecated Pages is currently up to a writer's discretion when updating a section of the User Manual. For the most part, changed content does not require migrating existing content to a Deprecated page. However, if the deprecated feature is still available inside Ignition to maintain backwards compatibility, it is worth considering an addition to the Deprecated Pages. Reach out to the Content Team Manager for assistance clarifying when additions are needed. 

For example, the legacy `system.alert` functions no longer appear in Ignition, as they were replaced with the `system.alarm` functions. However, the alert functions still exist in the software and work exactly the same as they used to, so the [system.alert deprecated](https://www.docs.inductiveautomation.com/docs/deprecated/system-functions/system-alert-deprecated) pages were created as a reference to these deprecated features.

If new Deprecated Pages need to be created, open the `versioned_docs` folder and make changes to the `version-deprecated` folders and pages as needed. 
