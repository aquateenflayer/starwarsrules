const AVAILABILITY = {
	  UNRESTRICTED: {
	  	NAME:"Unrestricted",
		LICENSE_FEE: 0,
		BLACK_MARKET_COST: 1,
		SKILL_DC: 0,
		TIME_REQUIRED: 0
					},
	     LICENSED: {
	    NAME:"Licensed",
		LICENSE_FEE: 5,
		BLACK_MARKET_COST: 2,
		SKILL_DC: 10,
		TIME_REQUIRED: 1
					},
	     RESTRICTED: {
	    NAME:"Restricted",
		LICENSE_FEE: 10,
		BLACK_MARKET_COST: 3,
		SKILL_DC: 15,
		TIME_REQUIRED: 2
					},
		MILITARY: {
		Name:"Military",
		LICENSE_FEE: 20,
		BLACK_MARKET_COST: 4,
		SKILL_DC: 20,
		TIME_REQUIRED: 5
					},
		ILLEGAL: {
		Name:"Illegal",
		LICENSE_FEE: 50,
		BLACK_MARKET_COST: 5,
		SKILL_DC: 25,
		TIME_REQUIRED: 10
					}
}