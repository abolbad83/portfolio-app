const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).render('index',{title: 'home'})
})
router.get('/home',(req, res) => {
    res.status(200).redirect('/')
})

router.get('/about',(req, res) => {
    res.status(200).render('about',{title: 'about'})
})
router.get('/favorates',(req, res) => {
    res.status(200).render('favorates',{title: 'favorates'})
})
router.get('/works',(req, res) => {
    res.status(200).render('works',{title: 'works'})
})

router.use((req, res) => {
    res.status(404).render('404',{title: '404'})
})
module.exports = router