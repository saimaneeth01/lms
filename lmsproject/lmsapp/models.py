from django.db import models

class Teacher(models.Model):
    # Teacher details
    teacher_id = models.CharField(max_length=10)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    password = models.CharField(max_length=128)  
    confirm_password=models.CharField(max_length=128)
    email = models.EmailField(unique=True) 
    mobile_number = models.CharField(max_length=10)
    course = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural="1.Teacher"
        

class CourseCategory(models.Model):
    title = models.CharField(max_length=100)
    course_description = models.CharField(max_length=100)
    
    class Meta:
        verbose_name_plural="2.CourseCategory"
        

   
class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Consider hashing passwords
    mobile_number = models.CharField(max_length=10)
    qualification = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural="3.Student"

    

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.SET_NULL, null=True, related_name='courses')
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, related_name='courses')
    title = models.CharField(max_length=100)
    course_description = models.TextField()

    class Meta:
        verbose_name_plural="4.Courses"
   

