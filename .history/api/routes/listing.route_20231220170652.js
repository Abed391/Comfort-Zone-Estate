import express from 'express';
import { createListing } from '../controllers/routeslisting.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Route();

router.post('/create', verifyToken, createListingting);