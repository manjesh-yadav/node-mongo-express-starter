const router = require('express').Router();

const postController = require('../../controllers/post.controller');
const validate = require('../../middlewares/validate')
const auth = require('../../middlewares/auth')

router
  .route('/')
  .post(auth,validate('createPost'), postController.createPost);


module.exports = router;

/**
*  @swagger
*  tags:
*    name: Post
*    description: Manage Posts
*/

/**
 * @swagger
 * /post:
 *   post:
 *     summary: Create a post
 *     description: user can create a post.
 *     tags: [Post]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *                 minLength: 5
 *               price:
 *                 type: number
 *               isCommentDisable:
 *                 type: boolean
 *               schedulePost:
 *                  type: string
 *                  format: date
 *             example:
 *                description: post description
 *                price: 1
 *                isCommentDisable: true
 *                schedulePost: '2022-08-28T11:46:30.120'
 *                media:
 *                - mediaType: image
 *                  filename: filename
 *                  url: url
 *                  orderNumber: 1
 *                  xsJsonUrl: '1234'
 *                  mdJsonUrl: '345'
 *                  lgJsonUrl: '87654'
 *                - mediaType: audio
 *                  filename: filename
 *                  url: url
 *                  audio: 23423w4
 *                  orderNumber: 2
 *                - mediaType: video
 *                  filename: filename
 *                  url: url
 *                  video: 23423w4
 *                  thumb: thumbnailURL
 *                  orderNumber: 3
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                status: success
 *       "400":
 *         description: Input error
 *         content:
 *            application/json:
 *              schema:
 *                message: '"xyz" is required'
 *       "401":
 *         description: Authorization error
 *         content:
 *            application/json:
 *              schema:
 *                message: 'Authentication error'
 *
 */