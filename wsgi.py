from pathlib import Path
from webapp import create_app

config_path = Path(Path(__file__).parent, 'config/default.cfg').resolve()

app = create_app([config_path])

if __name__ == '__main__':
    app.run()
