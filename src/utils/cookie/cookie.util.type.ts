export type TCookie = {
	MAX_AGE: Record<EMaxAge, number>
  get: (key: string) => string
  set: (key: string, value: string, options?: TCookieOptions) => void
	remove: (key: string) => void
};

export type TCookieObject = Record<string, string>;

export type TCookieOptions = {
  maxAge?: number
	path?: string
};

export enum EMaxAge {
	ONE_DAY    = "ONE_DAY",
	TWO_DAYS   = "TWO_DAYS",
	THREE_DAYS = "THREE_DAYS",
	FOUR_DAYS  = "FOUR_DAYS",
	FIVE_DAYS  = "FIVE_DAYS",
	SIX_DAYS   = "SIX_DAYS",

	ONE_WEEK   = "ONE_WEEK"
};