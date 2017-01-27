//This file includes a map for the multiplier for all credits for a university in the data
//This is so that we can store credit numbers as an integer while accomodating for programs that use half credits (or even 1/3, 1/4).
//When taken up to the front-end, the displayed credits should all be divided by the mapped number for the cooresponding university
//Divide the displayed credits for all course credits AND major required credits 
//alternatively, this info can be stored elsewhere but not in this program's scope.
//For instance, if the value is 2, divide all values to be displayed by 2 because it is currently being multiplied by a factor of 2

//Please check this file before you enter any course ID data.

//Also, please include the designations for each distribution requirement credit here.

#include <map>

map<int, int> creditMultiplier =    //University ID, multiplier
{

{0000, 2},                          //The Johns Hopkins University    1:Writing Intensive 2:Humanities 3:Natural Sciences 4:Social Sciences 5:Quantitative Sciences 6:Engineering

};
