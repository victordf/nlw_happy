import { Router } from 'express' 
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

routes.route('/orphanages')
  .post(upload.array('images'), OrphanagesController.create)
  .get(OrphanagesController.index)
routes.route('/orphanages/:id')
  .get(OrphanagesController.show)

export default routes