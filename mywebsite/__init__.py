from .app import app_factory

app = app_factory()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000)
