from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="카테고리 이름")
    description = models.TextField(blank=True, null=True, verbose_name="카테고리 설명")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "카테고리"
        verbose_name_plural = "카테고리"

class Course(models.Model):
    title = models.CharField(max_length=255, verbose_name="강의 제목")
    description = models.TextField(verbose_name="강의 설명")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, verbose_name="카테고리")
    instructor = models.ForeignKey('users.User', on_delete=models.SET_NULL, null=True, verbose_name="강사")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "강의"
        verbose_name_plural = "강의"
