#Definitions
## Universal Definitions:
### required
Double vector that contains all the courses for a major, the first element in each vector is an ID number that determines how the rest of the elements will be formatted/treated
#### ID Values
  * ID = 0: AKA "reqCourses" - courses that are definitely required for your major
  * ID = 1: AKA "choiceCourses" - courses where you have a choice to pick a certain number of courses from a list, the second element in each array is the number of credits that need to be taken from the rest of the vector
  * ID = 2: AKA "shiz" -  The second element in each array is the number of credits that need to be taken from the rest of the vector, which are numbers that will encode course requirements in a 11 digit number in the following format:
   * **JHU: (Minimum Level, 1 digit)*(Minimum Credits, 1 digit)*(Department, 3 digits)*(Writing, 1 digit)*(Humanities, 1 digit)*(Natural Sciences, 1 digit)*(Social Science, 1 digit)*(Quantitative Science, 1 digit)*(Engineering, 1 digit)**
  * ID = 3: AKA "option" - Denotes an option following this. The options will be normally formatted with ID = 0, 1, 2, but will have a 3 in front of them to distinguish that they are part of an option (the ID 0 becomes 30, ID 1 becomes 31, ID 2 becomes 32). The vector is formatted (ID, end of option 1, end of option 2, ...), with the locations of the end of the options being relative to the vector with the ID = 3. I.E. Take Either Calculus I - > Calculus II or Calculus I for Bio -> Calculus I for Bio. Assuming that each course will have its own row in the vector, the vector will be (3, 2, 4).
  * ID = 30: Any reqCourses under an option
  * ID = 31: Any choiceCourses under an option
  * ID = 32: Any shiz under an option

#### Course Format
Courses are described by a 15 digit identifier long with the following format:
  * **JHU: (Department, 3 digits)*(Course Number, 3 digits)*(Number of Credits, 2 digits)*(Taken at Current University, 1 digit)*(Writing, 1 digit)*(Humanities, 1 digit)*(Natural Sciences, 1 digit)*(Social Science, 1 digit)*(Quantitative Science, 1 digit)*(Engineering, 1 digit)***
Note: In the event that a school has a credit system with half credits (i.e. 1.5 credit class), multiply all course credits by 2.

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

#Algorithms
##calculateRequired
##calculateRemaining
##calculateRecommended
1. Clear any data that is in the recommended vector from a previous configuration of majors
2. Copy all choiceCourses vectors from the required vector to the recommended vector while keeping track of how often each course appears with the counts map
3. Copy the values from the counts map to the sortedCounts vector
4. Sort the sortedCounts vector in descending order
5. Generate the temp vector for the *nth* vector in the recommended vector
  * The first element in the temp vector is the index of the vector within the required vector that the recommendations corresponds to
  * The temp vector will have the *k* most common courses (based off the data in sortedCounts) in the *nth* vector in the recommended vector such that the the sum of the crdits for the *k* courses is greater than or equal to the number of credits needed for that particular choice
6. Replace the *nth* vector in the recommended vector with the temp vector
