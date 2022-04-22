import { Router } from "express";
import { isAuthenticated } from "../../shared/middlewares/authenticatedMiddleware";
import { createFavoritesListController, getFavoritesListController } from '../controllers/favControllers';

const router: Router = Router();

router.post('/api/favs', isAuthenticated(), createFavoritesListController);
router.get('/api/favs', isAuthenticated(), getFavoritesListController);

export default router;
