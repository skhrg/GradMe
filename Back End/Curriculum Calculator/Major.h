#include <vector>

class Major
{
  int department, university, focusArea;
  std::vector<int> reqCourses;
  std::vector<std::vector<int>> choiceCourses;
  std::vector<int> shiz;
  std::vector<int> distReq;
  int degree;
  public:
    Major(int, int, std::vector<int>, std::vector<std::vector<int>>, std::vector<int>, std::vector<int>, int, int);
    int getDepartment();
    int getUniversity();
    std::vector<int> getReqCourses();
    std::vector<std::vector<int>> getChoiceCourses();
    std::vector<int> getShiz();
    std::vector<int> getDistReq();
    int getDegree();
    int getFocusArea();
};
