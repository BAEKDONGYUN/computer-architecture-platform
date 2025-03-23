import os
from django.core.wsgi import get_wsgi_application

# Django 설정 파일을 지정합니다.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# WSGI 애플리케이션을 가져옵니다.
application = get_wsgi_application()
