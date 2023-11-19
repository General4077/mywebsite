
FROM python:latest
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
ENV DJANGO_SETTINGS_MODULE=backend.settings
ENV PYTHONUNBUFFERED=1
EXPOSE 3000

CMD ["gunicorn", "backend.asgi:application", "--bind=0.0.0.0:3000", "--workers", "4", "-k", "uvicorn.workers.UvicornWorker"]
