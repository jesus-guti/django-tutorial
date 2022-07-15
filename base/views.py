from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home(resquest):
    return HttpResponse('Home page')

def room(resquest):
    return HttpResponse('Room')