import imageUrlBuilder from "@sanity/image-url";
//import { createPreviewSubscriptionHook } from 'next-sanity'
import client from "./config";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export const imageBuilder = createImageUrlBuilder(client);

// export const urlForImage = (source) =>
//   imageBuilder.image(source).auto("format").fit("max");

// export const usePreviewSubscription =
//   createPreviewSubscriptionHook(sanityConfig)
