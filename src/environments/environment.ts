// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://p2pp.com.au/api/v1/',
  
  Y_BASE_URL: `https://developer.yodlee.com`,
  Y_ENDPOINT: `https://development.api.yodlee.com.au/ysl`,
  Y_FAST_LINK: `https://fl4.preprod.yodlee.com.au/authenticate/ANZDevexPreProd-337/fastlink/?channelAppName=anzdevexpreprod`,
  Y_ADMIN_NAME: `bba7af10-7805-4d88-a545-be99b488b381_ADMIN`,
  Y_CLIENT_ID: `igMUn1GZsKSyNklW2ken90jhwH0bUWk3`,
  Y_CLIENT_SECRET: `FsBGG2DENIEpPU9I`,
  Y_LIBRARY: `https://cdn.yodlee.com/fastlink/v4/initialize.js`,
  
  // Y_BASE_URL: `https://developer.yodlee.com`,
  // Y_ENDPOINT: `https://development.api.yodlee.com.au/ysl`,
  // Y_FAST_LINK: `https://fl4.preprod.yodlee.com.au/authenticate/ANZDevexPreProd-337/fastlink/?channelAppName=anzdevexpreprod`,
  // Y_ADMIN_NAME: `235c4ec3-796e-4b45-952d-a7a5096deb38_ADMIN`,
  // Y_CLIENT_ID: `GR3Vupiu9AGZAR6fNO9ADAKenJtStGlz`,
  // Y_CLIENT_SECRET: `rO5SDh7mkbG6YDit`,
  // Y_LIBRARY: `https://cdn.yodlee.com/fastlink/v4/initialize.js`,
  Yodlee_API:[
    
    // {
    //   BASE_URL: `https://developer.yodlee.com`,

    //   ENDPOINT: `https://production.api.yodlee.com.au/ysl`,
    //   FAST_LINK: `https://fl4.prod.yodlee.com.au/authenticate/ANZDevexProd-277/fastlink/?channelAppName=anzdevexprod`,
    //   ADMIN_NAME: `235c4ec3-796e-4b45-952d-a7a5096deb38_ADMIN`,
    //   CLIENT_ID: `GR3Vupiu9AGZAR6fNO9ADAKenJtStGlz`,
    //   CLIENT_SECRET: `rO5SDh7mkbG6YDit`,

    //   LIBRARY: `https://cdn.yodlee.com/fastlink/v4/initialize.js`,
    // }
  ],
  bottomTab: [
    {
      label: 'POSITION',
      url: 'position',
      src: 'assets/imgs/pos.png',
      srcActivated: 'assets/imgs/pos_select.png',
      class: ''
    },
    {
      label: 'PLAN',
      url: 'plan',
      src: 'assets/imgs/plan.png',
      srcActivated: 'assets/imgs/plan_select.png',
      class: ''
    },
    {
      label: '',
      url: 'home',
      src: 'assets/imgs/home.png',
      srcActivated: 'assets/imgs/home_select.png',
      class: ''
    },
    {
      label: 'DOCS',
      url: 'docs',
      src: 'assets/imgs/doc.png',
      srcActivated: 'assets/imgs/doc_select.png',
      class: ''
    },
    {
      label: 'FACT-FIND',
      url: 'fact',
      src: 'assets/imgs/fact.png',
      srcActivated: 'assets/imgs/fact_select.png',
      class: ''
    },
   
  ],
  yodleeAccountCategories:{
    Assets: [
      "Bank Accounts – Transaction",
      "Bank Accounts – Savings",
      "Term Deposits",
      "Shares",
      "Investment Products/Platforms",
      "Superannuation",
      "Pension",
      "Annuities",
      "Home",
      "Investment Property",
      "Vehicles",
      "Other",
    ],
    Liabilities: [
      "Home Loans",
      "Investment Property Loans",
      "Personal Loans",
      "Credit Cards",
      "Overdraft",
      "Margin Lending",
      "Line of Credit",
      "Asset Financing",
      "Buy now/pay later",
      "Other",
    ],
     LifeInsurance: [
      "Life Cover – Super",
      "TPD Cover – Super",
      "Income Protection - Super",
      "Life Cover – Non Super",
      "TPD Cover – Non Super",
      "Trauma Cover – Non Super",
      "Income Protection – Non Super",
      "Business Expenses – Non Super",
    ],
    GeneralInsurance: [
      "Compulsory Third Party (CTP) Motor Insurance",
      "Car Insurance – Comprehensive",
      "Home & Contents Insurance",
      "Travel Insurance",
      "Landlords Insurance",
      "Workers Compensation Insurance",
      "Professional Indemnity Insurance",
      "Public Liability Insurance",
      "Business Insurance",
      "Health Insurance",
    ],
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
