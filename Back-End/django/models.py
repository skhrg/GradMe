from django.db import models
from sympy import *

class Progression(model.Model):
	met = models.BooleanField(default=False)
	creds = models.IntegerField
	courses = models.ManyToManyField('Course')
	reqtype = models.BooleanField #T=Specific, F=Generic
	sreq = models.ForeignKey('SpecificRequirement', on_delete=models.CASCADE)
	greq = models.ForiegnKey('GenericRequirement', on_delete=models.CASCADE)

	def get_req():
		if(req):
			return sreq
		else:
			return greq

class ReqProg(model.Model):
	met = models.BooleanField(default=False)
	progress = models.ManyToManyField('Progression')

class MajProg(model.Model):
	met = models.BooleanField(default=False)
	progress = models.ManyToManyField('ReqProg')

class SpecificRequirement(models.Model):
	total_credits = models.IntegerField()
	required_credits = models.IntegerField()
	courses = models.ManyToManyField('Course')

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

class Requirement(model.Model):
	specific_requirements = models.ManyToManyField('SpecificRequirement')
	generic_requirements = models.ManyToManyField('GenericRequirement')

	#Check if requirement is met
	def check_req(models.ManyToManyField courselist):
		reqprog = ReqProg.objects.create()
		for sr in self.specific_requirements.all(): #Iterate over specific requirements
			prog = sr.check_req(courselist)
			reqprog.progress.add(prog)
			if prog.met: #As soon as we meet one way of fulfilling requirement we exit
				reqprog.met = True
				return reqprog
		for gr in self.generic_requirements.all(): #Iterate over generic requirements
			prog = gr.check_req(courselist)
			reqprog.progress.add(prog)
			if prog.met: #Same deal as above
				reqprog.met = True
				return reqprog
		return reqprog

class Major(model.Model): #Can also be a minor or track or some custom shit
	requirements = models.ManyToManyField('Requirement')

	#Check if major is done
	def check_req(models.ManyToManyField courselist):
		majprog = MajProg.objects.create()
		for r in self.requirements.all():
			rp = r.check_req(courselist)
			majprog.met = majprog.met && rp.met
			majprog.progress.add(rp)
		return met

class Student(model.Model):
	majors = models.ManyToManyField('Major')
	courses = models.ManyToManyField('Course')
	progress = models.ManyToManyField('MajProg')

	def check_prog():
		#Delete current progress
		for p in self.progress.all()
			self.progress.remove(p)
		#Get new progress
		for m in self.majors.all()
			self.progress.add(m.check_req(self.courses))

