from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('rooms/', views.getRooms, name="rooms"),
    path('rooms/<str:pk>/', views.RoomDetail.as_view()),
]
