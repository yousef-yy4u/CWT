from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.utils import timezone
import uuid


class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)

class AppUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, null=True)
    dob = models.DateField(null=True)
    gender = models.CharField(max_length=10)
    department = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True)
    address = models.TextField(null=True)
    specialization = models.CharField(max_length=255, null=True)  # for doctors
    joined_at = models.DateTimeField(default=timezone.now)
    ss_password = models.CharField(max_length=255, null=True)  # stored securely if needed
    role = models.ForeignKey('Role', on_delete=models.SET_NULL, null=True)

    is_staff = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = AppUserManager()

    def __str__(self):
        return self.email

class Role(models.Model):
    name = models.TextField()

class Department(models.Model):
    name = models.TextField()
    description = models.TextField()

class Appointment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='appointments_as_patient')
    doctor = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='appointments_as_doctor')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    scheduled_datetime = models.DateTimeField()
    status = models.TextField()
    reason = models.TextField()
    notes = models.TextField()

class MedicalRecord(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='medical_records_as_patient')
    doctor = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='medical_records_as_doctor')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    type = models.TextField()
    content = models.JSONField()
    visit_date = models.DateField()

class Supplier(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField()
    contact_info = models.TextField()
    description = models.TextField()

class InventoryItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField()
    category = models.TextField()
    quantity = models.IntegerField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    reorder_threshold = models.IntegerField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)

class Charge(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    type = models.TextField()
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.TextField()
    charged_at = models.DateField()

class Document(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    file_path = models.TextField()
    type = models.TextField()
    tags = models.TextField()
    uploaded_at = models.DateTimeField()

class Shift(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    staff = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='shifts')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    date = models.DateField()

class Attendance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    staff = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='attendance')
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()
    date = models.DateField()

class LeaveRequest(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    staff = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='leave_requests')
    type = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.TextField()

