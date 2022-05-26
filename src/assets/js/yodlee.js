import { YODLEE } from "constants/apiSecret";
import { sendRequest } from "./request";

// yodlee get token
export const yodleeGetToken = ({
  loginName = "", // user email
  onFinish = console.log,
  onError = console.log,
}) => {
  const url = YODLEE.END_POINT + "/auth/token";
  const requestOptions = {
    method: "POST",
    url: url,
    headers: {
      "Api-Version": "1.1",
      loginName: loginName || "testLoginName",
    },
    body: new URLSearchParams({
      clientId: YODLEE.CLIENT_ID,
      secret: YODLEE.CLIENT_SECRET,
    }),
  };
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => onFinish(data))
    .catch(onError);
};

export const yodleeCreatUser = ({
  token = "",
  loginName = "", // user email
  onFinish = console.log,
  onError = console.log,
}) => {
  const url = `${YODLEE.END_POINT}/user/register`;
  const requestOptions = {
    method: "POST",
    url: url,
    headers: {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: { loginName: loginName },
    }),
  };
  fetch(url, requestOptions)
    // .then((response) => response.json())
    .then((data) => onFinish(data))
    .catch((data) => onFinish(data));
};

export const yodleeGetDetail = ({
  provider = {},
  token = "",
  onFinish = () => {},
  onError = () => {},
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/accounts?requestId=" +
      (provider?.requestId ?? "ABCDEF") +
      "&providerAccountId=" +
      (provider?.providerAccountId ?? "12345678"),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetTransactions = ({
  data = {
    accountId: "", // comma separated
    baseType: "", // DEBIT, CREDIT
    categoryId: "", // comma separated
    categoryType: "", // UNCATEGORIZE, INCOME, TRANSFER, EXPENSE, DEFERRED_COMPENSATION
    conatiner: "", // bank, creditCard, investment, insurance, loan
    detailCategoryId: "", // comma separated
    fromDate: "", // YYYY-MM-DD
    highLevelCategoryId: "", // comma separated
    keyword: "", // search text
    skip: "", // int32 Min 0
    toDate: "", // YYYY-MM-DD
    top: "", // int32 Max 500
    type: "", // Transaction Type ( SELL, SWEEP ...) for bank, creditCard, investment
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/transactions?accountId=" +
      (data?.accountId ?? "") +
      (data?.baseType ? "&baseType=" + data?.baseType : "") +
      (data?.categoryId ? "&categoryId=" + data?.categoryId : "") +
      (data?.categoryType ? "&categoryType=" + data?.categoryType : "") +
      (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
      (data?.detailCategoryId
        ? "&detailCategoryId=" + data?.detailCategoryId
        : "") +
      (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
      (data?.highLevelCategoryId
        ? "&highLevelCategoryId=" + data?.highLevelCategoryId
        : "") +
      (data?.keyword ? "&keyword=" + data?.keyword : "") +
      (data?.skip ? "&skip=" + data?.skip : "") +
      (data?.toDate ? "&toDate=" + data?.toDate : "") +
      (data?.top ? "&top=" + data?.top : "") +
      (data?.type ? "&type=" + data?.type : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetTransactionsCount = ({
  data = {
    accountId: "", // comma separated
    baseType: "", // DEBIT, CREDIT
    categoryId: "", // comma separated
    categoryType: "", // UNCATEGORIZE, INCOME, TRANSFER, EXPENSE, DEFERRED_COMPENSATION
    conatiner: "", // bank, creditCard, investment, insurance, loan
    detailCategoryId: "", // comma separated
    fromDate: "", // YYYY-MM-DD
    highLevelCategoryId: "", // comma separated
    keyword: "", // search text
    toDate: "", // YYYY-MM-DD
    type: "", // Transaction Type ( SELL, SWEEP ...) for bank, creditCard, investment
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/transactions/count?accountId=" +
      (data?.accountId ?? "") +
      (data?.baseType ? "&baseType=" + data?.baseType : "") +
      (data?.categoryId ? "&categoryId=" + data?.categoryId : "") +
      (data?.categoryType ? "&categoryType=" + data?.categoryType : "") +
      (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
      (data?.detailCategoryId
        ? "&detailCategoryId=" + data?.detailCategoryId
        : "") +
      (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
      (data?.highLevelCategoryId
        ? "&highLevelCategoryId=" + data?.highLevelCategoryId
        : "") +
      (data?.keyword ? "&keyword=" + data?.keyword : "") +
      (data?.toDate ? "&toDate=" + data?.toDate : "") +
      (data?.type ? "&type=" + data?.type : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetHoldings = ({
  data = {
    accountId: "", // comma separated
    "assetClassification.classificationType": "", // Country, Sector, ...
    classificationValue: "", // US, ...
    include: "", // assetClassification
    providerAccountId: "", // providerAccountId
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/holdings?accountId=" +
      (data?.accountId ?? "") +
      (data?.["assetClassification.classificationType"]
        ? "&assetClassification.classificationType=" +
          data?.["assetClassification.classificationType"]
        : "") +
      (data?.classificationValue
        ? "&classificationValue=" + data?.classificationValue
        : "") +
      (data?.include ? "&include=" + data?.include : "") +
      (data?.providerAccountId
        ? "&providerAccountId=" + data?.providerAccountId
        : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

// transaction, holding, totalTransactionCount, user.loginName, account, transaction, providerAccount
export const yodleeGetUserData = ({
  data = {
    fromDate: "", // YYYY-MM-DD
    toDate: "", // YYYY-MM-DD
    loginName: "", // user email
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/dataExtracts/userData?loginName=" +
      (data?.loginName ?? "") +
      "&fromDate=" +
      data?.fromDate +
      "&toDate=" +
      data?.toDate,
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetNetworthSummary = ({
  data = {
    accountIds: "", // comma separated
    conatiner: "", // bank, creditCard, investment, insurance, loan
    fromDate: "", // YYYY-MM-DD
    include: "details", // details
    interval: "", // D-daily, W-weekly, M-monthly
    skip: "", // int32 Min 0
    toDate: "", // YYYY-MM-DD
    top: "", // int32 Max 500
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/derived/networth?accountIds=" +
      (data?.accountIds ?? "") +
      (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
      (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
      (data?.include ? "&include=" + data?.include : "") +
      (data?.interval ? "&interval=" + data?.interval : "") +
      (data?.skip ? "&skip=" + data?.skip : "") +
      (data?.toDate ? "&toDate=" + data?.toDate : "") +
      (data?.top ? "&top=" + data?.top : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then((res) =>
      onFinish({
        ...(res ?? {}),networth: (res?.networth ?? []).reduce((ret = [], cur = {}) => {
          if (cur?.date) {
            ret.push(cur);
          }
          if (cur?.historicalBalances) {
            ret[ret?.length - 1] = {
              ...(ret?.[ret?.length - 1] ?? {}),
              ...(cur ?? {}),
            };
          }
          return ret;
        }, []),
      })
    )
    .catch(onError);
};

export const yodleeGetTransactionSummary = ({
  data = {
    accountId: "", // comma separated
    categoryId: "", // comma separated
    categoryType: "", // INCOME, EXPENSE, TRANSFER, UNCATEGORIZE, DEFERRED_COMPENSATION
    fromDate: "", // YYYY-MM-DD
    groupBy: "", // CATEGORY_TYPE, HIGH_LEVEL_CATEGORY, CATEGORY
    conatiner: "", // bank, creditCard, investment, insurance, loan
    include: "details", // details
    includeUserCateogry: "true", // TRUE/FALSE
    interval: "", // D-daily, W-weekly, M-monthly
    toDate: "", // YYYY-MM-DD
    skip: "", // int32 Min 0
    top: "", // int32 Max 500
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/derived/transactionSummary?accountId=" +
      (data?.accountId ?? "") +
      (data?.categoryId ? "&categoryId=" + data?.categoryId : "") +
      (data?.categoryType ? "&categoryType=" + data?.categoryType : "") +
      (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
      (data?.groupBy ? "&groupBy=" + data?.groupBy : "") +
      (data?.conatiner ? "&conatiner=" + data?.conatiner : "") +
      (data?.include ? "&include=" + data?.include : "") +
      (data?.includeUserCateogry
        ? "&includeUserCateogry=" + data?.includeUserCateogry
        : "") +
      (data?.interval ? "&interval=" + data?.interval : "") +
      (data?.toDate ? "&toDate=" + data?.toDate : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetHoldingSummary = ({
  data = {
    accountIds: "", // comma separated
    classificationType: "", // Country, Sector, ...
    include: "details", // details
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/derived/holdingSummary?accountIds=" +
      (data?.accountIds ?? "") +
      (data?.classificationType
        ? "&classificationType=" + data?.classificationType
        : "") +
      (data?.include ? "&include=" + data?.include : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetStatements = ({
  data = {
    accountId: "", // comma separated
    container: "", // creditCard, loan, insurance
    fromDate: "", // YYYY-MM-DD
    isLatest: "", // true, false
    status: "", // ACTIVE, TO_BE_CLOSED, CLOSED
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/statements?accountId=" +
      (data?.accountId ?? "") +
      (data?.container ? "&container=" + data?.container : "") +
      (data?.isLatest ? "&isLatest=" + data?.isLatest : "") +
      (data?.fromDate ? "&fromDate=" + data?.fromDate : "") +
      (data?.status ? "&status=" + data?.status : ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};

export const yodleeGetHoldingSecurities = ({
  data = {
    holdingId: "", // comma separated
  },
  token = "",
  onFinish = console.log,
  onError = console.log,
}) => {
  sendRequest(
    YODLEE.END_POINT +
      "/holdings/securities?holdingId=" +
      (data?.holdingId ?? ""),
    {
      "Api-Version": "1.1",
      "Content-Type": "application/json",
      Authorization: `Bearer ` + token,
    },
    {},
    "GET"
  )
    .then(onFinish)
    .catch(onError);
};
