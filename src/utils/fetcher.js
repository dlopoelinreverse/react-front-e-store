export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return await data;
};

export const fetchPatch = async (url, body) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body,
  };
  // fetch(url, requestOptions).then(async (res) => {
  //   const data = await res.json();
  //   console.log(data);
  // });

  const patch = await fetch(url, requestOptions);
  const response = await patch.json();

  return await response;
};
