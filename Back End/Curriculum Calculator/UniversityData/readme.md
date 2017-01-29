#Guide to Inputting Major/Course Data
##Introduction
This is a guide to inputting major and course data in a format that the Curriculum Calculator program can process. 
In this guide, I will go over the formatting for the course ID format, the shiz ID format, and the major requirements format.
As an example, I will be inputting the data from the Johns Hopkins University Applied Mathematics and Statistics major, which can be found here: http://e-catalog.jhu.edu/departments-program-requirements-and-courses/engineering/applied-mathematics-statistics/#undergraduatetext.
If you have any questions regarding this guide, email me at bbao2@jhu.edu or message me on Discord.

##Course ID Formatting
In this program, every course required for a major will be stored in the form of a 19 digit integer. You will be entering these into the major requirements later on: 

####(Department, 3 digits)(Course Number, 5 digits)(Number of Credits, 2 digits)(Resident Credit, 1 digit)(Distribution 1, 1 digit)(Distribution 2, 1 digit)(Distribution 3, 1 digit)(Distribution 4, 1 digit)(Distribution 5, 1 digit)(Distribution 6, 1 digit)(Distribution 7, 1 digit)(Distribution 8, 1 digit)

* Note: You MUST fill all digits out with 0s, so even if a course number is simply 301, you must fill it out as 00301. It is OK if the 0s in the front of the number disappear.

####Values
* Department: The department of the course. If it is a number it will be the number, if it is a letter designation you will have to look up department IDs in a seperate file
* Course Number: The number of the course
* Number of Credits: The credits of the course. Multiplied by the credit multiplied located in /UniversityData/CreditMultiplierMap.h
* Resident Credit: 1 for taken at the university, 0 for taken elsewhere. Should always be 1 for requirements, as they are taken at the university.
* Distributions: 1 for fulfilling the distribution, 0 for not. The list of what the distributions stand for can be found at /UniversityData/CreditMultiplierMap.h

First, gather all the relevant university information - the distributions and the credit multiplier. So for Johns Hopkins University, these values would be:

Distributions: 1:Writing Intensive 2:Humanities 3:Natural Sciences 4:Social and Behavioral Sciences 5:Quantitative and Mathematical Sciences 6:Engineering
Credit multiplier: 2

The distribution values represent which distribution digit in the course ID cooresponds to that distribution requirement. On the other hand, the credit multiplier represents the number that you will multiply all course credits by, before putting that number in the course ID.


Let's move on to an example:

https://i.snag.gy/m7fhek.jpg

This is the first course required on the Applied Mathematics and Statistics Major that was linked earlier. From the text box, we can see that the department number is 110 and the course number is 106. The credits of the course is 4, so when multiplied by the credit multiplier (4 * 2) the credits in the value will be 8. Also, since the focus area is Quantitative and Mathematical Sciences, the value for distribution 5 will be 1 (while the rest will be 0).

Thus, the course ID for this course will be: 1100010608100001000.



One more example:

https://i.snag.gy/O0tzHV.jpg

The department is 500, the course number is 200, the credit number is (4 * 2) = 8, and the focus areas are Engineering and Quantitative and Mathematical Sciences so the values for distribution 5 and 6 will be 1 (and the rest will be 0).

The course ID will be: 500002000800001100.

##Shiz Formatting
Shiz is a type of major requirement format (as will further be explained in the major requirement section). Its primary purpose is to fulfill distribution requirements (i.e. 16 credits of humanities) or general major requirements (12 credits of Mathematics major classes with a level of 300 or higher). Shiz will be stored in the form of an 18 digit integer. You will also be entering these into the major requirements later on: 

####(Minimum Level, 5 digit)(Minimum Credits, 2 digit)(Department, 3 digits)(Distribution 1, 1 digit)(Distribution 2, 1 digit)(Distribution 3, 1 digit)(Distribution 4, 1 digit)(Distribution 5, 1 digit)(Distribution 6, 1 digit)(Distribution 7, 1 digit)(Distribution 8, 1 digit)

* Again: You MUST fill all digits out with 0s, so even if a course number is simply 301, you must fill it out as 00301. It is OK if the 0s in the front of the number disappear.

####Values
* Minimum Level: The minimum level of class that will be accepted for the requirement.
* Minimum Credits: The minimum required credits that courses must have in order to fulfill this requirement.
* Department: The department of the course, IF required. Otherwise, enter 000.
* Distributions: 1 for accepted for the requirement, 0 for not. The list of what the distributions stand for can be found at /UniversityData/CreditMultiplierMap.h

Here is an example:


https://i.snag.gy/C4R0Yz.jpg

There are two seperate requirements here: one for the upper-level courses only, and 

First requirement: There is no department requirement (so 000) or minimum credit requirement (00), but Quantitative Studies falls under distribution 5 (whose value will be 1, and the rest of the distributions will be 0). The minimum level requirement is 300, so its value will be 00300.

Thus, the shiz ID will be: 003000000000001000.

Second requirement: There is no department requirement (so 000) or minimum credit requirement (00), but Quantitative Studies falls under distribution 5 (whose value will be 1, and the rest of the distributions will be 0). There is no minimum level requirement, so its value will be 00000.

The shiz ID will be: 000000000000001000.



Here is another example (not from this major):


https://i.snag.gy/NiOEvG.jpg

There are no distribution requirements, so all distribution values will be 0. The minimum credit is 4 (so 4 * 2 = 08), the department requirement is 110 (which was found on the relevant requirements page), and the minimum level requirement is 300 (so 00300).

The shiz ID will be: 003000811000000000.

