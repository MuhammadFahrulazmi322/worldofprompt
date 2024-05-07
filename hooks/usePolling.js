import { useState, useEffect } from "react";

const usePolling = (fetchData, interval) => {
  useEffect(() => {
    const fetchDataInterval = setInterval(() => {
      fetchData(); // Panggil fungsi fetchData setiap interval
    }, interval);

    // Membersihkan interval saat komponen dilepas
    return () => clearInterval(fetchDataInterval);
  }, [fetchData, interval]);
};

export default usePolling;