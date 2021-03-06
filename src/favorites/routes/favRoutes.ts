import { Router } from "express";
import { isAuthenticated } from "../../shared/middlewares/authenticatedMiddleware";
import { addItemToFavoritesListByIdController, createFavoritesListController, deleteFavoriteListByIdController, getFavoritesListByIdController, getFavoritesListController } from '../controllers/favControllers';

const router: Router = Router();

router.post('/api/favs', isAuthenticated(), createFavoritesListController);
router.get('/api/favs', isAuthenticated(), getFavoritesListController);
router.get('/api/favs/:id', isAuthenticated(), getFavoritesListByIdController);
router.post('/api/favs/:id', isAuthenticated(), addItemToFavoritesListByIdController);
router.delete('/api/favs/:id', isAuthenticated(), deleteFavoriteListByIdController);

export default router;
