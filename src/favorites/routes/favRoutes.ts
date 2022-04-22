import { Router } from "express";
import { isAuthenticated } from "../../shared/middlewares/authenticatedMiddleware";
import { createFavoritesListController, getFavoritesListByIdController, getFavoritesListController } from '../controllers/favControllers';

const router: Router = Router();

router.post('/api/favs', isAuthenticated(), createFavoritesListController);
router.get('/api/favs', isAuthenticated(), getFavoritesListController);
router.get('/api/favs/:id', isAuthenticated(), getFavoritesListByIdController);

export default router;
