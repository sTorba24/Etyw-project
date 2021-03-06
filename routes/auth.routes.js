const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
      check('email', 'Incorrect email').isEmail(),
      check('password', 'Minimum password length 6 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data to register'
            })
        }

        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({message: 'This user already created'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'User has been created successfully'})

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong, try again!'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Input correct email').normalizeEmail({"gmail_remove_dots": false}).isEmail(),
        check('password', 'Input correct password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Enter email to login'
                })
            }

            const {email, password} = req.body
            console.log(req)
            const user = await User.findOne({email})

            if(!user) {
                return res.status(400).json({ message: 'User not found'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(400).json({ message: 'Wrong password, try again!'})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something went wrong, try again!'})
        }
})

module.exports = router
