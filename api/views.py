from django.http import response
from django.shortcuts import render
from .serializers import RoomSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import getRoomsList, getRoomDetail
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/rooms/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of rooms'
        }
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def getRooms(request):
    
    if request.method == 'GET':
        return getRoomsList(request)

@api_view(['GET', 'PUT', 'DELETE'])
def getRoom(request, pk):

    if request.method == 'GET':
        return getRoomDetail(request, pk)