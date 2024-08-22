---
title: Internal Version and Complete Changelogs
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

# Internal Version and Complete Changelogs

The Internal Version Changelog is a document used by the Documentation Team to track and control user-facing features released to the Ignition User Manual. A user-facing feature can be defined as an update to Ignition software that changes how a user will view and interact with the UI of any product area. The specific IGN tickets incorporated into the software version since the last release are also identified in the Internal Version Changelog.

The Complete Changelog is a document shared both internally and with select external parties to provide almost all the IGN tickets incorporated into the software version since the last release. This changelog is a summary of both new user-facing features and bug fixes included in the Ignition software version release.

## Internal Version Changelog
The changelog serves to document all the new features that users may have direct interaction with on the software.

Prior to a new Ignition version's RC release date, the Documentation Engineer creates the Internal Version Changelog that is shared on the RC date. The changelog contains a list of changes that made their way into the related version of Ignition, sorted by System Name much like the New In This Version page. If there are any images/GIFs or forum posts that can further demonstrate the application of a new feature, they are also included. Each added feature contains an link the specific IGN ticket. The document ends with a link to all the IGN tickets from the release.

For all changelog content, refer to the Agile Board pertaining to the latest Ignition version https://youtrack.ia.local/agiles/115-37/current. All cards listed for that version will have been approved by the Content Team during Writing Team Planning meetings and must be added to the changelog.

Consult the Training Content Manager if you are unsure about any particular card being included. 

The changelog is created in Google Docs. For each new release version, a new changelog is created.

:::note
It's a good idea to review the outline on the left side menubar in case an entry was inadvertently added to the outline. 
:::

### Content Organization and Styles
Features are organized by System Name (i.e., Perspective, Vision, Platform - Web Interface, Scripting, etc.) so users can easily find IGN issues associated with any of the systems in the left-side menubar.

The table below shows the formatting styles for sections in the changelog. 

|Document Sections|Paragraph Styles|Description|Font Type|Pixels|
|--|--|--|--|--|
|Change Type|Header 1|Places the title in the left side menubar.|Proxima Nova|20px|
|System Names|Header 2|Places the System name in the left side menubar.|Proxima Nova|16px|
|IGN Number and Description|Normal Text, Bulleted List	|Provides specific IGN issue, which is linked to the Youtrack ticket. Contains the release note of the Youtrack ticket to describe the new feature. Images and/or GIFs to help demonstrate the new feature can be added below the text. Example: <ul><li>IGN-`{value}`: `{Release Note description}`</li></ul> |Proxima Nova|14px|
|Additional Descriptions|Normal Text, Nested Bulleted List|Includes additional descriptions and forum post links describing the change and why it was requested. Check the Youtrack ticket for any available forum post links. (Optional)|Proxima Nova|11px|

Remember, Internal Changelogs are shared internally only. It should be posted as early as the new Ignition version's Release Candidate release date by sharing the link to the Google Docs file in the #inductiveautomation Slack channel.

```
@here Hello everyone! The 8.1.38 Internal changelog is now available! Please do not share this with customers.
```

## Complete Changelog

Immediately after the Documentation Engineer creates and shares the Internal Version Changelog, they are responsible for creating a copy of the Internal Version Changelog to expand it's content and build the Complete Changelog with all known bug fixes that can also affect user interaction. The Complete Changelog is divided into three sections of different change types:

* New Features: This section is almost identical to the Changes section of the Internal Version Changelog except all IGN issue numbers and Youtrack links are removed.
* Bug Fixes: Organized by System Name where each bug fix entry contains a Title, Description of Issue, and Solution.
* Updates: Similar to New Features except each entry includes a short sentence stating an internal framework or library that was upgraded.

For all content pertaining to bug fixes, refer to YouTrack using the Release Version filter: `https://youtrack.ia.local/issues/IGN?q=Release%20Version:%20:{Ignition Version Number}`. During the inspection of IGN issues using this URL, you may notice Task and Refactor issue types are excluded. Since they are typically Back-End focused and are not required to provide a release note for users, they are not included in the Complete Changelog. Some issues of Bug type may also be created for a similar purpose and can be left out of the final document. Consult the Training Content Manager if you are unsure about any particular IGN issue being excluded. 

The changelog is created in Google Docs. For each new release version, a new changelog is created. 

From the Table of Contents, you can click on any System heading and the document will take you to that section in the changelog.

:::note
It's a good idea to review the outline on the left side menubar in case an entry was inadvertently added to the outline. 
:::

### Content Organization and Styles
IGN issues are organized by System Name (i.e., Perspective, Vision, Platform - Web Interface, Scripting, etc.) so users can easily find entries associated with any of the systems in the Table of Contents and left-side menubar.

The table below shows the formatting styles for sections in the changelog. 

|Document Sections|Paragraph Styles|Description|Font Type|Pixels|
|--|--|--|--|--|
|Change Type|Header 1|Places the title in the TOC.|Proxima Nova|20px|
|System Names|Header 2|Places the System name in the TOC.|Proxima Nova|16px|

The table below shows the formatting styles for bug fix entries in the changelog. 

|Document Sections|Paragraph Styles|Description|Font Type|Pixels|
|--|--|--|--|--|
|Title|Header 3, Bulleted List|Places the title in the TOC.|Proxima Nova|20px|
|Description of Issue|Normal Text, Nested Bulleted List	|Describes important context of the IGN issue. Descriptions can be found and summarized on Youtrack ticket. The last sentence of description can contain any relevant forum post links. Image, GIFs, and/or Error logs to help demonstrate the new feature can be added below the text.|Proxima Nova|11px|
|Solution|Normal Text, Nested Bulleted List|Contains the release note of the Youtrack ticket to describe the new feature.|Proxima Nova|11px|

A template of the bug fix entry style described in the table above should look like this:

* **Title**: Product area, such as Perspective or Gateway Network
* **Description of the Issue**: Description concluded by any available forum post links, Images, GIFs, and/or Error logs
* **Solution**: YouTrack ticket Release Note

Complete Changelog Google Docs links are shared with the following internal parties directly upon request:

Direct Messaging:
* Director(s) of Support
* Enterprise Support Account Manager
* Sales Engineering Compliance Manager

Groups:
* Support Team meetings (During monthly documentation announcements only)
* #sales-enginnering channel (Must be announced and shared using PDF copies only)

```
@here Hello SEs, attached is a PDF of the 8.1.38 Complete Changelog for Distributors, IA Partners, and specific customers only. Please do not share publicly.
```

The Complete Changelog must be posted as early as possible before the new version's stable release date.


## Release Notes Review Meeting

The Documentation Engineer relies heavily on the Release Notes included in IGN issues when creating both changelog documents. Since these summaries will eventually become public-facing, the Documentation team reviews these release notes specifically for clarity and style. Release notes requiring any edits are first identified in the weekly [Planning](planning-meetings-and-ign-issue-review.md#release-note) meetings, while any change suggestions are recorded in a separate Release Notes Review meeting. All suggestions are again reviewed by Software Engineering prior to sending out the Complete Changelog. 