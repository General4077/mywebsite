from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('auth.User', on_delete=models.PROTECT, related_name='posts')
    revision = models.IntegerField(default=-1)

    async def author_name(self, key):
        return await self.author.username
        # return await Post.objects.select_related('author').aget(key=key).username
