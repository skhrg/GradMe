#include "Major.h"

class Student
{
  int university;
  int requiredCredits;
  std::vector<Major> majors;
  std::vector<int> taken;
  std::vector<std::vector<int>> required;
  std::vector<std::vector<int>> remaining;
  std::vector<std::vector<int>> recommended;
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
    void calculateRemaining();
    void calculateRecommended();
    std::vector<std::vector<int>> getRequired();
    std::vector<std::vector<int>> getRemaining();
    std::vector<std::vector<int>> getRecommended();
    

};
