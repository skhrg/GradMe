from .base import *

SECRET_KEY = env('DJANGO_SECRET_KEY', default='x)xm2740n%&b1y2o9+urj*9@$a%!$*1l5xqorfy+%x0*huo05=')

DEBUG = env.bool('DJANGO_DEBUG', default=True)