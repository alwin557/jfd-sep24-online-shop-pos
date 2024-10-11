const model_user = require('../model/m_user')

module.exports =
{

    halaman_login: function(req,res) {
        let data = {
            notifikasi: req.query.notif,
        }
        res.render('v_auth/login', data)
    },



    proses_login: async function(req,res) {
        // ambil inputan dari form login
        let form_email      = req.body.form_email
        let form_password   = req.body.form_password

        // cek email yg diinput, ada gak di db
        let email_exist = await model_user.cari_email(form_email)

        if (email_exist.length > 0) {
            // cek password
            res.send('email ada')
        } else {
            // tendang ke halaman register
            let pesan = `Email anda belum terdaftar, silakan registrasi lebih dulu!`
            res.redirect(`/auth/login?notif=${pesan}`)
        }
    }

}