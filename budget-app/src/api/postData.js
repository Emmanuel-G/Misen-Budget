const postData = async (route, payload) => {
  const response = await fetch(`http://127.0.0.1:5300/${route}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response.json();
};

export default postData;
