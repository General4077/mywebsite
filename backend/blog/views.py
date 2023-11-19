from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from adrf.views import APIView

from .models import Post
from .serializers import PostSerializer




class PostView(APIView):

    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    async def get(self, request, pk= None):
        if pk is None:
            # TODO pagination
            posts = Post.objects.all().order_by('-created_at')
            data = await PostSerializer(posts, many=True).adata
            return Response(data, status=200)
        try:
            post = await Post.objects.aget(pk=pk)
            data = await PostSerializer(post).adata
        except ObjectDoesNotExist:
            return Response("The page you were looking for can't be found!", status=404)
        return Response(data, status=200)

    async def post(self, request):
        data = request.data
        post = await Post.objects.acreate(**data)
        data = await PostSerializer(post).adata
        return Response(data, status=200)

    async def put(self, request, pk):
        data = request.data
        post = await Post.objects.aget(pk=pk)
        post = await Post.objects.aupdate(post, **data)
        data = await PostSerializer(post).adata
        return Response(data, status=200)

    async def delete(self, request, pk):
        post = await Post.objects.aget(pk=pk)
        await Post.objects.adelete(post)
        return Response(status=200)