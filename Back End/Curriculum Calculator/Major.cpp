class Major
{
  int department, university;
  int[] reqCourses, shiz, distReq;
  int[][] choiceCourses;
  public:
    Major(int, int, int[], int[][], int[], int[]);
};

Major::Major(int dep, int uni, int[] req, int[][] choice, int[] shit, int[] dist)
{
  department = dep;
  university = uni;
  reqCourses = req;
  choiceCourses = choice;
  shiz = shit;
  distReq = dist;
}

int Major::getDepartment()
{
  return department;
}

int Major::getUniversity()
{
  return university;
}

int* Major::getReqCourses()
{
  return reqCourses;
}

int* Major::getChoiceCourses()
{
  return choiceCourses;
}

int* Major::getShiz()
{
  return shiz;
}

int* Major::getDistReq()
{
  return distReq;
}
