---
title: Quality Guidelines
---

## Audience, Purpose, and Scope

Before starting work on any ticket, it is important for a writer to consider and clearly define the audience, purpose, and scope of their documentation:

* **Audience** - Who is the primary audience for this document? The audience may include external users, members of different divisions within IA, strategic partners, or a mix of multiple parties.
* **Purpose** - What is this documentation meant to do? Should a reader be able to follow along and execute a specific process, or is the document meant to provide an overview of a complex concept?
* **Scope** - What information is necessary to include, and what is superfluous, redundant, or irrelevant?

Answering these questions ahead of time helps writers to avoid tangents and to ensure that each sentence, paragraph, and section is meaningful and intentional.

## Every Page is Page One

[Every Page is Page One](https://everypageispageone.com/the-book/) is a philosophy of writing for a web-centric audience. When a reader opens a book, they will typically start on page one, and later pages and chapters will build upon concepts introduced in a sequential order. On the web, readers bounce around non-linearly from site to site, reading single pages in isolation rather than closely following a table of contents.

It is very likely that a user will land on a page in the User Manual via a web search, without ever reading the "Getting Started" section. Writers should strive to write content that functions well as a standalone article or reference, linking to other pages for additional context or prerequisite knowlege as needed.

## The Four Cs

Whether writing or reviewing a document, the following framework is useful for ensuring that documentation meets certain benchmarks for quality.

### Correct

* [ ] Is the content grammatically correct?
* [ ] If I am unable to confirm information is accurate, did an SME verify it?
* [ ] Are Ignition-specific terms used correctly?
* [ ] Does content correctly reflect the [style guide](../user-manual-style-guide/user-manual-style-guide.md)?

### Clear

* [ ] Is the content clear and easy to understand?
* [ ] If additional context is needed, is it clear where to find this information?
* [ ] If images or diagrams are present, do they help or hinder understanding?
* [ ] Do heading titles help readers navigate page content at a quick glance?
* [ ] Will the terms I chose match search terms users will try?

### Concise

* [ ] Is content concise and limited to a reasonable scope?
* [ ] Are there any redundant words or sentences that can be trimmed down?
* [ ] Is information repeated?

### Cohesive

* [ ] In a paragraph, does each sentence logically follow the previous sentence?
* [ ] In a longer section, does each paragraph logically follow the previous paragraph?
* [ ] Does a new section added to an existing page fit in context with the rest of the page?
* [ ] Does a new page fit in context with related pages in the User Manual?

 ## No Change Needed

Occasionally a ticket will enter the Ignition Updates or Writing Tasks board that does not merit making an update in the User Manual. Some examples of topics that are not typically documented in the User Manual include (but are not limited to) the following:

* Third-party software
* Error messages
* Examples related to specific industries
* Bugs or workarounds for cases where the software is not working as intended
* Suggestions that pose or expose a security risk

Note that the writing team will sometimes make exceptions to this list in certain cirumstances. For example, much of the documentation in the User Manual on configuring databases concerns third-party software.

If a writer determines that no work should be done on a ticket they are assigned, or if a suggested User Manual update may be better suited for another type of documentation such as a KBA or other internal document, they should bring it to the attention of their supervisor. If the supervisor agrees that no work should be completed on the ticket, the writer may mark the ticket's status as **No Change Needed**. If the supervisor decides that work should not be done in the User Manual but there may be potential to turn the request into a KBA or other task, the writer may change the ticket's **Subtype - Written** accordingly.

## The Review Stage

All documentation must enter peer review before being published. Peer review ensures that another person besides the writer has read content for accuracy and can provide feedback in case of any errors or areas for improvement.Reviewers may refer to the guidelines on this page as well as the [User Manual Style Guide](../user-manual-style-guide/user-manual-style-guide.md) to assess whether corrections or feedback are needed.

Certain documents may also require SME review, particularly those covering complex or advanced topics. In cases where documentation needs SME review, the peer reviewer should wait to mark a ticket as Passed Review until after the SME has approved the document or offered feedback, even if the peer reviewer has completed their own review.

### Making Corrections

When a ticket needs corrections before it can pass review, the type and volume of corrections needed determines whose responsibility it is to make revisions:


Issue | Whose responsibility 
---------|----------
 A single typo, or a few scattered typos | The reviewer can fix typos at their discretion 
 A small grammar or punctuation error | The reviewer may fix small grammar or punctuation errors at their discretion
 A pattern of grammatical errors throughout a document | The reviewer may correct errors themself if no larger errors are present in the document, but should reach out to the writer to notify them of the pattern so that they may improve their work in the future.<br/><br/> If the document is long, spans many pages, or there are a large number of errors throughout, the ticket should be kicked back to Active Focus for the writer to make corrections. 
 Issues with clarity   | Reviewers may suggest alternative wording if a sentence or paragraph seems unclear, but they must always initiate a discussion with the writer to ensure that the writer's intended meaning is not changed by the rewording.
 Incorrect information | The reviewer should reach out to the writer to verify whether a SME has reviewed content for accuracy. If the information is correct but needs to be reworded for clarity, the reviewer can suggest alternative wording but it is up to the writer to make any changes.
 Organizational or structural problems | Work requiring major overhauls is always the responsibility of the writer to correct and resubmit for review. The reviewer should provide detailed feedback on problem areas and may make suggestions on alternative wording or structure, but should not attempt to rewrite the document themselves.


### Story Points Assessment

The review stage can also provide an opportunity to evaluate the story points assigned to a given ticket, particularly for newer writers. If the reviewer sees a discrepency between the number of points the writer assigned the ticket and the number of points the reviewer would have assigned, they can initiate a discussion to learn where a writer may have over- or underestimated the difficulty of a task.

Points are assigned to tickets according to the following rubric:

Category | Grading
---------|--------
Is it just a simple task? | No: Assign **0 points** and move to next question<br/> Yes: Assign **.5 to 2 points** depending on how long you think it will take. Skip the rest of the rubric
Is it clear and complete enough to be actionable? | Yes, I have enough information to at least get started: **0 points**<br/> No, I need more info before I can really do anything with this: **.5 points**
Is there a designated SME? | Yes, the requestor is a SME or has indicated one: **0 points**<br/> I know some potential SMEs: **.5 points**<br/>No one seems to know about this thing: **1 point**
Estimated word count? | A draft or existing doc has been provided, but it needs editing: **.5 points**<br/> 200 words or less: **1 point** <br/>200-700 words: **2 points**<br/> 700+ words: **3 points**
Will the writer need to research this on their own? | No: **0 points**<br/> Yes: assign **1-4 points** based on estimated amount of research
Is this doc likely to require visual aids,<br/> and how much work will it take to produce them? | No, or someone else will provide them: **0 points**<br/> Yes, but I can easily create them myself: **1 point**<br/> Yes, but the design is unclear or not finalized: **2 points**<br/> Yes, and it will involve image manipulation or something beyond basic screenshots: **2.5 points**
Will this affect multiple docs? | No: **0 points**<br/> Yes: assign **1-3 points** based on how many docs are affected and/or the level of effort required to identify those docs

