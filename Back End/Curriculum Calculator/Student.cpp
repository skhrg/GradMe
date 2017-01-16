class Student
{
  int university;
  Major* majors;
  int* taken;
  public:
    Student(int);
};

Student::Student(int uni)
{
  university = uni;
}
