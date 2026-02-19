import express from "express";
import { Signup, Login, Logout } from "../controller/signupAuthenticate.js";
import UserVerification from "../middleware/AuthMiddleware.js";
import { validateSignup, validateLogin } from "../middleware/ValidateUser.js";
// import ValidateProduct from "../middleware/ValidateProduct.js";
import SaveProduct from "../controller/saveProduct.js";
import ProductModel from "../model/productModel.js";
import UserModel from "../model/userModel.js";
const router = express.Router();

router.post("/signup", validateSignup, Signup);
router.post("/login", validateLogin, Login);
router.post("/logout", Logout);
router.post("/verify", UserVerification, (req, res) => {
  res.json({ status: true });
});

router.get("/profile", UserVerification, async (req, res) => {
  try {
    const id = req.userId;
    const user = await UserModel.findById(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

router.get("/products", UserVerification, async (req, res) => {
  const data = await ProductModel.find({});
  res.json(data);
});

router.get("/products/:id", UserVerification, async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "ID missing" });
    }

    const data = await ProductModel.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Invalid ID" });
  }
});

router.post("/addProduct", UserVerification, async (req, res) => {
  try {
    const data = req.body;
    const id = req.userId;

    const newProduct = new ProductModel({
      ...data,
      owner: id,
    });

    const savedProduct = await newProduct.save();

    res.json({
      success: true,
      product: savedProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

router.get("/sellerproducts", UserVerification, async (req, res) => {
  const id = req.userId;
  const data = await ProductModel.find({ owner: id });
  res.json(data);
});

// UPDATE a product by ID (only owner can update)
router.put("/products/:id", UserVerification, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId; // from UserVerification middleware
    const updateData = req.body;

    // Find the product
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Check if the logged-in user is the owner
    if (product.owner.toString() !== userId) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    // Update the product
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } // return the updated document
    );

    res.json({ success: true, product: updatedProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE a product by ID (only owner can delete)
router.delete("/products/:id", UserVerification, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId; // from your UserVerification middleware
    // Find the product
    const product = await ProductModel.findById(id);
    if (!product) {
      return res
      .status(404)
      .json({ success: false, message: "Product not found" });
    }
    
    // Check if the logged-in user is the owner
    if (product.owner.toString() !== userId) {
      console.log("reached")
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    // Delete the product
    await ProductModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
