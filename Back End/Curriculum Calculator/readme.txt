Definition and example:
reqCourses: Courses that are required for your major
choiceCourses: TODO
shiz: I actually forgot what this was TODO
degree: The type of degree. 0 for BA, 1 for BS, more to come

How the course/class identifed int is set up:
TODO
First 5 digits are university, etc
Be sure to include: number of credits, university, department, distribution

Regarding the choice courses and shiz vector, the first member of the vector should be the total amount of credits required for the option
i.e. 12 credits of the following courses are required, vector example = {12, ID1, ID2, ID3, ID4, etc}
Do this even when its like choose 1 of 2 courses, just make it {3, ID1, ID2}
