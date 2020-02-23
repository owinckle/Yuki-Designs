from django.shortcuts import render

def main(requests):
	return render(requests, "portal/portal.html")