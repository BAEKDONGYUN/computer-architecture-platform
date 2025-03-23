from django.urls import path
from . import views

urlpatterns = [
    # 강의 목록 조회
    path('', views.CourseList.as_view(), name='course-list'),

    # 강의 상세 정보 조회
    path('<int:pk>/', views.CourseDetail.as_view(), name='course-detail'),
]
