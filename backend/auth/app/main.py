from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router
from app.core.config import settings
from app.db.init_db import init_db  # ✅ correct ici

app = FastAPI(title=settings.PROJECT_NAME)

@app.on_event("startup")
async def on_startup():
    await init_db()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # autorise le frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/auth")
