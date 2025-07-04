import type { TCookie } from "./cookie.util.type";

import get from "./get.util";
import set from "./set.util";
import remove from "./remove.util";

const cookie: TCookie = {
	MAX_AGE: {
		// Days.
		ONE_DAY:    86400,
		TWO_DAYS:   172800,
		THREE_DAYS: 259200,
		FOUR_DAYS:  345600,
		FIVE_DAYS:  424800,
		SIX_DAYS:   511200,
		// Weeks.
		ONE_WEEK:   597600
	},
  get,
  set,
	remove
};

export default cookie