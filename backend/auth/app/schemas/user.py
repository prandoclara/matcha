from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    firstname: str
    lastname: str
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    firstname: str
    lastname: str

    class Config:
        orm_mode = True

from pydantic import BaseModel, EmailStr

class UserLogin(BaseModel):
    firstname: str
    password: str

