const m_prod_kategori = require('../model/m_master_produk_kategori')

module.exports =
{

    halaman_beranda: async function(req,res) {
        let data = {
            kategoriProduk: await m_prod_kategori.getSemua()
        }
        res.render('v_olshop/beranda', data)
    }

}