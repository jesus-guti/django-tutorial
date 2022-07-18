from django.urls import URLPattern, path
from .views import RoomView

urlpatterns = [
    path('room', RoomView.as_view()),
]