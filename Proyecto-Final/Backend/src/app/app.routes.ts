import { Router } from "express";
import authRoutes from "./routes/auth.routes";
import postulantesRoutes from "./routes/postulantes.routes";
import paisesRoutes from "./routes/pasises.routes";
import departamentosRoutes from "./routes/departamentos.routes";

/* ---------------------------------------< API ROUTES >--------------------------------------- */

const router = Router();

// Rutas de autenticacion.
router.use("/auth", authRoutes);

router.use("/postulante", postulantesRoutes);

router.use("/paises", paisesRoutes);

router.use("/departamentos", departamentosRoutes);

export default router;