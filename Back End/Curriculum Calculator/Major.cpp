#include "Major.h"

Major::Major(int dep, int uni, std::vector<int> req, std::vector<std::vector<int>> choice, std::vector<std::vector<int>> shit, int deg, int foc, int reqC)
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

std::vector<int> Major::getReqCourses()
{
  return reqCourses;
}

std::vector<std::vector<int>> Major::getChoiceCourses()
{
  return choiceCourses;
}

std::vector<std::vector<int>> Major::getShiz()
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
