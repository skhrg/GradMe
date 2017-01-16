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

std::vector<int> Student::getTaken()
{
  return taken;
}
