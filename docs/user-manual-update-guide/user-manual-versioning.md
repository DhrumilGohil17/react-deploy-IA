---
title: User Manual Versioning
sidebar_position: 5
---
<details>

<summary>**Table of Contents**</summary>

|[Documentation Workflow](/index.md)|  |
|--|--|
|[User Manual Update Guide](/user-manual-update-guide/user-manual-update-guide.md)|<li>[Branching and Page Updates](/user-manual-update-guide/branching-and-page-updates.md)</li><li>[Ignition Updates Board](/user-manual-update-guide/ignition-updates-board/ignition-updates-board.md)</li><ul><li>[Planning Meetings and IGN Issue Review](/user-manual-update-guide/ignition-updates-board/planning-meetings-and-ign-issue-review.md)</li><li>[Internal Version and Complete Changelogs](/user-manual-update-guide/ignition-updates-board/internal-version-and-complete-changelogs.md)</li></ul><li>[Writing Tasks Board](/user-manual-update-guide/writing-tasks-board.md)</li><li>[Deprecated Pages](/user-manual-update-guide/deprecated-pages.md)</li><li>[User Manual Versioning](/user-manual-update-guide/user-manual-versioning.md)</li>|
|[User Manual Style Guide](/user-manual-style-guide/user-manual-style-guide.md)|<li>[Structure and Navigation](/user-manual-style-guide/structure-and-navigation.md)</li><li>[Formatting Guidelines](/user-manual-style-guide/formatting-guidelines.md)</li><li>[Style Conventions](/user-manual-style-guide/style-conventions.md)</li><li>[Syntax for Functions](/user-manual-style-guide/syntax-for-functions.md)</li><li>[Images](/user-manual-style-guide/images.md)</li><li>[Word List](/user-manual-style-guide/word-list.md)</li> |
|[Tips and Tricks](/tips-and-tricks/tips-and-tricks.md)|<li>[CheatSheets](/tips-and-tricks/cheatsheets/cheatsheets.md)</li><ul><li>[Drivers](/tips-and-tricks/cheatsheets/new-drivers.md)</li></ul><li>[Documentation Permalinks](/documentation-permalinks.md)</li>|

</details>

# User Manual Versioning
## Overview 

Docusaurus uses a `versioned_docs` folder to map documentation versions. This allows us to manage multiple versions at once where we can easily create new documentation versions and preserve legacy documentation that will continue to be accessible even as the current documentation in the docs directory evolves.

The files in the `docs` directory belong to the current User Manual version.

Since it was decided that only the manuals being actively maintained would be moved from Confluence into Docusaurus during the initial migration to the new site, there are a couple ways now to access the various user manuals. The 7.9 version, 8.1 version, and all future major versions are available from the User Manual top bar version dropdown. The Deprecated manual can also be accessed here. Internally, these manual docs are found either in the main `docs` folder or the `versioned_docs` folders. Older manuals that were not maintained in Confluence were exported as PDFs instead of being migrated. These are now available from the User Manual Legacy Documentation page. Internally, these are available in the Amazon AWS account. 

The following sections highlight a few common processes that are helpful in understanding how versioning works. See [Docusaurus Versioning](https://docusaurus.io/docs/versioning) page for more information.


### Updating an Existing Version
You can update multiple doc versions at the same time because each directory in `versioned_docs/` represents specific routes when published.

The process listed below is a simplified description of how this is done. The [Branching and Page Updates](branching-and-page-updates.md) page reviews these steps in detail. As stated, the process is essentially the same with the slight difference of locating the corresponding page under the `versioned_docs` manual folder instead of the `docs` folder. 

1. Edit any page file.
2. Commit and push updates.
3. Merge to `staging` to eventually be merged into the protected `main` branch that publishes the change.

:::note
Any changes made to a page in an older version do not get carried forward into any other versions. So if a typo exists on a page in both 7.9 and 8.1, the typo must be corrected in both locations. 
:::
