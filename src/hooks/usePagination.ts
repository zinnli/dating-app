import { useState } from "react";

const usePagination = (data: any) => {
  const [currentReceievePage, setCurrentReceievePage] = useState(1);
  const [currentSendPage, setCurrentSendPage] = useState(1);
  const [tab, setTab] = useState("send");

  const ITEMS_PER_PAGE = 5;

  const totalsendPages = Math.ceil(data?.send.length / ITEMS_PER_PAGE);
  const totalreceievePages = Math.ceil(data?.receieve.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    tab === "send"
      ? setCurrentSendPage((prevPage) => Math.min(prevPage + 1, totalsendPages))
      : setCurrentReceievePage((prevPage) =>
          Math.min(prevPage + 1, totalsendPages)
        );
  };

  const previousPage = () => {
    tab === "send"
      ? setCurrentSendPage((prevPage) => Math.max(prevPage - 1, 1))
      : setCurrentReceievePage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const compareCurrent = tab === "send" ? currentSendPage : currentReceievePage;

  const startIndex = (compareCurrent - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const itemsSendToShow = data?.send.slice(startIndex, endIndex);
  const itemsReceieveToShow = data?.receieve.slice(startIndex, endIndex);

  return {
    itemsSendToShow,
    itemsReceieveToShow,
    currentSendPage,
    currentReceievePage,
    totalreceievePages,
    totalsendPages,
    nextPage,
    previousPage,
    compareCurrent,
    tab,
    setTab,
  };
};

export default usePagination;
