from rest_framework import serializers
from .models import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model= Teacher
        #fields ='__all__'
        fields=['mobile_number','teacher_id' ,'first_name','last_name','email','course','confirm_password','password']

    # teacher_id = serializers.CharField(max_length=10)
    # first_name = serializers.CharField(max_length=100)
    # last_name = serializers.CharField(max_length=100)
    # email = serializers.EmailField(unique=True)
    # mobile_number = serializers.CharField(max_length=10)
    # course = serializers.CharField(max_length=100)

