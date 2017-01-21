#include <vector>

class Major
{
  int department, university, focusArea;
  std::vector<long> reqCourses;
  std::vector<std::vector<long>> choiceCourses;
  std::vector<long> shiz;
  int degree;                   //Distinguishes between type of degree: 0 for B.A, 1 for B.S., more to add later
  int reqCredits;
  public:
    Major(int, int, std::vector<long>, std::vector<std::vector<long>>, std::vector<std::vector<long>>, int, int, int);
    int getDepartment();
    int getUniversity();
    std::vector<long> getReqCourses();
    std::vector<std::vector<long>> getChoiceCourses();
    std::vector<std::vector<long>> getShiz();
    int getDegree();
    int getFocusArea();
    int getReqCredits();
};
