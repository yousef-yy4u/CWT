from rest_framework import serializers
from .models import Doctor, Patient
from django.contrib.auth import get_user_model

User = get_user_model()

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = [
            'id',
            'user',
            'name',
            'email',
            'specialization',
            'departmentId',
            'gender',
            'dob',
            'phone',
            'address'
        ]

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'id',
            'user',
            'name',
            'email',
            'gender',
            'dob',
            'phone',
            'address'
        ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'role']

