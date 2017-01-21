#include "Student.h"


Student::Student(int uni)
{
  university = uni;
}

int Student::getUniversity()
{
  return university;
}

int Student::getRequiredCredits()
{
  return requiredCredits;
}

std::vector<Major> Student::getMajors()
{
  return majors;
}

void Student::addMajor(Major major)
{
  if(major.getUniversity() == university)
  {
    majors.push_back(major);
  }
}

void Student::removeMajor(int dep)
{
  for(vector<Major>::iterator i = majors.begin(); i < majors.end(); i++)
  {
    if(majors[i].getDepartment() == dep)
    {
      majors.erase(i);
    }
  }
}

std::vector<long> Student::getTaken()
{
  return taken;
}

void Student::addTaken(int course)
{
  taken.push_back(course);
}

void Student::removeTaken(int course)
{
  for(std::vector<long>::iterator i = taken.begin(); i < taken.end(); i++)
  {
    if(taken[i] == course)
    {
      taken.erase(i);
    }
  }
}

void calculateRequired()
{
  required.clear();
  requiredCredits = 0;
  bool tempValue = false;
  std::vector<long> FML;
  vector
  for(int i = 0 ; i < majors.size() ; i++)
  {
    if (majors[i].getReqCredits > requiredCredits)
    {
      requiredCredits = majors[i].getReqCredits;
    }
    for (int j = 0 ; j < majors[i].getReqCourses().size() ; j++)
    {
      for (int k = 0 ; k < required[0].size() ; k++)
      {
        if (majors[i].getReqCourses()[j] == required[0][k])
        {
		  tempValue = true;
          break;
        }
      }
	  if (tempValue == false)
	  {
		required[0].push_back(majors[i].getReqCourses()[j];
	  }
      for (int k = 1 ; k < required.size() ; k++)
       {
         if (required[k][0] == 1)
         {
			
			for (int l = 2 ; l < required[k].size() ;)
			{
				if (majors[i].getReqCourses()[j] == required[k][l])
				{
					required[k][1] -= ((((required[k][l] / 100000000)% 10) * 10) + ((required[k][l] / 10000000)% 10)); 
					required[k].erase(l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
				}
				else
				{
					l++;
				}
			}
			if (required[k][1] == 0)
			{
				required.erase[k];
			}
         }
         else if (required[k][0] == 2)
		 {
			for (int l = 2 ; l < required[k].size() ; l++)
			{
				if((required[k][l]/10000000000 <= (majors[i].getReqCourses()[j]/100000000000)%10 && 
				(required[k][l]/1000000000)%10 <= (((majors[i].getReqCourses()[j]/100000000)%10) * 10 ) && 
				((((required[k][l][j] / 100000000)%10)*100) + (((required[k][l] / 10000000)%10)*10) + (required[k][l] / 1000000)%10) ==
				((((majors[i].getReqCourses()[j] / 100000000000000)%10)*100) + (((majors[i].getReqCourses()[j] / 10000000000000)%10)*10)
				+ (majors[i].getReqCourses()[j] / 1000000000000)%10)) || ((required[k][l]/100000)%10 == (majors[i].getReqCourses()[j]/100000)%10)
				|| ((required[k][l]/10000)%10 == (majors[i].getReqCourses()[j]/10000)%10) || ((required[k][l]/1000)%10 == (majors[i].getReqCourses()[j]/1000)%10)
				|| ((required[k][l]/100)%10 == (majors[i].getReqCourses()[j]/100)%10) || ((required[k][l]/10)%10 == (majors[i].getReqCourses()[j]/10)%10)
				|| (required[k][l]%10 == majors[i].getReqCourses()[j]%10))
				{
					required[k][1] -= ((((required[k][l] / 100000000)% 10) * 10) + ((required[k][l] / 10000000)% 10));
				}
			}
			if (required[k][1] == 0)
			{
				required.erase[k];
			}
		 }
		 else if (required[k][0] == 3)
		 {
			
		 }
       }
    }
	for (int j = 0 ; j < majors[i].getReqCourses().size() ; j++)
	{
		
	}
	
  }
}

//NEW
void calculateRemaining()
{
}

//NEW
void calculateRecommended()
{
}

std::vector<std::vector<long>> Student::getRequired()
{
  return required;
}

std::vector<std::vector<long>> Student::getRemaining()
{
  return remaining;
}

std::vector<std::vector<long>> Student::getRecommended()
{
  return recommended;
}
