#Definitions
## Universal Definitions:
### required
Double vector that contains all the courses for a major, the first element in each vector is an ID number that determines how the rest of the elements will be formatted/treated
#### ID Values
  * ID = 0: AKA "reqCourses" - courses that are definatly required for your major
  * ID = 1: AKA "choiceCourses" - courses where you have a choice to pick a certain number of courses from a list, the second element in each array is the number of credits that need to be taken from the rest of the vector
  * ID = 2: AKA "shiz" -  The second element in each array is the number of credits that need to be taken from the rest of the vector, which are numbers that will encode course requirements in a 10 digit number in the following format:
   * **JHU: (Minimum Level, 1 digit)*(Department, 3 digits)*(Writing, 1 digit)*(Humanities, 1 digit)*(Natural Sciences, 1 digit)*(Social Science, 1 digit)*(Quantitative Science, 1 digit)*(Engineering, 1 digit)**

#### Course Format
Courses are described by a 15 digit identifier long with the following format:
  * **JHU: (Department, 3 digits)*(Course Number, 3 digits)*(Number of Credits, 2 digits)*(Taken at Current University, 1 digit)*(Writing, 1 digit)*(Humanities, 1 digit)*(Natural Sciences, 1 digit)*(Social Science, 1 digit)*(Quantitative Science, 1 digit)*(Engineering, 1 digit)**

### degree
The type of degree. 0 for BA, 1 for BS, more to come

### university
A unique ID number that identifies the university that a student or major is associated with

### reqCredits/requiredCredits
The number of credits needed to graduate

## Major Exclusive Definitions:
### department
The departmental code that corresponds to the major

### focusArea
A number reflecting the focus area within the major that a particular instance of the major class reflects
#### Focus Area Format
* If there are no focus areas then the value is 0
* For majors with *n* focus areas, the focus areas are each assigned a number from *1* to *n*

##Student Exclusive Definitions:
### majors
A vector containg instances of all the majors associated with the Student

### taken
A vector containg all the courses already taken by the student (see the **Course Format** section for more information on how course information is encoded)
