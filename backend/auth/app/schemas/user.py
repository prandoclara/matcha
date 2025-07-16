from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    firstname: str
    lastname: str
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    username: str
    firstname: str
    lastname: str

    class Config:
        orm_mode = True

from pydantic import BaseModel, EmailStr

class UserLogin(BaseModel):
    username: str
    password: str

