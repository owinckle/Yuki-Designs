"""YukiDesigns URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from home import views as home_views
from portal import views as portal_views
from dashboard import views as dashboard_views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_views.main, name='home'),
    path('dashboard', dashboard_views.dashboard, name='dashboard'),
    path('dashboard/profile', dashboard_views.profile, name='profile'),
    path('login', auth_views.LoginView.as_view(template_name='portal/portal.html'), name='portal'),
    path('logout', auth_views.LogoutView.as_view(template_name='home/home.html'), name='logout'),
]
