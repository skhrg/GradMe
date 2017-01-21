#include "Major.h"

class Student
{
  int university;
  int requiredCredits;
  std::vector<Major> majors;
  std::vector<int> taken;
  std::vector<std::vector<int>> required;
  public:
    Student(int);
    int getUniversity();
    int getRequiredCredits();
    std::vector<Major> getMajors();
    void addMajor(Major);
    void removeMajor(int);
    std::vector<int> getTaken();
    void addTaken(int);
    void removeTaken(int);
    void calculateRequired();
    std::vector<std::vector<int>> getRequired();

};
