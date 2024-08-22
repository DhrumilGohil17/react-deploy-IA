---
title: Syntax for Functions
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

# Syntax for Functions

## Front Matter

System and Expression Function pages have additional front matter fields to add that help user navigation and understanding from the parent pages that list the available functions. Both need the description field added, and the System Function pages also need the tags field.

* description: Copy and paste the first line in the Description section here. This displays a quick overview on the function card shown on the parent page. 
* tags: List the same Gateway, Vision Client, and Perspective Session options as included under the Scope heading. This will add the function to the correct Functions by Scope dropdowns on the parent pages.

## Python Scripting Functions

### Syntax
Function name in the Syntax section should be wrapped in with single backticks and formatted as follows:

`fullyQualifiedNameOfFunction(requiredParameter, [optionalParameter], [optionalParameter])`

Next the parameters are listed in a table with Type, Parameter, and Description columns. If the parameter is optional, then add [optional] after the last sentence in the description. [optional] is lowercase, black text, no punctuation. 

For example:

|Type|Parameter|Description|
|--|--|--|
|String |`requiredParameter`|Description of parameter |
|Integer |`optionalParameter`|Description of parameter. [optional]  |

* Use Java names for primitives:  String, Integer, Float, Date
* Don't use trailing [], aka Java array syntax. for example, String[] should be written as List[String] or Dictionary[String,String] for mapping types.
* Don't use Object, use Any instead.
* When multiple types are expected, use a pipe to separate each type. Example: List[Integer | String]
* When multiple types are listed, list them in alphabetical order

After parameters, returns and scope are listed next. All three of these sections are level 3 headers. If there are no parameters or returns, simply write:

Nothing (black text, title case, no punctuation)


### Python Scripting Function Data Types Examples

| Preferred   | Incorrect   | Examples     |
| ------- | ---------- | ------- |
| Any    | PyObject | Any value - The new value for the specified row/column.  |
| Boolean| bool     | Boolean showHeaders - If True, the spreadsheet will include a header row. If False, the header row will be omitted.       |
| Callable    | PyObject          | Callable callback \- Function to be called when the transformation is complete. [optional]     |
| Dataset     | DataSet           |    |
| Dictionary  | Map               | See Dictionary[String,List[String]] below.      |
| Dictionary[String, List[String]]| PyDict            | Dictionary[String, List[String]] \- A dictionary that maps roster names to a list of usernames in the roster. The list of usernames will be empty if no users have been added to the roster.    |
| Dictionary[String, Integer] | PyDictionary      | Dictionary[String, Integer] position - Dictionary of key-value pairs to use for position. Possible position keys are: left, top, right, bottom, width, height. Defaults to the center of the window. [optional]    |
| Dictionary[String, Any]   | PyDictionary      |  <li>Dictionary[String, Any] params - Dictionary of key-value pairs to us as input parameters to the View. [optional]</li><li>Dictionary[String, Any] parameters - A dictionary of arguments. Each key-value pair in the dictionary becomes a variable in the chart scope and will override any default.</li><li>Dictionary[String, Any] changes - A dictionary of changes to make. They keys in the dictionary should match column names in the dataset, and their values will be used to update the row.</li>|
| Integer                               | int               | Integer year - The year for the new date.     |
| Integer | Long timeout | Integer timeout - The amount of time, in milliseconds, that this connection is allowed to remain open without being used. Timeout counter is reset any time a query or call is executed against the transaction, or when committed or rolled-back. If omitted, defaults to 30,000. [optional]    |
| List[Any]   | PySequence        | List[Any] row - A Python sequence representing the data for the new row. Its length must equal the number of columns in the dataset. |
| List[Any]    | Object[]  | List[Any] args - A list of arguments. Will be used in order to match each placeholder (?) found in the query.  |
| List[Byte]   | byte[]  |  |
| List[Float]  | Float[]  | List[Float] values - A sequence of numerical values. Accepts both integers and floats. The sequence may not contain None type values. However, passing a None type object instead of a sequence of numerical values will return NaN.    |
| List[String] | string[]          | List[String] headers - The column names for the dataset to create.      |
| List[String] | PySequence | List[String] storageIds - A sequence of storage identifiers that will be deleted. Storage ID values can be retrieved with system.tag.queryAnnotations.|
| List[Integer] | List[String]          | PySequence        | List[Integer] | List[String] columns - A list of columns to keep in the returned dataset. The columns may be in integer index form (starting at 0), or the name of the columns as strings.          |
| List[Tuple[String, Integer, Integer]] | PySequence        | List[Tuple[String, Integer, Integer]] \- A sequence of tuples of the form (index, width, height) for each screen device (monitor) available.      |
| PyDataset                             | PyDataSet         | PyDataset dataset - A PyDataset object to convert.   |
| SProcCall| | SProcCall callContext - A stored procedure call context, with any input, output, and/or return value parameters correctly configured. Use system.db.createSProcCall to create a call context.   |
| Tuple                                 | PyTuple           | Tuple - A tuple of (x,y) in screen coordinates.    |
| Window                                | PyObject          | Window\- The [window](https://docs.inductiveautomation.com/display/DOC81/Vision+-+The+Window+Object) object that contains the component that fired the event.      |
| Integer | String | Integer or String | Demonstrates how parameters with multiple explicit data types should be written.       |

## Expression Functions

### Syntax
Function name in the Syntax section should be wrapped in with single backticks and formatted as follows:

`functionName(requiredParameter, [optionalParameter], [optionalParameter])`

For functions that have a variable number of parameters that can be passed to them, use ellipsis to indicate additional parameters:

`functionName(requiredParameter, [optionalParameter, ...])`

Next the parameter name is listed, with a dash and a description of the parameter, followed by the return. If the parameter is optional, then add [optional] after the last sentence in the description. [optional] is lowercase, black text, no punctuation.

* Parameters

    * Type `requiredParameter` - Description of parameter
    * Type `optionalParameter` - Description of parameter. [optional] 

    or

    * Nothing (black text, title case, no punctuation)

* Returns
    * Type `returnType` - Description of return value. 

    or

    * Nothing (black text, title case, no punctuation)


### Expression Function Data Types Examples

| Preferred        | Incorrect | Examples       |
| ---------------- | --------- | --------- |
| Boolean    | bool      | Boolean showHeaders - If True, the spreadsheet will include a header row. If False, the header row will be omitted. |
| Dataset, dataset | DataSet   | Dataset dataset - The starting dataset.       |
| Integer  | int       | Integer year - The year for the new date.       |
