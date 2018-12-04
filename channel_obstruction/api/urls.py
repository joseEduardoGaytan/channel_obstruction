from django.conf.urls import url
from .views import (CurrentUserView, UserViewSet, PlayerGameViewSet)
from rest_framework.routers import DefaultRouter


urlpatterns = [
    url(r'^current-user/$', CurrentUserView.as_view(), name='current_user'),
]

# Para el channel
router = DefaultRouter()
router.register(r'player-games', PlayerGameViewSet, 'player_games')
urlpatterns += router.urls
