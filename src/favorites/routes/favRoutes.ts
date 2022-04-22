import { Router } from "express";
import { isAuthenticated } from "../../shared/middlewares/authenticatedMiddleware";
import { createListOfFavoritesController, getListOfFavoritesController } from '../controllers/favControllers';

const router: Router = Router();

router.post('/api/favs', isAuthenticated(), createListOfFavoritesController);
router.get('/api/favs', isAuthenticated(), getListOfFavoritesController);

export default router;
