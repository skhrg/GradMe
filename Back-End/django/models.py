from django.db import models
from django.contrib.postgres.fields import ArrayField

class SpecificRequirements(models.Model):
    total_credits = models.IntegerField()
    required_credits = models.IntegerField()
    courses = ArrayField(
        models.ForeignKey(, on_delete=models.CASCADE),
    )
