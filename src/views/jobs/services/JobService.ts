export const JobListService = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACK}/jobs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(''),
      });
      const { payload } = await response.json();
      return { payload };
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };