using namespace std;

class Major
{
  int department, university;
  int* reqCourses;
  int** choiceCourses;
  int* shiz;
  int* distReq;
  public:
    Major(int, int, int*, int**, int*, int*);
    int getDepartment();
    int getUniversity();
    int* getReqCourses();
    int** getChoiceCourses();
    int* getShiz();
    int* getDistReq();
};
