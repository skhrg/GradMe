from django.db import models

class Course(model.Model):
	school = model.IntegerField()
	department = model.IntegerField()
	number = model.IntegerField()
	areas = model.IntegerField()
	special = model.CharField()
