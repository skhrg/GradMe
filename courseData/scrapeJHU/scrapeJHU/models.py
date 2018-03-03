from django.db import models

class Course(model.Model):
	schoolName = model.CharField()
	school = model.IntegerField()
	department = model.IntegerField()
	number = model.IntegerField()
	credits = model.IntegerField()
	areas = model.IntegerField()
	special = model.CharField()
