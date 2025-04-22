from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('doctor', 'Doctor'),
        ('nurse', 'Nurse'),
        ('receptionist', 'Receptionist'),
         ('dev', 'Developer'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

class Doctor(models.Model):
    user = models.OneToOneField('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    specialization = models.CharField(max_length=100)
    departmentId = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    phone = models.CharField(max_length=20)
    address = models.TextField()

class Patient(models.Model):
    user = models.OneToOneField('accounts.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    phone = models.CharField(max_length=20)
    address = models.TextField()


