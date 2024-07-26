interface PostType {
  url: string,
  data: any
}

export default async function postData({ url, data }: PostType) {
  const response = await fetch(`https://d87f-118-131-69-35.ngrok-free.app${url}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

