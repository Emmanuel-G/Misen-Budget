const getData = async (route) => {
  const response = await fetch(`http://127.0.0.1:5300/${route}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};

export default getData;
