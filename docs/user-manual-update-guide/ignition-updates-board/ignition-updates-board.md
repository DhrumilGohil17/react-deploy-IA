---
title: Ignition Updates Board
sidebar_position: 2
---

<details>

<summary>**Table of Contents**</summary>

|[Documentation Workflow](/index.md)|  |
|--|--|
|[User Manual Update Guide](/user-manual-update-guide/user-manual-update-guide.md)|<li>[Branching and Page Updates](/user-manual-update-guide/branching-and-page-updates.md)</li><li>[Ignition Updates Board](/user-manual-update-guide/ignition-updates-board/ignition-updates-board.md)</li><ul><li>[Planning Meetings and IGN Issue Review](/user-manual-update-guide/ignition-updates-board/planning-meetings-and-ign-issue-review.md)</li><li>[Internal Version and Complete Changelogs](/user-manual-update-guide/ignition-updates-board/internal-version-and-complete-changelogs.md)</li></ul><li>[Writing Tasks Board](/user-manual-update-guide/writing-tasks-board.md)</li><li>[Deprecated Pages](/user-manual-update-guide/deprecated-pages.md)</li><li>[User Manual Versioning](/user-manual-update-guide/user-manual-versioning.md)</li>|
|[User Manual Style Guide](/user-manual-style-guide/user-manual-style-guide.md)|<li>[Structure and Navigation](/user-manual-style-guide/structure-and-navigation.md)</li><li>[Formatting Guidelines](/user-manual-style-guide/formatting-guidelines.md)</li><li>[Style Conventions](/user-manual-style-guide/style-conventions.md)</li><li>[Syntax for Functions](/user-manual-style-guide/syntax-for-functions.md)</li><li>[Images](/user-manual-style-guide/images.md)</li><li>[Word List](/user-manual-style-guide/word-list.md)</li> |
|[Tips and Tricks](/tips-and-tricks/tips-and-tricks.md)|<li>[CheatSheets](/tips-and-tricks/cheatsheets/cheatsheets.md)</li><ul><li>[Drivers](/tips-and-tricks/cheatsheets/new-drivers.md)</li></ul><li>[Documentation Permalinks](/documentation-permalinks.md)</li>|

</details>

# Ignition Updates Board

This page outlines the process for documenting software changes. The Documentation team keeps track of cards on the [Ignition Updates Agile board](https://youtrack.ia.local/agiles/115-37/current). The full process is detailed further down on this page, but a quick summary of the lifecycle is:

1. **Ticketing System**: Software Engineering merges a change into their upstream repo. Any active tickets impacted by the change are marked as merged and closed.
2. **Discovery Phase**: Documentation searches the ticketing system for merged and closed tickets under a certain milestones. Documentation reviews each ticket, determining if the ticket change impacts the User Manual or if the release note requires additional work.
    * If not, the ticket is tagged as `no-docs` and no further work is required. 
4. **Work Phase**: If the ticket impacts the User Manual, the ticket is tagged as `docs` so that a writer will pick up the ticket and complete necessary work. If the release note requires additional work, the Documentation Engineer on the team copies the ticket link to the Release Notes Review document for later evaluation. 
5. **Review**: The work is reviewed.
6. **Publishing**: The work is published.

## Ticketing System 
When a change is needed for the Ignition software version, a Software Engineer will create an IGN issue. IGN issues are created to document and track changes to specific versions of the Ignition software. IGN issues are ready to be reviewed in the Discovery Phase when the following items are completed:

* **Milestone** is set to the version of Ignition that was impacted, such as **Ignition: 8.1.17**
* The ticket State is changed from Dev-Pending QA to **Merged and Closed**.
* The **Release Notes** field is addressed through an added release note sentence or a `no release note` tag. 

## Discovery Phase
The goal of this phase is to look over the changes Software Engineering made and determine what action Documentation needs to make, if any. IGN issues that require User Manual updates, are marked accordingly during the [Writing Team Planning](planning-meetings-and-ign-issue-review.md#reviewing-ign-cards-on-the-documentation-team-dashboard) meetings to populate related DOC Cards on the Ignition Updates Agile Board **Needs to be Started** column.

:::note
The Software Engineer has the option to also create a DOC issue, by adding the `docs` tag, if they know it will impact the docs. The DOC cards created from this tag will appear in the Updates Board backlog just as any other DOC Cards created by the Docs team during the Discovery Phase. It will still fall on the Docs team to move these cards to the corresponding version swimlane as described in [Doc Card Assignment](planning-meetings-and-ign-issue-review.md#doc-card-assignment) section on the Planning Meetings and IGN Issue Review page.
:::

#### No Action
If a ticket doesn't impact documentation and doesn't require a release note review, then it's done. Documentation can ignore it from this point on as it exits the workflow. 

## Work Phase
In this phase, members of the Documentation team will assign themselves as the **Doc Assignee** on the card and move the card to the appropriate **In Progress** or **Active Focus** state. For more information on how to transition through card states, refer to the [Doc Card Phases](../user-manual-update-guide.md#doc-card-phases) section on the User Manual Update Guide page. 

### New In and Changed In Components
Compared to Writing Tasks Doc Cards, a unique aspect of Ignition Update Doc changes include using the New In and Changed In components when introducing new and changed features for the first time on a page.

* <NewIn version="8.1.XX" /> (`<NewIn version="8.1.XX" />`) - Used in cases where a new option or setting has been added. If a change impacts multiple areas, try to only use this component once per page.
* <ChangedIn version="8.1.XX" /> (`<ChangedIn version="8.1.XX" />`) - Used when an existing feature has been modified or removed. Changed in component content may involve migrating content to [Deprecated pages](../deprecated-pages.md).  

#### Update The New in this Version (NITV) Page
As changes are made to the User Manual for a particular release, a bullet point describing the change must also be added to the **[New in this Version](https://www.docs.inductiveautomation.com/docs/8.1/new-in-this-version)** page regardless of if the New In or Changed In component was used. Make sure each bullet item links to the updated content. It can be helpful to reference the release note when deciding how best to summarize the change for the NITV page.

Once all work is complete, the writer moves the card to the **Ready for Review** state for another writer to pick up and review the changes. 

## Review
A writer with the ability to review will now assign themselves as the **Reviewer** to the Doc Card. Reviewers have the option to make minor edits or corrections to submitted work or move the card back to **Active Focus** for the original writer to address any feedback. 

When all card work is completed and reviewed, the reviewer will approve the merge from the original PR to the `version` branch, delete the original branch, and move the Doc Card to the **Passed Review** state. 

## Publishing
Once a card has passed review, it is held until the next software release. The column associated with this step is more or less a placeholder for cards that are done but not yet published. 

New User Manual content should be released the same day the corresponding stable Ignition version is release. The documentation does NOT need to wait for the stable version to be released. Releasing the documentation a little early is acceptable. 

### Merging into Main
Publishing content involves merging the content ready to be made public into the `main` branch. Since all content is published by merging the `staging` branch into the `main` branch, the version branch must first be merged into `staging`. This should be done as close to the version release as possible so version dependent content isn't accidently published prematurely. 

Now, prepped with all new content from individual page edits to all NITV additions, the `staging` branch can be merged to `main` in a single step for instant publishing when the related Ignition Version is released. 

### Clear the YouTrack Board
Any YouTrack issues for the version that was released will have their Docs State field moved to **Complete**. This will remove them from the board, making it clear to the entire team that there is no ongoing work remaining for the version release. Any work in the **No Changed Needed** column will also receive an updated status of **Closed - No Change Needed**, so that they will also be removed from the board. 