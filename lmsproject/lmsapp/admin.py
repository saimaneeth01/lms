from django.contrib import admin

# Register your models here.
from .models import Teacher,CourseCategory,Student,Course
# from .models import CourseCategory
# from .models import Student
# from .models import Course


admin.site.register(Teacher)
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Student)
