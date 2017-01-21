#include "Major.h"

Major::Major(int dep, int uni, std::vector<long> req, std::vector<std::vector<long>> choice, std::vector<std::vector<long>> shit, int deg, int foc, int reqC)
{
  department = dep;
  university = uni;
  reqCourses = req;
  choiceCourses = choice;
  shiz = shit;
  degree = deg;
  focusArea = foc;
  reqCredits = reqc;
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
