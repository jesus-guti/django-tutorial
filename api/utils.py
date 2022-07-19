from rest_framework.response import Response
from .models import Room
from .serializers import RoomSerializer

def getRoomsList(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

def getRoomDetail(request, pk):
    rooms = Room.objects.get(id=pk)
    serializer = RoomSerializer(rooms, many=False)
    return Response(serializer.data)