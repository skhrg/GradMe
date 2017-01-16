#include "Major.h"
using namespace std;

class Student
{
  int university;
  std::vector<Major> majors;
  std::vector<int> taken;
  public:
    Student(int);
    int getUniversity();
    std::vector<Major> getMajors();
    std::vector<int> getTaken();
};
