#include "Major.h"

Major::Major(int dep, int uni, std::vector<int> req, std::vector<std::vector<int>> choice, std::vector<int> shit, std::vector<int> dist, bool deg)
{
  department = dep;
  university = uni;
  reqCourses = req;
  choiceCourses = choice;
  shiz = shit;
  distReq = dist;
  degree = deg;
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

std::vector<int> Major::getShiz()
{
  return shiz;
}

std::vector<int> Major::getDistReq()
{
  return distReq;
}

bool Major::getDegree()
{
  return degree;
}
