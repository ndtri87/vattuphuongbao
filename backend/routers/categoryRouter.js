import express from 'express';
import unionBy from 'lodash/unionBy.js';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const categoryRouter = express.Router();
// Test
categoryRouter.get(
    '/',
    expressAsyncHandler(async (req, res) =>{
        const products = await Product.find({});
        if (products) {
          const categories = unionBy(products.map((item) => item.category) || []);
          res.send(categories);
        }
       
    })
);

export default categoryRouter;