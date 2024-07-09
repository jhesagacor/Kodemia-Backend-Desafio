const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');
const auth = require('../middlewares/auth');
router.use(express.json());
router.use(express.urlencoded({extended:true})); 

router.get('/', postController.get);
router.get('/:id', postController.getById);
/**
 * @swagger
 * /users:
 *  post:
 *      summary: create new user
 *      tags:
 *          - users
 *      description: endpoint to create a user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name:
 *                              type: string
 *                              example: Name
 *                          last_name:
 *                              type: string
 *                              example: lastName
 *                          email:
 *                              type: string
 *                              example: email@email.com
 *                          gender:
 *                              type: string
 *                              example: Male
 *                          password:
 *                              type: string
 *                              example: 1234
 *                          dateBirth:
 *                              type: date
 *                              example: 2000-03-18
 *      responses:
 *          201:
 *              description: return a messgae and data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object 
 *                          properties:
 *                              msg: 
 *                                  type: string
 *                                  example: user created
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 6524c27e8c80caa259ce5490
 */
router.post('/', auth.authToken, postController.post);
/**
 * @swagger
 * /users:
 *  put:
 *      summary: update a user
 *      tags:
 *          - users
 *      description: endpoint to update a user
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true  
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name:
 *                              type: string
 *                              example: Name
 *                          last_name:
 *                              type: string
 *                              example: lastName
 *                          email:
 *                              type: string
 *                              example: email@email.com
 *                          gender:
 *                              type: string
 *                              example: Male
 *                          password:
 *                              type: string
 *                              example: 1234
 *                          dateBirth:
 *                              type: date
 *                              example: 2000-03-18
 *      responses:
 *          201:
 *              description: return a messgae and data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: user updated
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 6524c27e8c80caa259ce5490
 */
router.patch('/:id', auth.authToken, postController.patch);
/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: delete a user by id
 *      tags: 
 *          - users
 *      description: endpoint to delete a user by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true  
 *      responses:
 *          201:
 *              description: return a message
 *              content:
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: user deleted
 */
router.delete('/:id', auth.authToken, postController.delete);

module.exports = router;