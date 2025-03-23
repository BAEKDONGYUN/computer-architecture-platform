from django.urls import path
from . import views

urlpatterns = [
    # 사용자 목록 조회
    path('', views.UserList.as_view(), name='user-list'),

    # 사용자 상세 정보 조회
    path('<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
]
