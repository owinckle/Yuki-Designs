from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
	ctx = {
		"page": "Dashboard",
		"dashboardActive": True
	}
	return render(request, 'dashboard/dashboard.html', ctx)

@login_required
def profile(request):
	ctx = {
		"page": "Profile",
		"profileActive": True,
		"username": request.user.username
	}
	return render(request, 'dashboard/profile.html', ctx)