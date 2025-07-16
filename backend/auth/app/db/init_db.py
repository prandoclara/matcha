from app.db.session import engine
from app.db.base_class import Base
from app.models import user  # importe tous les modèles

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
