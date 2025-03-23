from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # 관리자 페이지
    path('admin/', admin.site.urls),

    # users 앱의 URL
    path('api/users/', include('users.urls')),

    # courses 앱의 URL
    path('api/courses/', include('courses.urls')),

    # simulations 앱의 URL
    path('api/simulations/', include('simulations.urls')),
]