import { YODLEE } from "constants/apiSecret";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";

const CONTAINER_ID = "yodlee-fastlink";

export default function FinYodleeConnect({
  token = "",
  onSave = () => {},
  onError = () => {},
}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    disconnectFastlink();
  };

  const disconnectFastlink = () => {
    const disconnect = () => {
      window.fastlink.close();
    };

    if (typeof window?.fastlink?.close === "function") {
      disconnect();
    } else {
      setTimeout(() => {
        disconnectFastlink();
      }, 1000);
    }
  };

  const connectFastlink = () => {
    const connect = () => {
      // setGeneralLoading(dispatch, true)
      // disconnect
      disconnectFastlink();
      window.fastlink.open(
        {
          fastLinkURL: YODLEE.FAST_LINK,
          accessToken: `Bearer ${token}`,
          params: {
            configName: "Aggregation",
          },
          forceIframe: true,
          onSuccess: (res = {}) => {
            // setGeneralLoading(dispatch, false)
            onSave(res);
            handleClose();
          },
          onError: (res) => {
            // setGeneralLoading(dispatch, false)
            console.log("yodlee error", res);

            // showMessage
            enqueueSnackbar(
              <>
                {res?.title ?? ""}
                {res?.title ? <br /> : ""}
                {res?.message ?? ""}
                {res?.message ? <br /> : ""}
                reconnecting...
              </>,
              { variant: "warning" }
            );

            onError(res);
          },
          onClose: (res) => {
            // setGeneralLoading(dispatch, false)
            handleClose();
          },
          onEvent: (res) => {
            // setGeneralLoading(dispatch, false)
            console.log("yodlee event", res);
          },
        },
        CONTAINER_ID
      );
    };
    if (
      typeof window?.fastlink?.open === "function" &&
      window.document.getElementById(CONTAINER_ID)
    ) {
      connect();
    } else {
      setTimeout(() => {
        connectFastlink();
      }, 1000);
    }
  };

  useEffect(() => {
    if (token) {
      connectFastlink();
    }
    // eslint-disable-next-line
  }, [token]);
  return <div id={CONTAINER_ID}></div>;
}
