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

int Student::getRemainingCredits()
{
  return remainingCredits;
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
  bool tempValue2 = false;
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
		tempValue = false;
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
					if (required[k][1] < 0)
					{
					 required[k][1] = 0;
					}
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
					if (required[k][1] < 0)
					{
					 required[k][1] = 0;
					}
				}
			}
			if (required[k][1] == 0)
			{
				required.erase[k];
			}
		 }
		 else if (required[k][0] == 3)
		 {
		    FML.clear();
			FML = required[k];
			FML[0] = - 1;
			k += FML.size();
			for (int z = FML[1] + k; z < FML.back() + k;z++)
			{
		if (required[z][0] == 1)
         {

			for (int l = 2 ; l < required[z].size() ;)
			{
				if (majors[i].getReqCourses()[j] == required[z][l])
				{
					required[z][1] -= ((((required[z][l] / 100000000)% 10) * 10) + ((required[z][l] / 10000000)% 10));

					if (required[z][1] < 0)
					{
					 required[z][1] = 0;
					}
					required[z].erase(l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
				}
				else
				{
					l++;
				}
			}
         }
         else if (required[z][0] == 2)
		 {
			for (int l = 2 ; l < required[z].size() ; l++)
			{
				if((required[z][l]/10000000000 <= (majors[i].getReqCourses()[j]/100000000000)%10 &&
				(required[z][l]/1000000000)%10 <= (((majors[i].getReqCourses()[j]/100000000)%10) * 10 ) &&
				((((required[z][l][j] / 100000000)%10)*100) + (((required[z][l] / 10000000)%10)*10) + (required[z][l] / 1000000)%10) ==
				((((majors[i].getReqCourses()[j] / 100000000000000)%10)*100) + (((majors[i].getReqCourses()[j] / 10000000000000)%10)*10)
				+ (majors[i].getReqCourses()[j] / 1000000000000)%10)) || ((required[z][l]/100000)%10 == (majors[i].getReqCourses()[j]/100000)%10)
				|| ((required[z][l]/10000)%10 == (majors[i].getReqCourses()[j]/10000)%10) || ((required[z][l]/1000)%10 == (majors[i].getReqCourses()[j]/1000)%10)
				|| ((required[z][l]/100)%10 == (majors[i].getReqCourses()[j]/100)%10) || ((required[z][l]/10)%10 == (majors[i].getReqCourses()[j]/10)%10)
				|| (required[z][l]%10 == majors[i].getReqCourses()[j]%10))
				{
					required[z][1] -= ((((required[z][l] / 100000000)% 10) * 10) + ((required[z][l] / 10000000)% 10));

					if (required[z][1] < 0)
					{
					 required[z][1] = 0;
					}
				}
			}
		 }
			}
			for (int z = k; z < FML.size() + k - 1; z++)
			{
				tempValue2 = false;
				for (int y = FML[z] + 1 + k ; y <= FML[z+1] + k ; y++)
				{
					if(required[y][1] != 0)
					{
						tempValue2 = true;
					}
					if(tempValue2 == false)
					{
					break;
					}
				}
				if(tempValue2 == false)
				{
				break;
				}
			}
			if(tempValue2 == false)
			{
				for(int z = FML.back() + k ;z > FML[0] + k;z--)
				{
					required.erase(z);
				}
			}
			else
			{
				for(int z = FML.back() + k ;z > FML[0] + k + 1;z--)
				{
					if (required[z][1] == 0)
					{
						required.erase(z);
						for (int y = 1 ; y < FML.size() ; y++)
						{
							if(FML[y] > z)
							{
								required[k][y]--;
							}
						}
					}
				}
			}
		 }
       }
    }
	for (int j = 0 ; j < majors[i].getReqCourses().size() ; j++)
	{

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

void calculateRecommended()
{
  recommended.clear();
  std::map<long,int> counts;
  std::vector<int> sortedCounts;
  for(std::vector<std::vector<long>>::iterator i = required.begin(); i < required.end(); i++)
  {
    if(required[i][0] == 1)
    {
      recommended.push_back(required[i]);
      for(std::vector<long>::iterator j = required[i].begin(); j < required[i].end(); j++)
      {
        counts[required[i][j]]++;
      }
    }
  }
  for(std::map<long,int>::interator z = counts.begin(); z < counts.end(); z++)
  {
    sortedCounts.push_back(z->second);
  }
  std::sort(sortedCounts.rbegin(), sortedCounts.rend());
  for(std::vector<std::vector<long>>::iterator k = recommended.begin(); k < recommended.end(); k++)
  {
    std::vector<long> temp;
    int credits = recommended[k][1];
    for(int x = 0, x < sortedCounts.size(), x++)
    {
      for(std::vector<long>::iterator l = 2; l < recommended[k].end(); l++)
      {
        if(counts[recommended[k][l]] == sortedCounts[x])
        {
          temp.push_back(recommended[k][l]);
          credits -= ((((required[k][l]/100000000)%10)*10) + (required[k][l]/10000000)%10);
        }
      }
      if(credits <= 0)
      {
        break;
      }
    }
    recommended[k] = temp;
  }
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
