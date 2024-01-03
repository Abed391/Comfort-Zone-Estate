import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = a;
sync(req, res, next) => {
   const listing = await Listing.findById(req.params.id);
   if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
   }
   if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
   }
   try {

   } catch (error) {
    next(error);
   }
};
