// GPACalculator.cpp : Defines the entry point for the console application.
// Easily rewritable in javascript, just switch vectors to arrays

#include <string>
#include <iostream>
#include <iomanip>
#include <vector>
#include <algorithm>

int main()
{
	std::vector<std::string> courseName = {};	//could be imported from csv file, array from other part of program, etc in actual implementation
	std::vector<std::string> grades = {};		//in which case the entire menu would be scrapped
	std::vector<int> credits = {};

	double GPA = 0, gradeAp, gradeA, gradeAm, gradeBp, gradeB, gradeBm, gradeCp, gradeC, gradeCm, gradeDp, gradeD, gradeDm, gradeF, tempGrade = 0, totalCredits = 0, gradeValue = 0;
	int choice, tempCredits;
	std::string tempName;
	bool check = 0;
	std::cout << "Select an option:\n";				//this can be inputted with some default value from a college settings file
	std::cout << "1:\t2:\t3:\t\n";
	std::cout << "A+:4.00\tA+:4.00\tA:4.00\n";
	std::cout << "A:4.00\tA:4.00\tB:3.00\n";
	std::cout << "A-:3.70\tA-:3.67\tC:2.00\n";
	std::cout << "B+:3.30\tB+:3.33\tD:1.00\n";
	std::cout << "B:3.00\tB:3.00\tF:0.00\n";
	std::cout << "B-:2.70\tB-:2.67\n";
	std::cout << "C+:2.30\tC+:2.33\n";
	std::cout << "C:2.00\tC:2.00\n";
	std::cout << "C-:1.70\tC-:1.67\n";
	std::cout << "D+:1.30\tD+:1.33\n";
	std::cout << "D:1.00\tD:1.00\n";
	std::cout << "D-:0.70\tD-:0.67\n";
	std::cout << "F:0.00\tF:0.00\n";
	/*
	#include <fstream>
	std::string collegeName;
	std::cin >> collegeName;
	ifstream input(collegeName + "GPASetting.txt");		//assuming the only info in the txt file is that specific settings
	input >> choice;
	*/
	while (check == 0)
	{
		std::cin >> choice;
		if (choice == 1 || choice == 3)
		{
			gradeAp	=	4.00;
			gradeA	=	4.00;
			gradeAm =	3.70;
			gradeBp =	3.30;
			gradeB	=	3.00;
			gradeBm =	2.70;
			gradeCp =	2.30;
			gradeC	=	2.00;
			gradeCm =	1.70;
			gradeDp =	1.30;
			gradeD	=	1.00;
			gradeDm =	0.70;
			gradeF	=	0.00;
			check = 1;
		}
		else if (choice == 2)
		{
			gradeAp	= 4.00;
			gradeA	= 4.00;
			gradeAm = 3.67;
			gradeBp = 3.33;
			gradeB	= 3.00;
			gradeBm = 2.67;
			gradeCp = 2.33;
			gradeC	= 2.00;
			gradeCm = 1.67;
			gradeDp = 1.33;
			gradeD	= 1.00;
			gradeDm = 0.67;
			gradeF	= 0.00;
			check = 1;
		}
		else
		{
			std::cout << "\nSelect a valid option.\n";
		}
	}
	for (;;)
	{
		totalCredits = 0;
		gradeValue = 0;
		std::cout << "\nCourse                                                \tCredits\tGrade\n";
		for(int i = 0; i < courseName.size();i++)
		{
			std::cout << i+1 << ": " << std::setw(50) << courseName[i] << "\t" << credits[i] << "\t" << grades[i] << "\n";
			totalCredits += credits[i];
			if (grades[i] == "a+") { tempGrade = gradeAp; }
			else if (grades[i] == "a") { tempGrade = gradeA; }
			else if (grades[i] == "a-") { tempGrade = gradeAm; }
			else if (grades[i] == "b+") { tempGrade = gradeBp; }
			else if (grades[i] == "b") { tempGrade = gradeB; }
			else if (grades[i] == "b-") { tempGrade = gradeBm; }
			else if (grades[i] == "c+") { tempGrade = gradeCp; }
			else if (grades[i] == "c") { tempGrade = gradeC; }
			else if (grades[i] == "c-") { tempGrade = gradeCm; }
			else if (grades[i] == "d+") { tempGrade = gradeDp; }
			else if (grades[i] == "d") { tempGrade = gradeD; }
			else if (grades[i] == "d-") { tempGrade = gradeDm; }
			else if (grades[i] == "f") { tempGrade = gradeF; }
			gradeValue += tempGrade * credits[i];
			GPA = gradeValue / totalCredits;
		}
		std::cout << "Total Credits: " << totalCredits << "\tOverall GPA: " << GPA << "\n\n";
		std::cout << "Select Option:\n" << "1: Enter Course\n" << "2: Delete Course\n" << "3: Exit\n";
		std::cin >> choice;
		if (choice == 1)
		{
			std::cout << "Enter Course Name: ";
			std::cin.get();
			std::getline(std::cin, tempName);
			courseName.push_back(tempName);
			std::cout << "\nEnter Grade: ";
			std::cin >> tempName;
			std::transform(tempName.begin(), tempName.end(), tempName.begin(), ::tolower);
			grades.push_back(tempName);
			std::cout << "\nEnter Number of Credits: ";
			std::cin >> tempCredits;
			credits.push_back(tempCredits);
		}
		if (choice == 2)
		{
			std::cout << "Select a course to remove:";
			std::cin >> choice;
			courseName.erase(courseName.begin() + choice - 1);
			grades.erase(grades.begin() + choice - 1);
			credits.erase(credits.begin() + choice - 1);
		}
		if (choice == 3)
		{
			break;
		}
		else
		{
			std::cout << "\nSelect a valid option.\n";
		}
	}
	

	system("pause");
    return 0;
}

