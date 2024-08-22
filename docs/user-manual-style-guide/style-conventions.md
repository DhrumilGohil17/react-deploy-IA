---
title: Style Conventions
sidebar_position: 3
---

<details>

<summary>**Table of Contents**</summary>

|[Documentation Workflow](/index.md)|  |
|--|--|
|[User Manual Update Guide](/user-manual-update-guide/user-manual-update-guide.md)|<li>[Branching and Page Updates](/user-manual-update-guide/branching-and-page-updates.md)</li><li>[Ignition Updates Board](/user-manual-update-guide/ignition-updates-board/ignition-updates-board.md)</li><ul><li>[Planning Meetings and IGN Issue Review](/user-manual-update-guide/ignition-updates-board/planning-meetings-and-ign-issue-review.md)</li><li>[Internal Version and Complete Changelogs](/user-manual-update-guide/ignition-updates-board/internal-version-and-complete-changelogs.md)</li></ul><li>[Writing Tasks Board](/user-manual-update-guide/writing-tasks-board.md)</li><li>[Deprecated Pages](/user-manual-update-guide/deprecated-pages.md)</li><li>[User Manual Versioning](/user-manual-update-guide/user-manual-versioning.md)</li>|
|[User Manual Style Guide](/user-manual-style-guide/user-manual-style-guide.md)|<li>[Structure and Navigation](/user-manual-style-guide/structure-and-navigation.md)</li><li>[Formatting Guidelines](/user-manual-style-guide/formatting-guidelines.md)</li><li>[Style Conventions](/user-manual-style-guide/style-conventions.md)</li><li>[Syntax for Functions](/user-manual-style-guide/syntax-for-functions.md)</li><li>[Images](/user-manual-style-guide/images.md)</li><li>[Word List](/user-manual-style-guide/word-list.md)</li> |
|[Tips and Tricks](/tips-and-tricks/tips-and-tricks.md)|<li>[CheatSheets](/tips-and-tricks/cheatsheets/cheatsheets.md)</li><ul><li>[Drivers](/tips-and-tricks/cheatsheets/new-drivers.md)</li></ul><li>[Documentation Permalinks](/documentation-permalinks.md)</li>|

</details>

# Style Conventions

This section covers style conventions such as tone, voice, and some grammar guidelines. 

See [Word List](word-list.md) for terminology used in our documentation and usage examples regarding spelling and capitalization.

## Tone and Voice
Even though the User Manual is a technical document, we use a fairly informal writing style. It is ok to address the reader/user as "you" in procedures. 

It's important to avoid emotional or subjective language. Keep your reader’s focus on the verifiable information and processes and not personal or emotional responses.

For example, these types of phrases don't help the reader understand or verify the information:

* It worked beautifully.
* Excellent! Now we have our window configured for what we need. 

### Wordy vs Concise 

Concise writing is easier to understand, particularly in technical writing. Eliminate words that don't add meaning, such as "very," "virtually," "literally," "actually," "simply," "quite," or "really." When you remove them, you will find the meaning usually stays the same. Other words, such as "that" and "just" also have a tendency to sneak their way into sentences, even though they don't always add particular value to a sentence's meaning.  

Below are a few more examples of how to write concisely.

| Wordy                  | Concise   |
| ---------------------- | --------- |
| Came to the conclusion | Concluded |
| Utilization            | Use       |
| Make revisions         | Revised   |
| Make an amendment to   | Amend     |

### Active vs Passive

Use active voice over passive voice when possible. Active voice is considered more concise, direct, easier for readers to understand, and preferred choice for technical writing. When a sentence is written in passive voice, the subject receives the action. When a sentence is written in active voice, the subject performs the action. Sentences written in active voice are generally more concise than those in passive voice because fewer words are required to express an action.

| **Passive Voice**                                            | **Active Voice**                                |
| ------------------------------------------------------------ | ----------------------------------------------- |
| The button should be pressed.                                | Press the button.                               |
| The manual has been updated by the technical writer.         | The technical writer updated the manual.        |
| A new programming language was included in the application. | The application has a new programming language. |

For some more detailed information on active and passive voice, check out https://ohiostate.pressbooks.pub/feptechcomm/chapter/3-1-voice-tone/

## Grammar Guidelines 

### Serial (Oxford) Comma
Use a serial comma in a list of more than two items. This is helpful in technical writing for clarity.

Examples: 
* These properties provide display customization for the axes, baselines, markers, and the overall chart data appearance.
* Perspective has a host of built-in components such as displays, buttons, and charts.

### Using Bold

#### Procedures
We use bold text in procedures to indicate content that a user enters or selects. For those guidelines, see [Procedures](formatting-guidelines.md#procedures-and-lists).

#### Emphasis

Bold can also be used for emphasis, usually this is in narrative text when explaining a new concept or introducing new terminology. In bulleted lists, bold is sometimes used for terminology to seperate the terminology from the desciption.  

For example: 

The following are some key features of the Perspective module:
* **Responsive Design**:  Perspective is mobile responsive so it responds to changes in screen size and orientation, giving users a personalized view into their processes.
* **Browser-based**: Perspective lives in a browser instead of a Java client. No mobile module is required.
* **Sensor Information**: Perspective is able to take advantage of cameras and GPS information that are natively provided by mobile devices. 
* **Transforms**: Let you easily take the value coming into a binding, manipulate it further, and then transform it to the output of your choice.

:::note
If a larger concept or idea needs to be emphasized, use a note and bold relevant terminology as needed. It is **not** recommended to use italics or quotations for emphasis.
:::


### Quotation Marks
The traditional usage for quotation marks, quoting the spoken or written words of a person, is rarely used in technical writing. The rules for quotation marks used this way are as follows:

* End punctuation goes inside the quote.
* The first word in the quote is capitalized.
* Content of the quote must be verbatim what was spoken or written.
* Quotation marks, both single and double, are also used in scripting.

It is not recommended to use quotes unless they are needed for code snippets. In most scenarios where quotes are being used for emphasis on a word or phrase, simply bolding the text instead will accomplish the job. If the indented information you are attempting to convey still seems unclear using bold alone, it may be an indication that more context is required or the section needs to be reworked.


### Words vs Numbers

* Spell out single digit numbers.
* Spell out all numbers at the beginning of a sentence.
* Use numerals for measurements and for numeric values being entered into a field or a property.

Examples: 
* The Tag History system uses six different tables in the database.
* This runs in a timer script to lock the screen after 15 seconds of inactivity, and then log the user out after 30 seconds of inactivity.

### Common Grammar Mistakes

| Word    | Meaning | Examples     |
| ------- | ----- | ------------------ |
| it's | it is  | Create a shortcut so it's always on your desktop when you need it. <p></p>It’s possible to monitor the status of your alarm notification pipelines. |
| its | belonging to it | You can also change its stroke style, color, dash pattern.<p></p>Each assertion looks at a chart parameter and checks its value.   |
| they're | they are  | In Perspective, they're easy to configure using the Tab container.<p></p>Prompt the user to provide their credentials, even if they're already logged into the session. |
| their   | belonging to them | Their Tesla is blue.  |
| there   | in, at, or to that place or position | There are many ways to manipulate and arrange components when working in the Designer.   |

