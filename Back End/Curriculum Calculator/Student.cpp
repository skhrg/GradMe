#include "Student.h"

Student::Student(int uni)
{
  university = uni;
}

int Student::getUniversity()
{
  return university
}

Major* Student::getMajors()
{
  return majors;
}

int* Student::getTaken()
{
  return taken;
}
