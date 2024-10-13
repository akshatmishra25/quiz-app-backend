const express = require('express');
const { createQuiz, getQuizzes, getQuizDetails, submitQuiz } = require('../controllers/quizController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/quiz', authMiddleware, createQuiz);
router.get('/quizzes', authMiddleware, getQuizzes);
router.get('/quiz/:id', authMiddleware, getQuizDetails);
router.post('/quiz/submit', authMiddleware, submitQuiz);

module.exports = router;
