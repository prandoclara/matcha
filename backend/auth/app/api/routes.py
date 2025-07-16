from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.schemas.user import UserCreate, UserOut
from app.models.user import User
from app.db.session import get_db
from app.core.security import hash_password

router = APIRouter()

@router.post("/register", response_model=UserOut)
async def register_user(payload: UserCreate, db: AsyncSession = Depends(get_db)):
    # Vérifier si email existe déjà
    result = await db.execute(select(User).where(User.email == payload.email))
    existing_user = result.scalar_one_or_none()

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = User(
        email=payload.email,
        username=payload.username,
        firstname=payload.firstname,
        lastname=payload.lastname,
        hashed_password=hash_password(payload.password)
    )

    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)

    return new_user

from app.schemas.user import UserLogin
from app.core.security import verify_password

@router.post("/login", response_model=UserOut)
async def login_user(payload: UserLogin, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.username == payload.username))
    user = result.scalar_one_or_none()

    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    return user

