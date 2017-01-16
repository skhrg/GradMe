#include "Major.h"
using namespace std;

class Student
{
  int university;
  Major* majors;
  int* taken;
  public:
    Student(int);
    int getUniversity();
    Major* getMajors();
    int* getTaken();
};
