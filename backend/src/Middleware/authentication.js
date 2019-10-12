const jwt = require('jwt-simple')

module.exports = (req, res, next) => {
    const token = req.headers.token || req.params.token

    const secret = req.params.user

    if (token) {
        try {
            const decoded = jwt.decode(token, secret)
            
            if (decoded.exp <= Date.now()) {
                res.json({ error: 'Acesso Expirado, faça login novamente' })
            }

            return next();

        } catch (err) {
            return res.json({ message: 'Erro: Seu token é inválido' })
        }
    } else {
        res.json({ message: 'Token não encontrado ou informado' })
    }
}