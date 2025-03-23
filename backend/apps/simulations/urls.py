from django.urls import path
from . import views

urlpatterns = [
    # 시뮬레이션 목록 조회
    path('', views.SimulationList.as_view(), name='simulation-list'),

    # 시뮬레이션 상세 정보 조회
    path('<int:pk>/', views.SimulationDetail.as_view(), name='simulation-detail'),
]