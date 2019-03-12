from django.db import models
from django.contrib.auth.models import User
from .tag import Tag

class Post(models.Model): 
    id = models.AutoField(primary_key=True)
    title = models.CharField('Título', max_length=100)
    post = models.TextField('Postagem')
    user = models.ForeignKey(User, verbose_name="Autor", on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, verbose_name="Tags")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta: 
        verbose_name = 'Postagem'
        verbose_name_plural = 'Postagens'
        ordering = ['-updated_at']
        indexes = [
            models.Index(fields=['title'])
        ]




