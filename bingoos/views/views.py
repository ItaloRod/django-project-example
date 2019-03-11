from django.shortcuts import render

# Create your views here.

def index(request) :
    print('request', request)
    return render(request,'index.html')
