from django.db import models
from sympy import *

class Student(model.Model):
	majors = models.ManyToManyField(Major)
	courses = models.ManyToManyField(Course)

class ReqProg(model.Model):
	met = models.BooleanField(default=False)
	progress = models.ManyToManyField(Requirement)

class Progression(model.Model):
	met = models.BooleanField(default=False)
	creds = models.IntegerField
	courses = models.ManyToManyField(Course)
	reqtype = models.BooleanField #T=Specific, F=Generic
	sreq = models.ForeignKey(SpecificRequirement, on_delete=models.CASCADE)
	greq = models.ForiegnKey(GenericRequirement, on_delete=models.CASCADE)

	def get_req():
		if(req):
			return sreq
		else:
			return greq

class Major(model.Model): #Can also be a minor or track or some custom shit
	requirements = models.ManyToManyField(Requirement)

	#Check if major is done
	def check_req(models.ManyToManyField courselist): #TODO return list of courses used to fullfull req and credit progression
		bool met = False
		for r in self.requirements.all():
			met = met && r.check_req(courselist)
		return met

class Requirement(model.Model):
	specific_requirements = models.ManyToManyField(SpecificRequirement)
	generic_requirements = models.ManyToManyField(GenericRequirement)

	#Check if requirement is met
	def check_req(models.ManyToManyField courselist): #TODO maybe return list of courses used to fullfill req and credit progression
		bool met = False
		for sr in self.specific_requirements.all(): #Iterate over specific requirements
			met = sr.check_req(courselist)
			if met: #As soon as we meet one of the possible ways to fullfill the req we exit
				return True
		for gr in self.generic_requirements.all(): #Iterate over generic requirements
			met = gr.check_req(courselist)
			if met: #Same deal as above
				return True
		return False

class SpecificRequirement(models.Model):
	total_credits = models.IntegerField()
	required_credits = models.IntegerField()
	courses = models.ManyToManyField(Course)

	#Check if requirement is met
	def check_req(models.ManyToManyField courselist):
		prog = Progression.objects.create()
		prog.sreq = self
		prog.reqtype = True
		prog.creds = 0
		for c in courselist.all(): #Iterate over courselist
			if c in self.courses.all(): #If course meets requirement
				prog.creds += c.credits #Count the credits
				prog.courses.add(c)
		if prog.creds >= self.total_credits: #Requirement met
			prog.met = True
		return prog

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
	def check_req(models.ManyToManyField courselist):
		prog = Progression.objects.create()
                prog.greq = self
                prog.reqtype = False
                prog.creds = 0
		for c in courselist.all(): #Iterate over courselist
			if (~(self.distribution_requirements)) | c.distribution_requirements == 2**c.dist_bits: #Check distribution requirements
				if GenericRequirement.objects.filter(department__contains=[c.department]).exists(): #Check department
					if self.level <= c.level: #Check level
						if self.min_course_credits <= c.credits: #Check credits
							prog.creds += c.credits #If all conditions are met, add to running total of credits met
							prog.courses.add(c)
		if creds >= self.total_credits: #If required number of credits are taken
			prog.met = True
		return prog
