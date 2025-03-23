from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # 기본 필드: username, password, email, first_name, last_name 등은 AbstractUser에 포함됨
    bio = models.TextField(blank=True, null=True, verbose_name="자기소개")
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True, verbose_name="프로필 사진")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="가입일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "사용자"
        verbose_name_plural = "사용자"
