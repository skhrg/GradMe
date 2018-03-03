import json
from django.core.management.base import BaseCommand
from scrapeJHU.models import Course

class Command(BaseCommand)

	def getAreas(areas, writing):
		int area = 0
		if writing == "Yes":
			area = 1
		areaList = ["E", "N", "Q", "H", "S"]
		for x in range(1,6):
			if areaList[x-1] in areas:
				area += 2**x
		return area

	def handle(self, *args, **options):
		KSASdata = json.loads(urlopen(https://sis.jhu.edu/api/classes/Krieger%20School%20of%20Arts%20and%20Sciences?key=t5Zpd8jKaDPN6424Yyrp3FC5TZRXVG9g))
		for course in KSASdata:
			newCourse = Course()
			newCourse.schoolName = course["SchoolName"]
			newCourse.school = 1
			name = course["OfferingName"]
			newCourse.department = int(name[3:6])
			newCourse.number = int(name[7:])
			newCouse.credits = int(course["Credits"])
			newCourse.areas = getAreas(course["Areas"], course["IsWritingIntensive"])
			//newCourse.special = course[]
			newCourse.save()

		WSEdata = json.loads(urlopen(https://sis.jhu.edu/api/classes/Whiting%20School%20of%20Engineering?key=t5Zpd8jKaDPN6424Yyrp3FC5TZRXVG9g))
		for course in WSEdata:
			newCourse = Course()
			newCourse.schoolName = course["SchoolName"]
			newCourse.school = 1
			name = course["OfferingName"]
			newCourse.department = int(name[3:6])
			newCourse.number = int(name[7:])
			newCouse.credits = int(course["Credits"])
			newCourse.areas = getAreas(course["Areas"], course["IsWritingIntensive"])
			//newCourse.special = course[]
			newCourse.save()
