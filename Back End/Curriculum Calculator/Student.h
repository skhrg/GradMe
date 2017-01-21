#include "Major.h"

class Student
{
  int university;
  std::vector<Major> majors;
  std::vector<int> taken;
  std::vector<std::vector<int>> required;
  public:
    Student(int);
    int getUniversity();
    std::vector<Major> getMajors();
    void addMajor(Major);
    void removeMajor(int);
    std::vector<int> getTaken();
    void addTaken(int);
    void removeTaken(int);
    void calculateRequired();
    std::vector<std::vector<int>> getRequired();
};
