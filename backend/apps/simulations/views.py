from rest_framework import generics
from .models import Simulation
from .serializers import SimulationSerializer

class SimulationList(generics.ListCreateAPIView):
    queryset = Simulation.objects.all()
    serializer_class = SimulationSerializer

class SimulationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Simulation.objects.all()
    serializer_class = SimulationSerializer
