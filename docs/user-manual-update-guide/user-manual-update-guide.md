---
title: User Manual Update Guide
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

# User Manual Update Guide
The purpose of this guide is to describe the documentation processes that are used to document, track, review, publish, and audit updates to the Ignition User Manual. The Documentation Technical Writers are responsible for administering and managing the Ignition User Manual update process. Changes are made based on DOC cards that describe suggested or required updates to the Ignition User Manual.

These DOC cards are tracked by the Documentation Team in YouTrack on one of two Agile Boards, **Ignition Updates** or **Writing Tasks**. Ignition Updates are reserved for IGN issues marked with a related DOC issue, while Writing Tasks track internal documentation suggestions and DOC issues without a related IGN issue. Other DOC issues can be created for Knowledge Base Articles and IU videos, but these will be tracked in YouTrack on their own Agile Boards separately from User Manual updates.

The writer assigned to a DOC card determines how the User Manual should be updated depending on the scope detailed in the card description. This may be a simple edit on an existing page or creating a new page entirely. Regardless of the level of change required, the writer must first create a new branch to perform any work. More details on branching can be found in the [Branching and Page Updates](branching-and-page-updates.md) section. 

* Refer to the [Ignition Updates Board](ignition-updates-board/ignition-updates-board.md) section for version dependent changes.
* Refer to the [Writing Tasks Board](writing-tasks-board.md) page for general User Manual additions and corrections.  

To learn more about updating User Manual pages regarding formatting or content style, see to the [User Manual Style Guide](../user-manual-style-guide/user-manual-style-guide.md).

## YouTrack Boards
YouTrack is a third party application used by Development and the Documentation Team to track and store IGN and DOC issues. It allows users to search for issues that contain specific words or phases, as well as build personal search strings and make them available to other YouTrack users. 

Both the Ignition Updates and Writing Tasks boards have five distinct phases, described below, that DOC cards follow when User Manual updates are in progress. Each phase has its own steps to complete before the DOC card is moved to the next phase. 

### DOC Card Phases

**Needs to be Started**

Once DOC issues are created, they will be stored in the Needs to be Started phase until a writer assigns their name to it and moves the card status to In Progress.

**In Progress**: 

In this phase, the assigned writer is researching information regarding page updates. This may include speaking with QA or Devs for more information on required changes. Once the writer has a general understanding of the ticket request, they can use the [Story Point Rubric](https://docs.google.com/spreadsheets/d/1TBNdw5nQIlSNmfYvYygVxrSQfSTZaB6357tOANo7J6Q/edit#gid=0) to assign Estimated Doc Points. If the team member determines that additional areas need updating, the DOC card needs to be updated to add the additional work description and necessary page links. 

Depending on availability of SMEs or access to testing environments, a DOC card may be moved between Active Focus and In Progress multiple times before it is ready for review. 

**Active Focus**: 

Moving the card to Active Focus is the writer acknowledging that they are now directly working on the page updates to the manual. Once the User Manual is updated, the writer commits the changes to GitHub. Note that before committing, the content changes should already be approved by the assigned developer or QA. 

The writer needs to make a few final updates to the DOC card before moving it to the next phase. First includes adding the link to the approved PR as a comment for a reviewer to have easy access to the updates. 

:::note
In addition to verifying a PR passes all checks on the GitHub site before moving a card state to Ready to Review, the writer must verify that PRs are set to merge into the correct branch. PRs for Ignition Updates need to merge into the related `version` branch, while PRs for Writing Tasks need to merge into `staging`.
::: 

The writer can also add any brief comments to the DOC card about what content was added or modified, and any notes for the reviewer to pay particular attention to when reviewing the page. Final Doc Points should be determined at this point too. 


**Ready for Review**: 

The last step before finalizing DOC card work is to have the changes reviewed, making sure all the updated content on the page is clear, concise, and correct. 

DOC cards reside in the Ready to Review phase until another writer assigns themselves to the Reviewer role and reviews the updated content for accuracy and completeness. If they have any comments or changes to make after reviewing the page, they can reach out to the original writer directly, add a comment to the DOC card, or comment directly to .md file lines/sections on Github. If the additional comments require large adjustments, the reviewer can change the DOC card status back to Active Focus. The original writer will additionally receive an email in their inbox stating the page contains comments or that the DOC card status has been changed. 

Once all the comments are addressed and the user manual page(s) are updated, the writer will move the DOC card back to Ready for Review for a second review, or the reviewer will move the DOC card to it's next appropriate status. 

When the reviewer approves the updates to the page(s), the DOC card is moved to **Passed Review** and the PR is merged to the staging or release version branch. Writing Task DOC Card PRs are merged into staging immediately, while Ignition Update DOC Card PRs are merged into the version branch. 

The reviewer should delete the DOC branches directly after merging to the next appropriate branch. 

**Passed Review**: 

All content for DOC Cards in this phase has been reviewed and approved, and is now waiting to be published until the next scheduled merge to main process occurs.

#### Additional Phases

**Completed**: 

User Manual updates are available to the public once changes are merged to the `main` branch. After merging, related cards are moved to the **Completed** state. This state does not have a visible column on either YouTrack board, since no further work is required. 

* Publishing Ignition Update DOC Issues
When QA releases the final software version, a team member with the authorization to merge to `main` will publish the User Manual updates for the version release by merging the `version` branch to `staging`, and then the `staging` branch to `main`. 

Although the writer will be merging a version branch that contains all the updates, they will still be responsible for making sure all DOC card content is published and then move the DOC card states to Completed. When everything is published, the writer will send confirmation to the rest of the team in the Docs Writing Team Slack channel. 

* Publishing Writing Tasks DOC Issues
Unless determined as a high priority update, the `staging` branch is merged into `main` by an authorized team member weekly to publish updates in larger groups instead of publishing each update individually. It is the responsibility of the writer who merges to main to move the DOC cards to Completed after the updates are merged.

In cases where an update is high priority and needs to be published immediately, it will be merged from `staging` directly into `main` when completed.

**No Change Needed**: This phase skips all other phases in the DOC Card process and is reserved for DOC issues that do not result in any User Manual updates. Since this state is most applicable to version dependent tickets, it is only a visible column on the Ignition Updates board.

## Deprecated Pages

Major changes or updates might require entire section or page overhauls. To avoid confusion with users who haven't updated to the new minor version, existing content should be moved to the [Deprecated Pages](https://www.docs.inductiveautomation.com/docs/8.1/appendix/deprecated-pages). See the [Deprecated Pages](deprecated-pages.md) section for more information on how to handle migrating content.