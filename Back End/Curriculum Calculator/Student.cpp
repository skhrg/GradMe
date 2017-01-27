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

int Student::getRequiredResident()
{
	return requiredResident;
}

int Student::getRemainingResident()
{
	return remainingResident;
}

std::vector<Major> Student::getMajors()
{
	return majors;
}

void Student::addMajor(Major major)
{
	bool check = true;
	for (int i = 0; i < majors.size() ; i++)
	{
		if (majors[i] == major)
		{
			check = false;
			break;
		}
	}
	if (major.getUniversity() == university && check == true)
	{
		majors.push_back(major);
	}
}

void Student::removeMajor(int dep)
{
	for (vector<Major>::iterator i = majors.begin(); i < majors.end(); i++)
	{
		if (majors[i].getDepartment() == dep)
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
	for (std::vector<long>::iterator i = taken.begin(); i < taken.end(); i++)
	{
		if (taken[i] == course)
		{
			taken.erase(i);
		}
	}
}

void calculateRequired() //TODO - debug, commenting, creating fuctions, optimize (wayyy later)
{
	required.clear();
	requiredCredits = 0;
	requiredResident = 0;
	bool tempValue;
	bool tempValue2;
	bool tempValue3;   //im sure i don't need this many tempvalues, but i didn't want to go run into bugs
	bool tempValue4;   //it may be worthwhile to check if this can be cut down later
	bool tempValue5;
	bool tempValue6;
	int tempCredits;
	std::vector<long> reqCourses = {0};
	std::vector<long> FML;
	std::vector<std::vector<long>> choiceCourses;
	std::vector<std::vector<long>> shiz;
	std::vector<std::vector<long>> option;
	std::vector<long> temp1;
	std::vector<long> temp2;
	required.push_back(reqCourses);
	for (int i = 0; i < majors.size(); i++)
	{
		if (majors[i].getReqCredits > requiredCredits)
		{
			requiredCredits = majors[i].getReqCredits;
		}
		if (majors[i].getResidentCredits > requiredResident)
		{
			requiredResident = majors[i].getResidentCredits;
		}
		reqCourses = majors[i].getReqCourses();
		choiceCourses = majors[i].getChoiceCourses();
		shiz = majors[i].getShiz();
		option = majors[i].getOption();
		for (int j = 1; j < reqCourses.size(); j++)
		{
			tempValue = false;
			for (int l = 1; l < required[0].size(); l++)
			{
				if (reqCourses[j] == required[0][l])
				{
					tempValue = true;
					break;
				}
			}
			if (tempValue == false)
			{
				required[0].push_back(reqCourses[j]);
			}
			for (int k = 1; k < required.size();)
			{
				tempValue2 = true;
				if (required[k][0] == 1)
				{
					for (int l = 2; l < required[k].size();)
					{
						if (reqCourses[j] == required[k][l])
						{
							required[k][1] -= ((((reqCourses[j] / 100000000) % 10) * 10) + ((reqCourses[j] / 10000000) % 10));
							/*if (required[k][1] < 0)
							{
							required[k][1] = 0;
							}*/
							required[k].erase(required[k].begin() + l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
						}
						else
						{
							l++;
						}
					}
					if (required[k][1] < 0)
					{
						required.erase(required.begin() + k);
						tempValue2 = false;
					}
				}
				else if (required[k][0] == 2)
				{
					for (int l = 2; l < required[k].size(); l++)
					{
						if ((required[k][l] / 10000000000 <= (reqCourses[j] / 100000000000) % 10 &&
							(required[k][l] / 1000000000) % 10 <= (((reqCourses[j] / 100000000) % 10) * 10) &&
							((((required[k][l] / 100000000) % 10) * 100) + (((required[k][l] / 10000000) % 10) * 10) + (required[k][l] / 1000000) % 10) ==
							((((reqCourses[j] / 100000000000000) % 10) * 100) + (((reqCourses[j] / 10000000000000) % 10) * 10)
								+ (reqCourses[j] / 1000000000000) % 10)) || ((required[k][l] / 100000) % 10 == (reqCourses[j] / 100000) % 10)
							|| ((required[k][l] / 10000) % 10 == (reqCourses[j] / 10000) % 10) || ((required[k][l] / 1000) % 10 == (reqCourses[j] / 1000) % 10)
							|| ((required[k][l] / 100) % 10 == (reqCourses[j] / 100) % 10) || ((required[k][l] / 10) % 10 == (reqCourses[j] / 10) % 10)
							|| (required[k][l] % 10 == reqCourses[j] % 10))
						{
							required[k][1] -= ((((reqCourses[j] / 100000000) % 10) * 10) + ((reqCourses[j] / 10000000) % 10));
							/*if (required[k][1] < 0)
							{
							required[k][1] = 0;
							}*/
						}
					}
					if (required[k][1] < 0)
					{
						required.erase(required.begin() + k);
						tempValue2 = false;
					}
				}
				else /*if (required[k][0] == 3)*/ //PARTIALLY COPY PASTED MAY BE BUGGY
				{
					tempValue2 = false;
					FML = required[k];
					FML[0] = 0;
					//k += FML.back();
					for (int z = k + 1; z < FML.back() + k;)
					{
						if (required[z][0] == 30)
						{
							for (int l = 1; l < required[z].size();)
							{
								if (required[z][l] == reqCourses[j])
								{
									required[z].erase(required[z].begin() + l);
									if (required[z].size() == 1)
									{
										required[z].push_back(0);
										break;
									}
								}
								else
								{
									l++;
								}
							}
						}
						else if (required[z][0] == 31)
						{

							for (int l = 2; l < required[z].size();)
							{
								if (reqCourses[j] == required[z][l])
								{
									required[z][1] -= ((((reqCourses[j] / 100000000) % 10) * 10) + ((reqCourses[j] / 10000000) % 10));

									/*if (required[z][1] < 0)
									{
									required[z][1] = 0;
									}*/
									required[z].erase(required[z].begin() + l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
								}
								else
								{
									l++;
								}
							}
							/*if (required[z][1] < 0)
							{
							required.erase[required.begin() + z];
							tempValue4 = false;
							}*/
						}
						else if (required[z][0] == 32)
						{
							for (int l = 2; l < required[z].size(); l++)
							{
								if ((required[z][l] / 10000000000 <= (reqCourses[j] / 100000000000) % 10 &&
									(required[z][l] / 1000000000) % 10 <= (((reqCourses[j] / 100000000) % 10) * 10) &&
									((((required[z][l] / 100000000) % 10) * 100) + (((required[z][l] / 10000000) % 10) * 10) + (required[z][l] / 1000000) % 10) ==
									((((reqCourses[j] / 100000000000000) % 10) * 100) + (((reqCourses[j] / 10000000000000) % 10) * 10)
										+ (reqCourses[j] / 1000000000000) % 10)) || ((required[z][l] / 100000) % 10 == (reqCourses[j] / 100000) % 10)
									|| ((required[z][l] / 10000) % 10 == (reqCourses[j] / 10000) % 10) || ((required[z][l] / 1000) % 10 == (reqCourses[j] / 1000) % 10)
									|| ((required[z][l] / 100) % 10 == (reqCourses[j] / 100) % 10) || ((required[z][l] / 10) % 10 == (reqCourses[j] / 10) % 10)
									|| (required[z][l] % 10 == reqCourses[j] % 10))
								{
									required[z][1] -= ((((reqCourses[j] / 100000000) % 10) * 10) + ((reqCourses[j] / 10000000) % 10));

									/*if (required[z][1] < 0)
									{
									required[z][1] = 0;
									}*/
								}
							}
							/*if (required[z][1] < 0)
							{
							required.erase[required.begin() + z];
							tempValue4 = false;
							}*/
						}
						/*if (tempValue4 == true)
						{
						z++;
						}*/
					}
					for (int z = 0; z < FML.size() - 1; z++)
					{
						tempValue3 = false;
						for (int y = FML[z] + 1 + k; y <= FML[z + 1] + k; y++)
						{
							if (required[y][1] != 0)
							{
								tempValue3 = true;
							}
							if (tempValue3 == false)
							{
								break;
							}
						}
						if (tempValue3 == false)
						{
							break;
						}
					}
					if (tempValue3 == false)
					{
						for (int y = FML.back() + k;y > FML[0] + k;y--)
						{
							required.erase(required.begin() + y);
						}
					}
					else
					{
						for (int y = FML.back() + k;y > FML[0] + k + 1;y--)
						{
							if (required[y][1] <= 0)
							{
								required.erase(required.begin() + y);
								for (int x = 1; x < required[k].size(); x++)
								{
									if (required[k][x] >= y)
									{
										required[k][x]--;
									} //adjust k value
								}
							}
						}
						k += required[k].back() + 1;
					}
				}
				if (tempValue2 == true)
				{
					k++;
				}
			}
		}
		/*
		choiceCourses = majors[i].getChoiceCourses();
		shiz = majors[i].getShiz();
		option = majors[i].getOption();
		*/
		for (int j = 0; j < choiceCourses.size(); )
		{
			tempValue2 = true;
			for (int k = 2; k < choiceCourses[j].size();)
			{
				for (int l = 0; l < required.size(); )
				{
					tempValue3 = true;
					if (required[l][0] == 0)
					{
						for (int m = 1; m < required[0].size(); m++)
						{
							tempValue = true;
							if (required[0][m] == choiceCourses[j][k])
							{
								tempValue = false;
								choiceCourses[j][1] -= ((((choiceCourses[j][m] / 100000000) % 10) * 10) + ((choiceCourses[j][m] / 10000000) % 10));
								if (choiceCourses[j][1] < 0)
								{
									choiceCourses.erase(choiceCourses.begin() + j);
									tempValue2 = false;
								}
								else
								{
									choiceCourses[j].erase(choiceCourses[j].begin() + k);
								}
								break;
							}
						}
					}
					else if (required[l][0] == 1)
					{
						if (std::includes(choiceCourses[j].begin(), choiceCourses[j].end(), required[l].begin(), required[l].end()))
						{
							choiceCourses.erase(choiceCourses.begin() + j);
							tempValue2 = false;
							break;
						}
						if (std::includes(required[l].begin(), required[l].end(), choiceCourses[j].begin(), choiceCourses[j].end()))
						{
							required[l] = choiceCourses[j];
							choiceCourses.erase(choiceCourses.begin() + j);
							tempValue2 = false;
							break;
							/*
							required.erase(required.begin() + l);
							tempValue3 = false;
							*/
						}
						//if required is completely contained within choicecourses, delete the incoming
						//if choicecourses is completely contained within include, delete include and leave choicecourses
						temp1 = choiceCourses[j];
						temp2 = required[l];
						temp1.erase(temp1.begin() + 1);
						temp2.erase(temp2.begin() + 1);
						if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end()) && std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
						{
							if (required[l][1] >= choiceCourses[j][1])
							{
								choiceCourses.erase(choiceCourses.begin() + j);
								tempValue2 = false;
								break;
							}
							else
							{
								required[l] = choiceCourses[j];
								choiceCourses.erase(choiceCourses.begin() + j);
								tempValue2 = false;
								break;
								/*
								required.erase(required.begin() + l);
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


						for (int m = 2; m < required[l].size() && tempValue4 == true; m++)
						{
							for (int n = 2; n < choiceCourses[j].size(); n++)
							{
								if ((required[l][m] / 10000000000 <= (choiceCourses[j][n] / 100000000000) % 10 &&
									(required[l][m] / 1000000000) % 10 <= (((choiceCourses[j][n] / 100000000) % 10) * 10) &&
									((((required[l][m] / 100000000) % 10) * 100) + (((required[l][m] / 10000000) % 10) * 10) + (required[l][m] / 1000000) % 10) ==
									((((choiceCourses[j][n] / 100000000000000) % 10) * 100) + (((choiceCourses[j][n] / 10000000000000) % 10) * 10)
										+ (choiceCourses[j][n] / 1000000000000) % 10)) || ((required[l][m] / 100000) % 10 == (choiceCourses[j][n] / 100000) % 10)
									|| ((required[l][m] / 10000) % 10 == (choiceCourses[j][n] / 10000) % 10) || ((required[l][m] / 1000) % 10 == (choiceCourses[j][n] / 1000) % 10)
									|| ((required[l][m] / 100) % 10 == (choiceCourses[j][n] / 100) % 10) || ((required[l][m] / 10) % 10 == (choiceCourses[j][n] / 10) % 10)
									|| (required[l][m] % 10 == choiceCourses[j][n] % 10))
								{
								}
								else
								{
									tempCredits += ((((choiceCourses[j][n] / 100000000) % 10) * 10) + ((choiceCourses[j][n] / 10000000) % 10));
									if (tempCredits >= required[l][1])
									{
										tempValue4 = false;
										break;
									}
								}
							}
						}
						required[l][1] -= tempCredits;
						if (required[l][1] <= 0)
						{
							required.erase(required.begin() + l);
							tempValue3 = false;
						}
					}
					else /*if (required[l][0] == 3)*/ //PARTIALLY COPY PASTED MAY BE BUGGY
					{
						tempValue6 = false;
						FML = required[l];
						FML[0] = 0;
						for (int z = l + 1; z < FML.back() + l;)
						{
							tempValue3 = true;
							if (required[z][0] == 31)
							{
								if (std::includes(required[z].begin(), required[z].end(), choiceCourses[j].begin(), choiceCourses[j].end()))
								{
									tempValue3 = false;
								}
								temp1 = choiceCourses[j];
								temp2 = required[z];
								temp1.erase(temp1.begin() + 1);
								temp2.erase(temp2.begin() + 1);
								if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end()) && std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
								{
									if (required[z][1] < choiceCourses[j][1])
									{
										tempValue3 = false;
									}
								}
								if (tempValue3 == false)
								{
									required.erase(required.begin() + z);
								}
							}
							else if (required[z][0] == 32 && k == 2)
							{
								tempValue4 = true;
								//TODO Erase shiz if all members share the same thing
								//for members that do not share the same thing, add up in a variable "tempcredits"
								//then, take the difference between that variable and the max (make sure it is not negative) and that will be what is subtracted from shiz
								int tempCredits = 0;


								for (int m = 2; m < required[z].size() && tempValue4 == true; m++)
								{
									for (int n = 2; n < choiceCourses[j].size(); n++)
									{
										if ((required[z][m] / 10000000000 <= (choiceCourses[j][n] / 100000000000) % 10 &&
											(required[z][m] / 1000000000) % 10 <= (((choiceCourses[j][n] / 100000000) % 10) * 10) &&
											((((required[z][m] / 100000000) % 10) * 100) + (((required[z][m] / 10000000) % 10) * 10) + (required[z][m] / 1000000) % 10) ==
											((((choiceCourses[j][n] / 100000000000000) % 10) * 100) + (((choiceCourses[j][n] / 10000000000000) % 10) * 10)
												+ (choiceCourses[j][n] / 1000000000000) % 10)) || ((required[z][m] / 100000) % 10 == (choiceCourses[j][n] / 100000) % 10)
											|| ((required[z][m] / 10000) % 10 == (choiceCourses[j][n] / 10000) % 10) || ((required[z][m] / 1000) % 10 == (choiceCourses[j][n] / 1000) % 10)
											|| ((required[z][m] / 100) % 10 == (choiceCourses[j][n] / 100) % 10) || ((required[z][m] / 10) % 10 == (choiceCourses[j][n] / 10) % 10)
											|| (required[z][m] % 10 == choiceCourses[j][n] % 10))
										{
										}
										else
										{
											tempCredits += ((((choiceCourses[j][n] / 100000000) % 10) * 10) + ((choiceCourses[j][n] / 10000000) % 10));
											if (tempCredits >= required[z][1])
											{
												tempValue4 = false;
												break;
											}
										}
									}
								}
								required[z][1] -= tempCredits;
								if (required[z][1] <= 0)
								{
									required.erase(required.begin() + z);
									tempValue3 = false;
								}
							}

							if (tempValue3 == true)
							{
								z++;
							}
						}
						for (int z = 0; z < FML.size() - 1; z++)
						{
							tempValue6 = false;
							for (int y = FML[z] + 1 + l; y <= FML[z + 1] + l; y++)
							{
								if (required[y][1] != 0)
								{
									tempValue6 = true;
								}
								if (tempValue6 == false)
								{
									break;
								}
							}
							if (tempValue6 == false)
							{
								break;
							}
						}
						if (tempValue6 == false)
						{
							for (int y = FML.back() + l;y > FML[0] + l;y--)
							{
								required.erase(required.begin() + y);
							}
						}
						else
						{
							for (int y = FML.back() + l;y > FML[0] + l + 1;y--)
							{
								if (required[y][1] <= 0)
								{
									required.erase(required.begin() + y);
									for (int x = 1; x < required[l].size(); x++)
									{
										if (required[l][x] >= y)
										{
											required[l][x]--;
										} //adjust l value
									}
								}
							}
							l += required[l].back() + 1;
						}
					}
					if (tempValue3 == true)
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
			if (tempValue2 == true)
			{
				required.push_back(choiceCourses[j]);
				j++;
			}
		}
		for (int j = 0; j < shiz.size();)
		{
			tempValue2 = true;
			for (int k = 2; k < shiz[j].size();)
			{
				for (int l = 0; l < required.size(); )
				{
					if (required[l][0] == 0)
					{
						for (int m = 1; m < required[l].size(); m++)
						{
							if (((shiz[j][k] / 10000000000 <= (required[l][m] / 100000000000) % 10 &&
								(shiz[j][k] / 1000000000) % 10 <= (((required[l][m] / 100000000) % 10) * 10) &&
								((((shiz[j][k] / 100000000) % 10) * 100) + (((shiz[j][k] / 10000000) % 10) * 10) + (shiz[j][k] / 1000000) % 10) ==
								((((required[l][m] / 100000000000000) % 10) * 100) + (((required[l][m] / 10000000000000) % 10) * 10)
									+ (required[l][m] / 1000000000000) % 10)) || ((shiz[j][k] / 100000) % 10 == (required[l][m] / 100000) % 10)
								|| ((shiz[j][k] / 10000) % 10 == (required[l][m] / 10000) % 10) || ((shiz[j][k] / 1000) % 10 == (required[l][m] / 1000) % 10)
								|| ((shiz[j][k] / 100) % 10 == (required[l][m] / 100) % 10) || ((shiz[j][k] / 10) % 10 == (required[l][m] / 10) % 10)
								|| (shiz[j][k] % 10 == required[l][m] % 10)))
							{
								shiz[j][1] -= ((((required[l][m] / 100000000) % 10) * 10) + ((required[l][m] / 10000000) % 10));
								if (shiz[j][1] < 0)
								{
									shiz.erase(shiz.begin() + j);
									tempValue2 = false;
									break;
								}
							}
						}
					}
					//tempValue3 = true;
					else if (required[l][0] == 1 && k == 2)
					{
						tempValue4 = true;
						//TODO Erase shiz if all members share the same thing
						//for members that do not share the same thing, add up in a variable "tempcredits"
						//then, take the difference between that variable and the max (make sure it is not negative) and that will be what is subtracted from shiz
						int tempCredits = 0;

						for (int m = 2; m < shiz[j].size() && tempValue4 == true; m++)
						{
							for (int n = 2; n < required[l].size(); n++)
							{
								if ((shiz[j][n] / 10000000000 <= (required[l][m] / 100000000000) % 10 &&
									(shiz[j][n] / 1000000000) % 10 <= (((required[l][m] / 100000000) % 10) * 10) &&
									((((shiz[j][n] / 100000000) % 10) * 100) + (((shiz[j][n] / 10000000) % 10) * 10) + (shiz[j][n] / 1000000) % 10) ==
									((((required[l][m] / 100000000000000) % 10) * 100) + (((required[l][m] / 10000000000000) % 10) * 10)
										+ (required[l][m] / 1000000000000) % 10)) || ((shiz[j][n] / 100000) % 10 == (required[l][m] / 100000) % 10)
									|| ((shiz[j][n] / 10000) % 10 == (required[l][m] / 10000) % 10) || ((shiz[j][n] / 1000) % 10 == (required[l][m] / 1000) % 10)
									|| ((shiz[j][n] / 100) % 10 == (required[l][m] / 100) % 10) || ((shiz[j][n] / 10) % 10 == (required[l][m] / 10) % 10)
									|| (shiz[j][n] % 10 == required[l][m] % 10))
								{
								}
								else
								{
									tempCredits += ((((required[l][m] / 100000000) % 10) * 10) + ((required[l][m] / 10000000) % 10));
									if (tempCredits >= shiz[j][1])
									{
										tempValue4 = false;
										break;
									}
								}
							}
						}
						shiz[j][1] -= tempCredits;
						if (shiz[j][1] <= 0)
						{
							shiz.erase(shiz.begin() + j);
							tempValue2 = false;
							break;
						}
					}
					else if (required[l][0] == 2)
					{
						if (std::includes(shiz[j].begin(), shiz[j].end(), required[l].begin(), required[l].end()))
						{
							shiz.erase(shiz.begin() + j);
							tempValue2 = false;
							break;
						}
						if (std::includes(required[l].begin(), required[l].end(), shiz[j].begin(), shiz[j].end()))
						{
							required[l] = shiz[j];
							shiz.erase(shiz.begin() + j);
							tempValue2 = false;
							break;
							/*
							required.erase(required.begin() + l);
							tempValue3 = false;
							*/
						}
						//if required is completely contained within shiz, delete the incoming
						//if shiz is completely contained within include, delete include and leave shiz
						temp1 = shiz[j];
						temp2 = required[l];
						temp1.erase(temp1.begin() + 1);
						temp2.erase(temp2.begin() + 1);
						if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end()) && std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
						{
							if (required[l][1] >= shiz[j][1])
							{
								shiz.erase(shiz.begin() + j);
								tempValue2 = false;
								break;
							}
							else
							{
								required[l] = shiz[j];
								shiz.erase(shiz.begin() + j);
								tempValue2 = false;
								break;
								/*
								required.erase(required.begin() + l);
								tempValue3 = false;
								*/
							}
						}
					}
					else /*if (required[l][0] == 3)*/ //PARTIALLY COPY PASTED MAY BE BUGGY
					{
						tempValue6 = false;
						FML = required[l];
						FML[0] = 0;
						for (int z = l + 1; z < FML.back() + l;)
						{
							if (required[z][0] == 32)
							{

								if (std::includes(required[z].begin(), required[z].end(), shiz[j].begin(), shiz[j].end()))
								{
									tempValue3 = false;
								}
								//if required is completely contained within shiz, delete the incoming
								//if shiz is completely contained within include, delete include and leave shiz
								temp1 = shiz[j];
								temp2 = required[z];
								temp1.erase(temp1.begin() + 1);
								temp2.erase(temp2.begin() + 1);
								if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end()) && std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
								{
									if (required[z][1] < shiz[j][1])
									{
										tempValue3 = false;
									}
								}
								if (tempValue3 == false)
								{
									required.erase(required.begin() + z);
								}

							}
							if (tempValue3 == true)
							{
								z++;
							}
						}
						for (int z = 0; z < FML.size() - 1; z++)
						{
							tempValue6 = false;
							for (int y = FML[z] + 1 + l; y <= FML[z + 1] + l; y++)
							{
								if (required[y][1] != 0)
								{
									tempValue6 = true;
								}
								if (tempValue6 == false)
								{
									break;
								}
							}
							if (tempValue6 == false)
							{
								break;
							}
						}
						if (tempValue6 == false)
						{
							for (int y = FML.back() + l;y > FML[0] + l;y--)
							{
								required.erase(required.begin() + y);
							}
						}
						else
						{
							for (int y = FML.back() + l;y > FML[0] + l + 1;y--)
							{
								if (required[y][1] <= 0)
								{
									required.erase(required.begin() + y);
									for (int x = 1; x < required[l].size(); x++)
									{
										if (required[l][x] >= y)
										{
											required[l][x]--;
										} //adjust l value
									}
								}
							}
							l += required[l].back() + 1;
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
			if (tempValue2 == true)
			{
				required.push_back(shiz[j]);
				j++;
			}
		}
		for (int j = 0; j < option.size(); )
		{
			tempValue2 = true;
			FML = option[j];
			FML[0] = 0;
			for (int k = 0; k < required.size(); k++)
			{
				if (required[k][0] == 0)
				{
					for (int u = 1; u < required[k].size(); u++)
					{
						{
							for (int z = j + 1; z < FML.back() + j;)
							{
								if (option[z][0] == 30)
								{
									for (int l = 1; l < option[z].size();)
									{
										if (option[z][l] == required[k][u])
										{
											option[z].erase(option[z].begin() + l);
											if (option[z].size() == 1)
											{
												option[z].push_back(0);
												break;
											}
										}
										else
										{
											l++;
										}
									}
								}
								else if (option[z][0] == 31)
								{

									for (int l = 2; l < option[z].size();)
									{
										if (required[k][u] == option[z][l])
										{
											option[z][1] -= ((((required[k][u] / 100000000) % 10) * 10) + ((required[k][u] / 10000000) % 10));

											/*if (option[z][1] < 0)
											{
											option[z][1] = 0;
											}*/
											option[z].erase(option[z].begin() + l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
										}
										else
										{
											l++;
										}
									}
									/*if (option[z][1] < 0)
									{
									option.erase[option.begin() + z];
									tempValue4 = false;
									}*/
								}
								else if (option[z][0] == 32)
								{
									for (int l = 2; l < option[z].size(); l++)
									{
										if ((option[z][l] / 10000000000 <= (required[k][u] / 100000000000) % 10 &&
											(option[z][l] / 1000000000) % 10 <= (((required[k][u] / 100000000) % 10) * 10) &&
											((((option[z][l] / 100000000) % 10) * 100) + (((option[z][l] / 10000000) % 10) * 10) + (option[z][l] / 1000000) % 10) ==
											((((required[k][u] / 100000000000000) % 10) * 100) + (((required[k][u] / 10000000000000) % 10) * 10)
												+ (required[k][u] / 1000000000000) % 10)) || ((option[z][l] / 100000) % 10 == (required[k][u] / 100000) % 10)
											|| ((option[z][l] / 10000) % 10 == (required[k][u] / 10000) % 10) || ((option[z][l] / 1000) % 10 == (required[k][u] / 1000) % 10)
											|| ((option[z][l] / 100) % 10 == (required[k][u] / 100) % 10) || ((option[z][l] / 10) % 10 == (required[k][u] / 10) % 10)
											|| (option[z][l] % 10 == required[k][u] % 10))
										{
											option[z][1] -= ((((required[k][u] / 100000000) % 10) * 10) + ((required[k][u] / 10000000) % 10));

											/*if (option[z][1] < 0)
											{
											option[z][1] = 0;
											}*/
										}
									}
									/*if (option[z][1] < 0)
									{
									option.erase[option.begin() + z];
									tempValue4 = false;
									}*/
								}
								/*if (tempValue4 == true)
								{
								z++;
								}*/
							}
							for (int z = 0; z < FML.size() - 1; z++)
							{
								tempValue3 = false;
								for (int y = FML[z] + 1 + j; y <= FML[z + 1] + j; y++)
								{
									if (option[y][1] != 0)
									{
										tempValue3 = true;
									}
									if (tempValue3 == false)
									{
										break;
									}
								}
								if (tempValue3 == false)
								{
									break;
								}
							}
							if (tempValue3 == false)
							{
								for (int y = FML.back() + j;y > FML[0] + j;y--)
								{
									tempValue2 = false;
									option.erase(option.begin() + y);
								}
							}
							else
							{
								for (int y = FML.back() + j;y > FML[0] + j + 1;y--)
								{
									if (option[y][1] <= 0)
									{
										option.erase(option.begin() + y);
										for (int x = 1; x < option[j].size(); x++)
										{
											if (option[j][x] >= y)
											{
												option[j][x]--;
											} //adjust j value
										}
									}
								}
							}
						}
					}
				}
				else if (required[k][0] == 1)
				{
					tempValue6 = false;
					for (int z = j + 1; z < FML.back() + j;)
					{
						tempValue3 = true;
						if (option[z][0] == 31)
						{
							if (std::includes(option[z].begin(), option[z].end(), required[k].begin(), required[k].end()))
							{
								tempValue3 = false;
							}
							temp1 = required[k];
							temp2 = option[z];
							temp1.erase(temp1.begin() + 1);
							temp2.erase(temp2.begin() + 1);
							if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end()) && std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
							{
								if (option[z][1] < required[k][1])
								{
									tempValue3 = false;
								}
							}
							if (tempValue3 == false)
							{
								option.erase(option.begin() + z);
							}
						}
						else if (option[z][0] == 32)
						{
							tempValue4 = true;
							int tempCredits = 0;


							for (int m = 2; m < option[z].size() && tempValue4 == true; m++)
							{
								for (int n = 2; n < required[k].size(); n++)
								{
									if ((option[z][m] / 10000000000 <= (required[k][n] / 100000000000) % 10 &&
										(option[z][m] / 1000000000) % 10 <= (((required[k][n] / 100000000) % 10) * 10) &&
										((((option[z][m] / 100000000) % 10) * 100) + (((option[z][m] / 10000000) % 10) * 10) + (option[z][m] / 1000000) % 10) ==
										((((required[k][n] / 100000000000000) % 10) * 100) + (((required[k][n] / 10000000000000) % 10) * 10)
											+ (required[k][n] / 1000000000000) % 10)) || ((option[z][m] / 100000) % 10 == (required[k][n] / 100000) % 10)
										|| ((option[z][m] / 10000) % 10 == (required[k][n] / 10000) % 10) || ((option[z][m] / 1000) % 10 == (required[k][n] / 1000) % 10)
										|| ((option[z][m] / 100) % 10 == (required[k][n] / 100) % 10) || ((option[z][m] / 10) % 10 == (required[k][n] / 10) % 10)
										|| (option[z][m] % 10 == required[k][n] % 10))
									{
									}
									else
									{
										tempCredits += ((((required[k][n] / 100000000) % 10) * 10) + ((required[k][n] / 10000000) % 10));
										if (tempCredits >= option[z][1])
										{
											tempValue4 = false;
											break;
										}
									}
								}
							}
							option[z][1] -= tempCredits;
							if (option[z][1] <= 0)
							{
								option.erase(option.begin() + z);
								tempValue3 = false;
							}
						}

						if (tempValue3 == true)
						{
							z++;
						}
					}
					for (int z = 0; z < FML.size() - 1; z++)
					{
						tempValue6 = false;
						for (int y = FML[z] + 1 + j; y <= FML[z + 1] + j; y++)
						{
							if (option[y][1] != 0)
							{
								tempValue6 = true;
							}
							if (tempValue6 == false)
							{
								break;
							}
						}
						if (tempValue6 == false)
						{
							break;
						}
					}
					if (tempValue6 == false)
					{
						for (int y = FML.back() + j;y > FML[0] + j;y--)
						{
							tempValue2 = false;
							option.erase(option.begin() + y);
						}
					}
					else
					{
						for (int y = FML.back() + j;y > FML[0] + j + 1;y--)
						{
							if (option[y][1] <= 0)
							{
								option.erase(option.begin() + y);
								for (int x = 1; x < option[j].size(); x++)
								{
									if (option[j][x] >= y)
									{
										option[j][x]--;
									} //adjust j value
								}
							}
						}
					}
				}
				else if (required[k][0] == 2)
				{
					tempValue6 = false;
					for (int z = j + 1; z < FML.back() + j;)
					{
						if (option[z][0] == 32)
						{

							if (std::includes(option[z].begin(), option[z].end(), required[k].begin(), required[k].end()))
							{
								tempValue3 = false;
							}
							//if option is completely contained within required, delete the incoming
							//if required is completely contained within include, delete include and leave required
							temp1 = required[k];
							temp2 = option[z];
							temp1.erase(temp1.begin() + 1);
							temp2.erase(temp2.begin() + 1);
							if (std::includes(temp1.begin(), temp1.end(), temp2.begin(), temp2.end()) && std::includes(temp2.begin(), temp2.end(), temp1.begin(), temp1.end()))
							{
								if (option[z][1] < required[k][1])
								{
									tempValue3 = false;
								}
							}
							if (tempValue3 == false)
							{
								option.erase(option.begin() + z);
							}
						}
						if (tempValue3 == true)
						{
							z++;
						}
					}
					for (int z = 0; z < FML.size() - 1; z++)
					{
						tempValue6 = false;
						for (int y = FML[z] + 1 + j; y <= FML[z + 1] + j; y++)
						{
							if (option[y][1] != 0)
							{
								tempValue6 = true;
							}
							if (tempValue6 == false)
							{
								break;
							}
						}
						if (tempValue6 == false)
						{
							break;
						}
					}
					if (tempValue6 == false)
					{
						for (int y = FML.back() + j;y > FML[0] + j;y--)
						{
							tempValue2 = false;
							option.erase(option.begin() + y);
						}
					}
					else
					{
						for (int y = FML.back() + j;y > FML[0] + j + 1;y--)
						{
							if (option[y][1] <= 0)
							{
								option.erase(option.begin() + y);
								for (int x = 1; x < option[j].size(); x++)
								{
									if (option[j][x] >= y)
									{
										option[j][x]--;
									} //adjust j value
								}
							}
						}
					}
				}
				else if (required[k][0] == 3)
				{
					if (option[j] == required[k])
					{
						tempValue = false;
						for (int k = j + 1, int l = k + 1; k <= option[j].back() + j; k++, l++)
						{
							if (option[k] != required[l])
							{
								tempValue = true;
							}
						}
						if (tempValue == false)
						{
							for (int k = 0; k <= option[j].back(); k++)
							{
								tempValue2 = false;
								option.erase(option.begin() + j);
							}
							break;
						}
					}
				}
			}

			if (tempValue2 == true)
			{
				for (int k = j; k <= option[j].back() + j; k++)
				{
					required.push_back(option[k]);
				}
				j += option[j].back() + 1;
			}
		}
	}
	if (required[0].size() == 1)
	{
		required.erase(required.begin());
	}
	required = removeDuplicates(required);
}

void Student::calculateRemaining()
{
	remaining = required;
	remainingCredits = requiredCredits;
	remainingResident = requiredResident;
	bool tempValue;
	bool tempValue2;
	bool tempValue3;
	std::vector<long> FML;
	for (int j = 0; j < taken.size(); j++) //starts at j cuz i copy pasted code
	{
		remainingCredits -= ((((taken[j] / 100000000) % 10) * 10) + ((taken[j] / 10000000) % 10));
		if (((taken[j]/1000000)%)10 == 1)
		{
			remainingResident -= ((((taken[j] / 100000000) % 10) * 10) + ((taken[j] / 10000000) % 10));
		}
		for (int k = 0; k < remaining.size();)
		{
			tempValue2 = true;
			if (remaining[k][0] == 0)
			{
				tempValue = false;
				for (int l = 1; l < remaining[k].size(); l++)
				{
					if (taken[j] == remaining[k][l])
					{
						tempValue = true;
						remaining[k].erase(remaining[k].begin() + l);
						break;
					}
				}
				if (tempValue == true)
				{
					break;
				}
			}
			else if (remaining[k][0] == 1)
			{

				for (int l = 2; l < remaining[k].size();)
				{
					if (taken[j] == remaining[k][l])
					{
						remaining[k][1] -= ((((taken[j] / 100000000) % 10) * 10) + ((taken[j] / 10000000) % 10));
						/*if (remaining[k][1] < 0)
						{
						remaining[k][1] = 0;
						}*/
						remaining[k].erase(remaining[k].begin() + l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
					}
					else
					{
						l++;
					}
				}
				if (remaining[k][1] < 0)
				{
					remaining.erase(remaining.begin() + k);
					tempValue2 = false;
				}
			}
			else if (remaining[k][0] == 2)
			{
				for (int l = 2; l < remaining[k].size(); l++)
				{
					if ((remaining[k][l] / 10000000000 <= (taken[j] / 100000000000) % 10 &&
						(remaining[k][l] / 1000000000) % 10 <= (((taken[j] / 100000000) % 10) * 10) &&
						((((remaining[k][l] / 100000000) % 10) * 100) + (((remaining[k][l] / 10000000) % 10) * 10) + (remaining[k][l] / 1000000) % 10) ==
						((((taken[j] / 100000000000000) % 10) * 100) + (((taken[j] / 10000000000000) % 10) * 10)
							+ (taken[j] / 1000000000000) % 10)) || ((remaining[k][l] / 100000) % 10 == (taken[j] / 100000) % 10)
						|| ((remaining[k][l] / 10000) % 10 == (taken[j] / 10000) % 10) || ((remaining[k][l] / 1000) % 10 == (taken[j] / 1000) % 10)
						|| ((remaining[k][l] / 100) % 10 == (taken[j] / 100) % 10) || ((remaining[k][l] / 10) % 10 == (taken[j] / 10) % 10)
						|| (remaining[k][l] % 10 == taken[j] % 10))
					{
						remaining[k][1] -= ((((taken[j] / 100000000) % 10) * 10) + ((taken[j] / 10000000) % 10));
						/*if (remaining[k][1] < 0)
						{
						remaining[k][1] = 0;
						}*/
					}
				}
				if (remaining[k][1] < 0)
				{
					remaining.erase(remaining.begin() + k);
					tempValue2 = false;
				}
			}
			else /*if (remaining[k][0] == 3)*/ //PARTIALLY COPY PASTED MAY BE BUGGY
			{
				tempValue2 = false;
				FML.clear();
				FML = remaining[k];
				FML[0] = 0;
				//k += FML.back();
				for (int z = k + 1; z < FML.back() + k;)
				{
					if (remaining[z][0] == 0)
					{
						for (int l = 1; l < remaining[z].size();)
						{
							if (remaining[z][l] == taken[j])
							{
								remaining[z].erase(remaining[z].begin() + l);
								if (remaining[z].size() == 1)
								{
									remaining[z].push_back(0);
									break;
								}
							}
							else
							{
								l++;
							}
						}
					}
					else if (remaining[z][0] == 1)
					{

						for (int l = 2; l < remaining[z].size();)
						{
							if (taken[j] == remaining[z][l])
							{
								remaining[z][1] -= ((((taken[j] / 100000000) % 10) * 10) + ((taken[j] / 10000000) % 10));

								/*if (remaining[z][1] < 0)
								{
								remaining[z][1] = 0;
								}*/
								remaining[z].erase(remaining[z].begin() + l); //must change above if course id integer changes from 15: divide by 10 again if add 1 digit, multiple by 10 if subract 1 digit
							}
							else
							{
								l++;
							}
						}
						/*if (remaining[z][1] < 0)
						{
						remaining.erase[remaining.begin() + z];
						tempValue4 = false;
						}*/
					}
					else if (remaining[z][0] == 2)
					{
						for (int l = 2; l < remaining[z].size(); l++)
						{
							if ((remaining[z][l] / 10000000000 <= (taken[j] / 100000000000) % 10 &&
								(remaining[z][l] / 1000000000) % 10 <= (((taken[j] / 100000000) % 10) * 10) &&
								((((remaining[z][l] / 100000000) % 10) * 100) + (((remaining[z][l] / 10000000) % 10) * 10) + (remaining[z][l] / 1000000) % 10) ==
								((((taken[j] / 100000000000000) % 10) * 100) + (((taken[j] / 10000000000000) % 10) * 10)
									+ (taken[j] / 1000000000000) % 10)) || ((remaining[z][l] / 100000) % 10 == (taken[j] / 100000) % 10)
								|| ((remaining[z][l] / 10000) % 10 == (taken[j] / 10000) % 10) || ((remaining[z][l] / 1000) % 10 == (taken[j] / 1000) % 10)
								|| ((remaining[z][l] / 100) % 10 == (taken[j] / 100) % 10) || ((remaining[z][l] / 10) % 10 == (taken[j] / 10) % 10)
								|| (remaining[z][l] % 10 == taken[j] % 10))
							{
								remaining[z][1] -= ((((taken[j] / 100000000) % 10) * 10) + ((taken[j] / 10000000) % 10));

								/*if (remaining[z][1] < 0)
								{
								remaining[z][1] = 0;
								}*/
							}
						}
						/*if (remaining[z][1] < 0)
						{
						remaining.erase[remaining.begin() + z];
						tempValue4 = false;
						}*/
					}
					/*if (tempValue4 == true)
					{
					z++;
					}*/
				}
				for (int z = 0; z < FML.size() - 1; z++)
				{
					tempValue3 = false;
					for (int y = FML[z] + 1 + k; y <= FML[z + 1] + k; y++)
					{
						if (remaining[y][1] != 0)
						{
							tempValue3 = true;
						}
						if (tempValue3 == false)
						{
							break;
						}
					}
					if (tempValue3 == false)
					{
						break;
					}
				}
				if (tempValue3 == false)
				{
					for (int y = FML.back() + k;y > FML[0] + k;y--)
					{
						remaining.erase(remaining.begin() + y);
					}
				}
				else
				{
					for (int y = FML.back() + k;y > FML[0] + k + 1;y--)
					{
						if (remaining[y][1] <= 0)
						{
							remaining.erase(remaining.begin() + y);
							for (int x = 1; x < remaining[k].size(); x++)
							{
								if (remaining[k][x] >= y)
								{
									remaining[k][x]--;
								} //adjust k value
							}
						}
					}
					k += remaining[k].back();
				}
			}
			if (tempValue2 == true)
			{
				k++;
			}
		}
	}
	remaining = removeDuplicates(remaining);
}

void Student::calculateRecommended()
{
	recommended.clear();
	std::map<long, int> counts;
	std::vector<int> sortedCounts;
	for (std::vector<std::vector<long>>::iterator i = remaining.begin(); i < remaining.end(); i++)
	{
		if (remaining[i][0] == 1)
		{
			recommended.push_back(remaining[i]);
			recommended[recommended.begin()].insert(recommended[recommended.begin()].begin(), i);
			for (std::vector<long>::iterator j = remaining[i].begin(); j < remaining[i].end(); j++)
			{
				counts[remaining[i][j]]++;
			}
		}
	}
	for (std::map<long, int>::iterator z = counts.begin(); z < counts.end(); z++)
	{
		sortedCounts.push_back(z->second);
	}
	std::sort(sortedCounts.rbegin(), sortedCounts.rend());
	for (std::vector<std::vector<long>>::iterator k = recommended.begin(); k < recommended.end(); k++)
	{
		std::vector<long> temp;
		temp.push_back(recommended[k][0]);
			int credits = recommended[k][2];
		for (int x = 0, x < sortedCounts.size(), x++)
		{
			for (int l = 3; l < recommended[k].size(); l++)
			{
				if (counts[recommended[k][l]] == sortedCounts[x])
				{
					temp.push_back(recommended[k][l]);
					credits -= ((((remaining[k][l] / 100000000) % 10) * 10) + (remaining[k][l] / 10000000) % 10);
				}
			}
			if (credits <= 0)
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

std::vector<std::vector<long>> Student::removeDuplicates(std::vector<std::vector<long>> input)
{
	bool check;
	for (int i = 0; i < input.size(); i++)
	{
		if (input[i][0] == 1)
		{
			for (int j = i; j < input.size(); j++)
			{
				if (input[j][0] == 1)
				{
					if (input[i] == input[j])
					{
						input.erase(input.begin() + j);
						j--;
					}
				}
			}
		}
		else if (input[i][0] == 3)
		{
			for (int j = i + 1; j < input.size() - 1; j++)
			{
				if (input[j][0] == 3)
				{
					if (input[i] == input[j])
					{
						check = false;
						for (int k = i + 1, int l = j + 1; k <= input[i].back() + i; k++, l++)
						{
							if (input[k] != input[l])
							{
								check = true;
							}
						}
						if (check == false)
						{
							for (int k = 0; k <= input[i].back(); k++)
							{
								input.erase(input.begin() + j);
							}
						}
					}
				}
			}
		}
	}
	return input;
}

void Student::calculate()
{
	calculateRequired();
	calculateRemaining();
	calculateRecommended();
}
