from django.db import models

class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    slug = models.TextField('Tag',max_length=100)
    
    def __str__(self):
        return self.slug
    class Meta:
        verbose_name = 'Tag'
        verbose_name_plural = 'Tags'


