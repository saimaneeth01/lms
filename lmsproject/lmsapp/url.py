from django.urls import path

from . import views

urlpatterns = [
    path('Teacher/', views.TeacherList.as_view()),
   
]



