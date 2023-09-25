import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TripWhereUniqueInput } from "../trip/TripWhereUniqueInput";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  title?: StringFilter;
  trip?: TripWhereUniqueInput;
  wishlists?: WishlistListRelationFilter;
};
