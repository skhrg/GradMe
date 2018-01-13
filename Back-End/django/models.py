from django.db import models
from django.contrib.postgres.fields import ArrayField

class Requirement(model.Model)
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
    total_credits = models.IntegerField()
    distribution_requirements = models.CharField()
    department = ArrayField(
        models.CharField(),
    )
    level = models.IntegerField()
    min_course_credites = models.IntegerField()
    school = models.CharField()
