from django.db import models
from django.contrib.postgres.fields import ArrayField

class Requirement(model.Model):
    specific_requirements = ArrayField(
        models.ForeignKey(SpecificRequirement, on_delete=models.CASCADE),
    )
    generic_requirements = ArrayField(
        models.ForeignKey(GenericRequirement, on_delete=models.CASCADE),
    )

class SpecificRequirement(models.Model):
    total_credits = models.IntegerField()
    required_credits = models.IntegerField()
    courses = ArrayField(
        models.ForeignKey(, on_delete=models.CASCADE),
    )

class GenericRequirement(model.Model):
	//Total number of credits required for this requirement
    total_credits = models.IntegerField()
	//6-bit integer that encodes the required dist requirements
	//[W][H][S][N][Q][E]
    distribution_requirements = models.IntegerField()
	//List of departments that this requirment can be fullfilled in
    department = ArrayField(
        models.IntegerField(),
    )
	//Minimum level of course
    level = models.IntegerField()
	//Minumum number of credits that a course must be
    min_course_credits = models.IntegerField()
