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
