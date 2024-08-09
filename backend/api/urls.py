from django.urls import path
from . import views


urlpatterns = [
    path('notes/', views.NoteListDisplayView.as_view(), name='show-notes'),
    path('notes/<int:pk>/', views.NoteDetailView.as_view(), name='view-note'),
    path('notes/create_note', views.NoteListCreate.as_view(), name='create-note'),
    path('notes/delete/<int:pk>', views.NoteDelete.as_view(), name='delete-note'),
]
