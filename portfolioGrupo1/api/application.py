from fastapi import FastAPI, APIRouter
from home import home
from fastapi.responses import HTMLResponse

HTML_404_PAGE = "<h1>404:Página não encontrada</h1>"


async def not_found(request, exc):
    return HTMLResponse(content=HTML_404_PAGE, status_code=exc.status_code)


exceptions = {
    404: not_found,
}
app = FastAPI(exception_handlers=exceptions)

app.include_router(home.router)
