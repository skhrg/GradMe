from django.db import models
frin sympy import *

class Requirement(model.Model):
    specific_requirements = models.ManyToManyField(SpecificRequirement)
    generic_requirements = models.ManyToManyField(GenericRequirement)

class SpecificRequirement(models.Model):
    total_credits = models.IntegerField()
    required_credits = models.IntegerField()
    courses = models.ManyToManyField(Course)

class GenericRequirement(model.Model):
	#Total number of credits required for this requirement
    total_credits = models.IntegerField()
	#n-bit integer that encodes the required dist requirements
	#[W][H][S][N][Q][E] for JHU
    distribution_requirements = models.IntegerField()
	#List of departments that this requirment can be fullfilled in
    department = ArrayField(
        models.IntegerField(),
    )
	#Minimum level of course
    level = models.IntegerField()
	#Minumum number of credits that a course must be
    min_course_credits = models.IntegerField()

	#Check if requirment is met
	def check_req(models.ManyToManyField courselist): #TODO maybe return list of courses used to fullfill req and credit progression
		int creds = 0; #Credits met
		for c in courselist.all(): #Iterate over courselist
			if (~(self.distribution_requirements)) | c.distribution_requirements == 2**c.dist_bits: #Check distribution requirements
				if GenericRequirement.objects.filter(department__contains=[c.department]).exists(): #Check department
					if self.level <= c.level: #Check level
						if self.min_course_credits <= c.credits: #Check credits
							creds += c.credits #If all conditions are met, add to running total of credits met
		if creds >= self.total_credits: #If required number of credits are taken
			return true
		else:
			return false
