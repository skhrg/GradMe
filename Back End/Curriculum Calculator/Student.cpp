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

void Student::addTaken(long course)
{
  taken.push_back(course);
}

void Student::removeTaken(long course)
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
  bool tempValue;
  bool tempValue2;
  bool tempValue3;
  bool tempValue4;
  int tempCredits;
  std::vector<long> reqCourses;
  std::vector<std::vector<long>> choiceCourses;
  std::vector<std::vector<long>> shiz;
  std::vector<std::vector<long>> option;
  std::vector<std::vector<long>> temp1;
  std::vector<std::vector<long>> temp2;
  for(int i = 0 ; i < majors.size() ; i++)
  {
    if (majors[i].getReqCredits > requiredCredits)
    {
      requiredCredits = majors[i].getReqCredits;
    }
	reqCourses = majors[i].getReqCourses();
	choiceCourses = majors[i].getChoiceCourses();
	shiz = majors[i].getShiz();
	option = majors[i].getOption();
    for (int j = 0 ; j < reqCourses.size() ; j++)
    {
		tempValue = false;	
      for (int k = 0 ; k < required[0].size() ; k++)
      {
        if (reqCourses[j] == required[0][k])
        {
		  tempValue = true;
          break;
        }
      }
	  if (tempValue == false)
	  {
		required[0].push_back(reqCourses[j];
	  }
      for (int k = 1 ; k < required.size() ; k++)
       {
         if (required[k][0] == 1)
         {
			
			for (int l = 2 ; l < required[k].size() ;)
			{
				if (reqCourses[j] == required[k][l])
				{
					required[k][1] -= ((((reqCourses[j] / 100000000)% 10) * 10) + ((reqCourses[j] / 10000000)% 10)); 
					/*if (required[k][1] < 0)
					{
					 required[k][1] = 0;
					}*/
					required[k].erase(l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
				}
				else
				{
					l++;
				}
			}
			if (required[k][1] < 0)
			{
				required.erase[k];
			}
         }
         else if (required[k][0] == 2)
		 {
			for (int l = 2 ; l < required[k].size() ; l++)
			{
				if((required[k][l]/10000000000 <= (reqCourses[j]/100000000000)%10 && 
				(required[k][l]/1000000000)%10 <= (((reqCourses[j]/100000000)%10) * 10 ) && 
				((((required[k][l] / 100000000)%10)*100) + (((required[k][l] / 10000000)%10)*10) + (required[k][l] / 1000000)%10) ==
				((((reqCourses[j] / 100000000000000)%10)*100) + (((reqCourses[j] / 10000000000000)%10)*10)
				+ (reqCourses[j] / 1000000000000)%10)) || ((required[k][l]/100000)%10 == (reqCourses[j]/100000)%10)
				|| ((required[k][l]/10000)%10 == (reqCourses[j]/10000)%10) || ((required[k][l]/1000)%10 == (reqCourses[j]/1000)%10)
				|| ((required[k][l]/100)%10 == (reqCourses[j]/100)%10) || ((required[k][l]/10)%10 == (reqCourses[j]/10)%10)
				|| (required[k][l]%10 == reqCourses[j]%10))
				{
					required[k][1] -= ((((reqCourses[j] / 100000000)% 10) * 10) + ((reqCourses[j] / 10000000)% 10));
					/*if (required[k][1] < 0)
					{
					 required[k][1] = 0;
					}*/
				}
			}
			if (required[k][1] < 0)
			{
				required.erase[k];
			}
		 }
		 else if (required[k][0] == 3) //PARTIALLY COPY PASTED MAY BE BUGGY
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
				if (reqCourses[j] == required[z][l])
				{
					required[z][1] -= ((((reqCourses[j] / 100000000)% 10) * 10) + ((reqCourses[j] / 10000000)% 10)); 
					
					/*if (required[z][1] < 0)
					{
					 required[z][1] = 0;
					}*/
					required[z].erase(l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
				}
				else
				{
					l++;
				}
			}
			if (required[z][1] < 0)
			{
				required.erase[z];
			}
         }
         else if (required[z][0] == 2)
		 {
			for (int l = 2 ; l < required[z].size() ; l++)
			{
				if((required[z][l]/10000000000 <= (reqCourses[j]/100000000000)%10 && 
				(required[z][l]/1000000000)%10 <= (((reqCourses[j]/100000000)%10) * 10 ) && 
				((((required[z][l] / 100000000)%10)*100) + (((required[z][l] / 10000000)%10)*10) + (required[z][l] / 1000000)%10) ==
				((((reqCourses[j] / 100000000000000)%10)*100) + (((reqCourses[j] / 10000000000000)%10)*10)
				+ (reqCourses[j] / 1000000000000)%10)) || ((required[z][l]/100000)%10 == (reqCourses[j]/100000)%10)
				|| ((required[z][l]/10000)%10 == (reqCourses[j]/10000)%10) || ((required[z][l]/1000)%10 == (reqCourses[j]/1000)%10)
				|| ((required[z][l]/100)%10 == (reqCourses[j]/100)%10) || ((required[z][l]/10)%10 == (reqCourses[j]/10)%10)
				|| (required[z][l]%10 == reqCourses[j]%10))
				{
					required[z][1] -= ((((reqCourses[j] / 100000000)% 10) * 10) + ((reqCourses[j] / 10000000)% 10));
					
					/*if (required[z][1] < 0)
					{
					 required[z][1] = 0;
					}*/
				}
			}
			if (required[z][1] < 0)
			{
				required.erase[z];
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
	/*
	choiceCourses = majors[i].getChoiceCourses();
	shiz = majors[i].getShiz();
	option = majors[i].getOption();
	*/
	for (int j = 0 ; j < choiceCourses.size() ; j++)
	{
		tempValue2 = true;
		for (int k = 2 ; k < choiceCourses[j].size() ;)
		{

			for (int l = 0 ; l < required[0].size() ; l++)
			{
				tempValue = true;
				if (required[0][l] == choiceCourses[j][k])
				{
					tempValue = false;
					choiceCourses[j][1] -= ((((choiceCourses[j][l] / 100000000)% 10) * 10) + ((choiceCourses[j][l] / 10000000)% 10));
					if (choiceCourses[j][1] < 0)
					{
					choiceCourses.erase(j);
					tempValue2 = false;
					}
					else
					{
					choicesCourses[j].erase(k);
					}
					break;
				}
			}
			for (int l = 1 ; l < required.size() && tempValue == true; )
			{
				tempValue3 = true;
				if (required[l][0] == 1)
				{
					if (std::includes(choiceCourses[j].begin(), choiceCourses[j].end(), required[l].begin(), required[l].end()))
					{
						choiceCourses.erase(j);
						tempValue2 = false;
						break;
					}
					if (std::includes(required[l].begin(), required[l].end(), choiceCourses[j].begin(), choiceCourses[j].end()))
					{
						required[l]=choiceCourses[j];
						choiceCourses.erase(j);
						tempValue2 = false;
						break;
						/*
						required.erase(l);
						tempValue3 = false;
						*/
					}
					//if required is completely contained within choicecourses, delete the incoming
					//if choicecourses is completely contained within include, delete include and leave choicecourses
					temp1 = choiceCourses[j];
					temp2 = required[l];
					temp1.erase(1);
					temp2.erase(1);
					if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end())&& std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
					{
						if (required[l][1] >= choiceCourses[j][l])
						{
							choiceCourses.erase(j);
							tempValue2 = false;
							break;
						}
						else
						{
							required[l]=choiceCourses[j];
							choiceCourses.erase(j);
							tempValue2 = false;
							break;
						/*
							required.erase(l);
							tempValue3 = false;
							*/
						}
					}
				}
				else if (required[l][0] == 2 && k == 2)
				{
				tempValue4 = true;
					//TODO Erase shiz if all members share the same thing
					//for members that do not share the same thing, add up in a variable "tempcredits"
					//then, take the difference between that variable and the max (make sure it is not negative) and that will be what is subtracted from shiz
					int tempCredits = 0;
					
				
		for (int m = 2 ; m < required[l].size() && tempValue4 == true; m++)
			{
			for (int n = 2 ; n < choiceCourses[j].size() ; n++)
			{
				if((required[l][m]/10000000000 <= (choiceCourses[j][n]/100000000000)%10 && 
				(required[l][m]/1000000000)%10 <= (((choiceCourses[j][n]/100000000)%10) * 10 ) && 
				((((required[l][m] / 100000000)%10)*100) + (((required[l][m] / 10000000)%10)*10) + (required[l][m] / 1000000)%10) ==
				((((choiceCourses[j][n] / 100000000000000)%10)*100) + (((choiceCourses[j][n] / 10000000000000)%10)*10)
				+ (choiceCourses[j][n] / 1000000000000)%10)) || ((required[l][m]/100000)%10 == (choiceCourses[j][n]/100000)%10)
				|| ((required[l][m]/10000)%10 == (choiceCourses[j][n]/10000)%10) || ((required[l][m]/1000)%10 == (choiceCourses[j][n]/1000)%10)
				|| ((required[l][m]/100)%10 == (choiceCourses[j][n]/100)%10) || ((required[l][m]/10)%10 == (choiceCourses[j][n]/10)%10)
				|| (required[l][m]%10 == choiceCourses[j][n]%10))
				{
				}
				else
				{
				tempCredits += ((((choiceCourses[j][n] / 100000000)% 10) * 10) + ((choiceCourses[j][n] / 10000000)% 10));
				if (tempCredits > required[l][1])
				{
				tempValue4 = false;
				break;
				}
				}
				}
			}
			if (tempCredits <= required[l][1])
			{
				required[l][1] -= tempCredits;
				if (required[l][1] == 0)
				{
					required.erase(l);
					tempValue3 = false;
				}
			}
			}
				else if (required[l][0] == 3) //PARTIALLY COPY PASTED MAY BE BUGGY
		 {
		    FML.clear();
			FML = required[l];
			FML[0] = - 1;
			l += FML.size();
			for (int z = FML[1] + l; z < FML.back() + l;z++)
			{
				if (required[z][0] == 1)
				{
					if (std::includes(choiceCourses[j].begin(), choiceCourses[j].end(), required[z].begin(), required[z].end()))
					{
						choiceCourses.erase(j);
						tempValue2 = false;
						break;
					}
					if (std::includes(required[z].begin(), required[z].end(), choiceCourses[j].begin(), choiceCourses[j].end()))
					{
						required[z]=choiceCourses[j];
						choiceCourses.erase(j);
						tempValue2 = false;
						break;
						/*
						required.erase(z);
						tempValue3 = false;
						*/
					}
					//if required is completely contained within choicecourses, delete the incoming
					//if choicecourses is completely contained within include, delete include and leave choicecourses
					temp1 = choiceCourses[j];
					temp2 = required[z];
					temp1.erase(1);
					temp2.erase(1);
					if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end())&& std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
					{
						if (required[z][1] >= choiceCourses[j][z])
						{
							choiceCourses.erase(j);
							tempValue2 = false;
							break;
						}
						else
						{
							required[z]=choiceCourses[j];
							choiceCourses.erase(j);
							tempValue2 = false;
							break;
						/*
							required.erase(z);
							tempValue3 = false;
							*/
						}
					}
				}
				else if (required[z][0] == 2 && k == 2)
				{
				tempValue4 = true;
					//TODO Erase shiz if all members share the same thing
					//for members that do not share the same thing, add up in a variable "tempcredits"
					//then, take the difference between that variable and the max (make sure it is not negative) and that will be what is subtracted from shiz
					int tempCredits = 0;
					
				
		for (int m = 2 ; m < required[z].size() && tempValue4 == true; m++)
			{
			for (int n = 2 ; n < choiceCourses[j].size() ; n++)
			{
				if((required[z][m]/10000000000 <= (choiceCourses[j][n]/100000000000)%10 && 
				(required[z][m]/1000000000)%10 <= (((choiceCourses[j][n]/100000000)%10) * 10 ) && 
				((((required[z][m] / 100000000)%10)*100) + (((required[z][m] / 10000000)%10)*10) + (required[z][m] / 1000000)%10) ==
				((((choiceCourses[j][n] / 100000000000000)%10)*100) + (((choiceCourses[j][n] / 10000000000000)%10)*10)
				+ (choiceCourses[j][n] / 1000000000000)%10)) || ((required[z][m]/100000)%10 == (choiceCourses[j][n]/100000)%10)
				|| ((required[z][m]/10000)%10 == (choiceCourses[j][n]/10000)%10) || ((required[z][m]/1000)%10 == (choiceCourses[j][n]/1000)%10)
				|| ((required[z][m]/100)%10 == (choiceCourses[j][n]/100)%10) || ((required[z][m]/10)%10 == (choiceCourses[j][n]/10)%10)
				|| (required[z][m]%10 == choiceCourses[j][n]%10))
				{
				}
				else
				{
				tempCredits += ((((choiceCourses[j][n] / 100000000)% 10) * 10) + ((choiceCourses[j][n] / 10000000)% 10));
				if (tempCredits > required[z][1])
				{
				tempValue4 = false;
				break;
				}
				}
				}
			}
			if (tempCredits <= required[z][1])
			{
				required[z][1] -= tempCredits;
				if (required[z][1] == 0)
				{
					required.erase(z);
					tempValue3 = false;
				}
			}
			}
			}
			for (int z = l; z < FML.size() + l - 1; z++)
			{
				tempValue2 = false;
				for (int y = FML[z] + 1 + l ; y <= FML[z+1] + l ; y++)
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
				for(int z = FML.back() + l ;z > FML[0] + l;z--)
				{
					required.erase(z);
				}
			}
			else
			{
				for(int z = FML.back() + l ;z > FML[0] + l + 1;z--)
				{
					if (required[z][1] == 0)
					{
						required.erase(z);
						for (int y = 1 ; y < FML.size() ; y++)
						{
							if(FML[y] > z)
							{
								required[l][y]--;
							}
						}
					}
				}		
			}
		 }
				if(tempValue3 == true)
				{
					l++;
				}
			}
			if (tempValue == true)
			{
				k++;
			}
			if (tempValue2 == false)
			{
				break;
			}
		}
	if (choiceCourses.size() != 0)
	{
		required.push_back(choiceCourses);
	}
	}
	for (int j = 0 ; j < shiz.size() ; j++)
	{
		tempValue2 = true;
		for (int k = 2 ; k < shiz[j].size() ;)
		{

			for (int l = 0 ; l < required[0].size() ; l++)
			{
				if (((shiz[j][k]/10000000000 <= (required[0][l]/100000000000)%10 && 
				(shiz[j][k]/1000000000)%10 <= (((required[0][l]/100000000)%10) * 10 ) && 
				((((shiz[j][k] / 100000000)%10)*100) + (((shiz[j][k] / 10000000)%10)*10) + (shiz[j][k] / 1000000)%10) ==
				((((required[0][l] / 100000000000000)%10)*100) + (((required[0][l] / 10000000000000)%10)*10)
				+ (required[0][l] / 1000000000000)%10)) || ((shiz[j][k]/100000)%10 == (required[0][l]/100000)%10)
				|| ((shiz[j][k]/10000)%10 == (required[0][l]/10000)%10) || ((shiz[j][k]/1000)%10 == (required[0][l]/1000)%10)
				|| ((shiz[j][k]/100)%10 == (required[0][l]/100)%10) || ((shiz[j][k]/10)%10 == (required[0][l]/10)%10)
				|| (shiz[j][k]%10 == required[0][l]%10)))
				{
					shiz[j][1] -= ((((required[0][l] / 100000000)% 10) * 10) + ((required[0][l] / 10000000)% 10));
					if (shiz[j][1] < 0)
					{
					shiz.erase(j);
					tempValue2 = false;
					break;
					}
				}
			}
			for (int l = 1 ; l < required.size() && tempValue2 == true; )
			{
				//tempValue3 = true;
				if (required[l][0] == 1 && k == 2)
				{
				tempValue4 = true;
					//TODO Erase shiz if all members share the same thing
					//for members that do not share the same thing, add up in a variable "tempcredits"
					//then, take the difference between that variable and the max (make sure it is not negative) and that will be what is subtracted from shiz
					int tempCredits = 0;
				
		for (int m = 2 ; m < shiz[j].size() && tempValue4 == true; m++)
			{
			for (int n = 2 ; n < required[l].size() ; n++)
			{
				if((shiz[j][n]/10000000000 <= (required[l][m]/100000000000)%10 && 
				(shiz[j][n]/1000000000)%10 <= (((required[l][m]/100000000)%10) * 10 ) && 
				((((shiz[j][n] / 100000000)%10)*100) + (((shiz[j][n] / 10000000)%10)*10) + (shiz[j][n] / 1000000)%10) ==
				((((required[l][m] / 100000000000000)%10)*100) + (((required[l][m] / 10000000000000)%10)*10)
				+ (required[l][m] / 1000000000000)%10)) || ((shiz[j][n]/100000)%10 == (required[l][m]/100000)%10)
				|| ((shiz[j][n]/10000)%10 == (required[l][m]/10000)%10) || ((shiz[j][n]/1000)%10 == (required[l][m]/1000)%10)
				|| ((shiz[j][n]/100)%10 == (required[l][m]/100)%10) || ((shiz[j][n]/10)%10 == (required[l][m]/10)%10)
				|| (shiz[j][n]%10 == required[l][m]%10))
				{
				}
				else
				{
				tempCredits += ((((required[l][m] / 100000000)% 10) * 10) + ((required[l][m] / 10000000)% 10));
				if (tempCredits > shiz[j][1]) 
				{
				tempValue4 = false;
				break;
				}
				}
				}
			}
			if (tempCredits <= shiz[j][1]) 
			{
				shiz[j][1] -= tempCredits; 
				if (shiz[j][1] == 0) 
				{
					shiz.erase(j); 
				}
			}
			}
				else if (required[l][0] == 2)
				{
					if (std::includes(shiz[j].begin(), shiz[j].end(), required[l].begin(), required[l].end()))
					{
						shiz.erase(j);
						tempValue2 = false;
						break;
					}
					if (std::includes(required[l].begin(), required[l].end(), shiz[j].begin(), shiz[j].end()))
					{
						required[l]=shiz[j];
						shiz.erase(j);
						tempValue2 = false;
						break;
						/*
						required.erase(l);
						tempValue3 = false;
						*/
					}
					//if required is completely contained within shiz, delete the incoming
					//if shiz is completely contained within include, delete include and leave shiz
					temp1 = shiz[j];
					temp2 = required[l];
					temp1.erase(1);
					temp2.erase(1);
					if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end())&& std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
					{
						if (required[l][1] >= shiz[j][l])
						{
							shiz.erase(j);
							tempValue2 = false;
							break;
						}
						else
						{
							required[l]=shiz[j];
							shiz.erase(j);
							tempValue2 = false;
							break;
						/*
							required.erase(l);
							tempValue3 = false;
							*/
						}
					}
				}
			else if (required[l][0] == 3) //PARTIALLY COPY PASTED MAY BE BUGGY
		 {
		    FML.clear();
			FML = required[l];
			FML[0] = - 1;
			l += FML.size();
			for (int z = FML[1] + l; z < FML.back() + l;z++)
			{
			if (required[z][0] == 1 && k == 2)
				{
				tempValue4 = true;
					//TODO Erase shiz if all members share the same thing
					//for members that do not share the same thing, add up in a variable "tempcredits"
					//then, take the difference between that variable and the max (make sure it is not negative) and that will be what is subtracted from shiz
					int tempCredits = 0;
				
		for (int m = 2 ; m < shiz[j].size() && tempValue4 == true; m++)
			{
			for (int n = 2 ; n < required[z].size() ; n++)
			{
				if((shiz[j][n]/10000000000 <= (required[z][m]/100000000000)%10 && 
				(shiz[j][n]/1000000000)%10 <= (((required[z][m]/100000000)%10) * 10 ) && 
				((((shiz[j][n] / 100000000)%10)*100) + (((shiz[j][n] / 10000000)%10)*10) + (shiz[j][n] / 1000000)%10) ==
				((((required[z][m] / 100000000000000)%10)*100) + (((required[z][m] / 10000000000000)%10)*10)
				+ (required[z][m] / 1000000000000)%10)) || ((shiz[j][n]/100000)%10 == (required[z][m]/100000)%10)
				|| ((shiz[j][n]/10000)%10 == (required[z][m]/10000)%10) || ((shiz[j][n]/1000)%10 == (required[z][m]/1000)%10)
				|| ((shiz[j][n]/100)%10 == (required[z][m]/100)%10) || ((shiz[j][n]/10)%10 == (required[z][m]/10)%10)
				|| (shiz[j][n]%10 == required[z][m]%10))
				{
				}
				else
				{
				tempCredits += ((((required[z][m] / 100000000)% 10) * 10) + ((required[z][m] / 10000000)% 10));
				if (tempCredits > shiz[j][1]) 
				{
				tempValue4 = false;
				break;
				}
				}
				}
			}
			if (tempCredits <= shiz[j][1]) 
			{
				shiz[j][1] -= tempCredits; 
				if (shiz[j][1] == 0) 
				{
					shiz.erase(j); 
				}
			}
			}
				else if (required[z][0] == 2)
				{
					if (std::includes(shiz[j].begin(), shiz[j].end(), required[z].begin(), required[z].end()))
					{
						shiz.erase(j);
						tempValue2 = false;
						break;
					}
					if (std::includes(required[z].begin(), required[z].end(), shiz[j].begin(), shiz[j].end()))
					{
						required[z]=shiz[j];
						shiz.erase(j);
						tempValue2 = false;
						break;
						/*
						required.erase(z);
						tempValue3 = false;
						*/
					}
					//if required is completely contained within shiz, delete the incoming
					//if shiz is completely contained within include, delete include and leave shiz
					temp1 = shiz[j];
					temp2 = required[z];
					temp1.erase(1);
					temp2.erase(1);
					if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end())&& std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
					{
						if (required[z][1] >= shiz[j][z])
						{
							shiz.erase(j);
							tempValue2 = false;
							break;
						}
						else
						{
							required[z]=shiz[j];
							shiz.erase(j);
							tempValue2 = false;
							break;
						/*
							required.erase(z);
							tempValue3 = false;
							*/
						}
					}
				}
			}
			for (int z = l; z < FML.size() + l - 1; z++)
			{
				tempValue2 = false;
				for (int y = FML[z] + 1 + l ; y <= FML[z+1] + l ; y++)
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
				for(int z = FML.back() + l ;z > FML[0] + l;z--)
				{
					required.erase(z);
				}
			}
			else
			{
				for(int z = FML.back() + l ;z > FML[0] + l + 1;z--)
				{
					if (required[z][1] == 0)
					{
						required.erase(z);
						for (int y = 1 ; y < FML.size() ; y++)
						{
							if(FML[y] > z)
							{
								required[l][y]--;
							}
						}
					}
				}		
			}
		 }
				/*
				if(tempValue3 == true)
				{
					l++;
				}
				*/
			}
			if (tempValue == true)
			{
				k++;
			}
			if (tempValue2 == false)
			{
				break;
			}
		}
	if (shiz.size() != 0)
	{
		required.push_back(shiz);
	}
	}
	for (int j = 0 ; j < option.size() ; j++)
	{
		//TODO
	if (option.size() != 0)
	{
		required.push_back(option);
	}
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
      recommended[recommended.begin()].insert(recommended[recommended.begin()].begin(),i);
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
    temp.push_back(recommended[k][0])
    int credits = recommended[k][2];
    for(int x = 0, x < sortedCounts.size(), x++)
    {
      for(int l = 3; l < recommended[k].size(); l++)
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