##Major Requirements Formatting
Let's take a look at what information we will need to fully input a major into the system:
University, Department, Required Courses, Choice Courses, Shiz, Options, Not Requirement, Degree, Required Credits, and Required Resident Credits

####Definitions
* University: University of the major, look up the university ID in /UniversityData/CreditMultiplierMap.h
* Department: The department of the major. Should be easily found on the course requirements page (and is generally part of required course IDs), if it has letters or cannot be found you will have to look up department IDs in a seperate file
* Required Courses: Courses that absolutely MUST be taken for the major. Will be designated with an ID of 0. Formatting will be explained further in detail later
* Choice Courses: A list of courses that the student can choose from that they must take a certain amount of credits or courses from. Will be designated with an ID of 1. Formatting will be explained further in detail later
* Shiz: Requirements related to distribution requirements or major/department classes of a certain level. Will be designated with an ID of 2. Formatting will be explained further in detail later
* Options: For more complex branches in which the student must fulfill all requirements under a single branch. Focus areas will fall under options. Will be designated with an ID of 3, with Required Courses, Choice Courses, and Shiz under an option designated respectively with 30, 31, and 32. Formatting will be explained further in detail later
* Not Requirement: Requirements that you must take a certain amount of courses NOT of a certain department. Will be designated with an ID of 4. It is highly unlikely that you will encounter these, as they will be used almost exclusively for general Arts and Sciences and Engineering major distribution requirements
* Degree: The type of degree - 0 for Arts and Sciences B.S., 1 for Arts and Sciences B.A., 2 for Engineering B.S., 3 for Engineering B.A., more to come later
* Required Credits: Total amount of credits to receive degree. If the total is not shown on the requirements page, add up the required credits
* Required Resident Credits: Leave this as 0

For entering the data, we will be using a Google Docs (Excel has a digit limit of 16, so it won't work). Make a seperate sheet for each major, and work inside the Web Dev Team/Back-End/Major_Data Google Drives folder. Go to Format -> Number -> More Formats -> Custom Number Format... -> The first option.
In cell A1, type out the name of the university.
In cell B1, type out the full name of the major. Include the type of degree (i.e. B.S., B.A., M.S., etc).
In cell A2, enter the University ID. Don't worry if 0s dissapear in the front, as they are not important in this part.
In cell B2, enter the Department ID.
In cell C2, enter the Degree Type ID.
In cell D2, enter the Required Credits (DON'T forget to multiply this number by the credit multiplier)
In cell E2, enter 0.

At this point, the spreadsheet should look like this:
https://i.snag.gy/mXghrj.jpg

Now, in the following rows we will be entering all course requirements. The first column is always used for requirement ID (0 for Required Courses, 1 for Choice Courses, 2 for Shiz, 3 for Option).
Note: When there is a range of possible required credits (i.e. 7-8) select the lowest possible number.

Required Courses: In row 3, enter 0 in cell A3 (this is the ID). Then, enter the course ID every required course in every subsequent adjacent column.

I will be using X for the row number as the row number may vary from this point on.

* Choice Courses: 
In row X, enter 1 in cell AX. Then, in cell BX enter the number of credits required for this choice (DON'T forget to multiply this number by the credit multiplier). Finally, enter the course ID for every possible course in this choice.

Example: https://i.snag.gy/3STYLF.jpg

Should look like this: https://i.snag.gy/z0hHKn.jpg




* Shiz: 
In row X, enter 2 in cell AX. Then, in cell BX enter the number of credits required for this shiz (DON'T forget to multiply this number by the credit multiplier). Finally, enter the shiz ID for every shiz in this choice. While these will generally only have 1 ID, it may be possible that there are more than one (i.e. take 8 credits of 300 level or higher math or physics classes would require 2 shiz ID entries, but still on the same row).

Example: https://i.snag.gy/C4R0Yz.jpg

This one is a bit tricky because this is actually 2 requirements disguised as one. The requirements, distinctly, are 18 credits of 300 level Quantitative Studies credits, and 40 credits of Quantitative Studies credits.

Should look like this: https://i.snag.gy/14Kged.jpg




* Options:
In row X, enter 3 in cell AX. Now, subsequently entries in row X will be for the ending row of every option (more than 2 are possible) relative to the original row. For example, if the option has 3 options, and option A ends 3 rows after the 'option' row (with ID of 3), option B ends 6 rows after the 'option' row, and option C ends 7 rows after the 'option' row, then the row with the ID of 3 will look like {0, 3, 6, 7}. In subsequent rows, enter Required Courses, Choice Courses, and Shiz how you normally would except instead of using IDs 0, 1, 2 you will use IDs 30, 31, and 32.

Example: https://i.snag.gy/2JFruK.jpg

Should look like this: https://i.snag.gy/WH2KoG.jpg




Here is the link to the finished example: https://docs.google.com/spreadsheets/d/1h5rSxijfncQOnCc3DfDWXB6fwOqnTgiG-lP3RzsWqtQ/edit?usp=sharing

Organize the rows so that everything is in order (the 0 id row should be followed with all the 1s, then 2s, then 3/30/31/32s, but keep the order of the option rows).

There is no need for empty rows, so don't skip rows between types of requirements.

MAKE SURE to check that you have created individual majors requirements for the B.A. and B.S. version of majors. They have different requirements so they will be handled as seperate majors for all intent and purposes by the program.

DO NOT include general distribution requirements required by all majors under Arts and Sciences or Engineering - they will be placed in a seperate class handled by me.

Finally, check that all the values that you enter are correct, as the program will not properly run without the correct information. 


Thanks for helping out!
