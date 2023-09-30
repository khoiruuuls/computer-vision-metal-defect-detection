from django.shortcuts import render


def home(request):
    data = {
        "title": "Home",
        "css": "home.css",
        "js": "home.js",
        "other_data": "Some other data",
    }
    return render(request, "app/home.html", context=data)

def templates(request):
    data = {
        "title": "templates",
        "css": "templates.css",
        "js": "templates.js",
        "other_data": "Some other data",
    }
    return render(request, "app/templates.html", context=data)

def teams(request):
    data = {
        "title": "Team",
        "css": "teams.css",
        "js": "teams.js",
        "other_data": "Some other data",
    }
    return render(request, "app/teams.html", context=data)

def abouts(request):
    data = {
        "title": "About",
        "css": "abouts.css",
        "js": "abouts.js",
        "other_data": "Some other data",
    }
    return render(request, "app/abouts.html", context=data)
