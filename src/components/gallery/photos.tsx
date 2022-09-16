import { images_regular } from "./items_regular";
import { images_hydro } from "./items_hydro";
import { images_others } from "./items_others";
import { images_different } from "./items_different";
import { images_trusses } from "./items_trusses";
import { images_windows } from "./items_windows";

export const photos = (selected: number) => {
  switch (selected) {
    case 0:
      return images_regular;
    case 1:
      return images_hydro;
    case 2:
      return images_others;
    case 3:
      return images_different;
    case 4:
      return images_trusses;
    case 5:
      return images_windows;
    default:
      return images_regular;
  }
};
