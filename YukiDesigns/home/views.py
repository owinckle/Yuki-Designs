from django.shortcuts import render

def main(requests):
	return render(requests, "home/home.html")