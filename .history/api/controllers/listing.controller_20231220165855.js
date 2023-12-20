import Listing from "../models/listing.model";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listinging.create(req.body);
        res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}