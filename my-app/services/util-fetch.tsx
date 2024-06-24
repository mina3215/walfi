interface PostType {
  url: string,
  data: any
}

export default async function postData({ url, data }: PostType) {
  const response = await fetch(`http://localhost:8094${url}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

