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

std::vector<int> Student::getTaken()
{
  return taken;
}

void Student::addTaken(int course)
{
  taken.push_back(course);
}
