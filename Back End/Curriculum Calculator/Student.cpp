#include "Student.h"

Student::Student(int uni)
{
  university = uni;
}

int Student::getUniversity()
{
  return university;
}

int Student::getRequiredCredits()
{
  return requiredCredits;
}

std::vector<Major> Student::getMajors()
{
  return majors;
}

void Student::addMajor(Major major)
{
  if(major.getUniversity() == university)
  {
    majors.push_back(major);
  }
}

void Student::removeMajor(int dep)
{
  for(vector<Major>::iterator i = majors.begin(); i < majors.end(); i++)
  {
    if(majors[i].getDepartment() == dep)
    {
      majors.erase(i);
    }
  }
}

std::vector<int> Student::getTaken()
{
  return taken;
}

void Student::addTaken(int course)
{
  taken.push_back(course);
}

void Student::removeTaken(int course)
{
  for(std::vector<int>::iterator i = taken.begin(); i < taken.end(); i++)
  {
    if(taken[i] == course)
    {
      taken.erase(i);
    }
  }
}

void calculateRequired()
{
  required.clear();
  requiredCredits = 0;
  for(int i = 0 ; i < majors.size() ; i++)
  {
    if (majors[i].getReqCredits > requiredCredits)
    {
      requiredCredits = majors[i].getReqCredits;
    }
    for (int i = 0 ; majors[i].getReqCourses().size() ; i++)
    {
      //Decision - store compiled course list in 1 or 3 variables?
      //Having student stored reqs, parse through comparing values of incoming vector to avoid duplicates
    }
  }
}

std::vector<std::vector<int>> Student::getRequired()
{
  return required;
}
