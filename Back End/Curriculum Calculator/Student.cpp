#include "Student.h"

Student::Student(int uni)
{
  university = uni;
}

int Student::getUniversity()
{
  return university
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
      majors.remove(i);
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
      taken.remove(i);
    }
  }
}
