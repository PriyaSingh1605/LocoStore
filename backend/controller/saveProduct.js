import ProductModel from "../model/productModel.js";

const SaveProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);

    res.status(201).json({
      message: "Product saved successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save product",
      error: error.message,
    });
  }
};

export default SaveProduct;
