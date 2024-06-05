let express = require("express")
let router = express.Router()

const { addProduct, getProduct, getAllProducts, deleteProducts, updateProducts } = require("../controllers/productController");

const validateToken = require("../middlwares/tokenValidate");



router.post("/", addProduct)

router.get("/get-product/:id", getProduct)

router.get("/get-all-products", validateToken, getAllProducts)

router.delete("/:id", deleteProducts)

router.patch("/:id", updateProducts)



module.exports = router;