#include "Major.h"

Major::Major(int uni, int dep, std::vector<long> req, std::vector<std::vector<long>> choice, std::vector<std::vector<long>> shit, std::vector<std::vector<long>> optionz, int deg, int foc, int reqc, int reqr)
{
  university = uni;
  department = dep;
  reqCourses = req;
  choiceCourses = choice;
  shiz = shit;
  option = optionz;
  degree = deg;
  focusArea = foc;
  reqCredits = reqc;
  residentCredits = reqr;
}

int Major::getDepartment()
{
  return department;
}

int Major::getUniversity()
{
  return university;
}

std::vector<long> Major::getReqCourses()
{
  return reqCourses;
}

std::vector<std::vector<long>> Major::getChoiceCourses()
{
  return choiceCourses;
}

std::vector<std::vector<long>> Major::getShiz()
{
  return shiz;
}

std::vector<std::vector<long>> Major::getOption()
{
  return option;
}

int Major::getDegree()
{
  return degree;
}

int Major::getFocusArea()
{
  return focusArea;
}

int Major::getReqCredits()
{
  return reqCredits;
}

int Major::getResidentCredits()
{
  return residentCredits;
}
