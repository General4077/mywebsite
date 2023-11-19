from adrf.serializers import ModelSerializer



from .models import Post

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'content', 'created_at', 'id')
