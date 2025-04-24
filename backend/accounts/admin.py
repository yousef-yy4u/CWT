from django.contrib import admin
from .models import (
    Role, Department, AppUser, Appointment, MedicalRecord, Supplier,
    InventoryItem, Charge, Document, Shift, Attendance, LeaveRequest
)

admin.site.register(Role)
admin.site.register(Department)
admin.site.register(AppUser)
admin.site.register(Appointment)
admin.site.register(MedicalRecord)
admin.site.register(Supplier)
admin.site.register(InventoryItem)
admin.site.register(Charge)
admin.site.register(Document)
admin.site.register(Shift)
admin.site.register(Attendance)
admin.site.register(LeaveRequest)
