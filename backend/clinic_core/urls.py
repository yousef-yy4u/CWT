from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),       # your app’s viewsets (roles, users, etc.)
    path('auth/', include('djoser.urls')),         # registration, user management
    path('auth/', include('djoser.urls.jwt')),     # JWT login, logout, token handling
]

