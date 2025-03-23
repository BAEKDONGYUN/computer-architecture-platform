from django.db import models

class Simulation(models.Model):
    name = models.CharField(max_length=255, verbose_name="시뮬레이션 이름")
    description = models.TextField(verbose_name="시뮬레이션 설명")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정일")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "시뮬레이션"
        verbose_name_plural = "시뮬레이션"

class SimulationResult(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, verbose_name="사용자")
    simulation = models.ForeignKey(Simulation, on_delete=models.CASCADE, verbose_name="시뮬레이션")
    score = models.FloatField(verbose_name="점수")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="생성일")

    def __str__(self):
        return f"{self.user.username} - {self.simulation.name}"

    class Meta:
        verbose_name = "시뮬레이션 결과"
        verbose_name_plural = "시뮬레이션 결과"
