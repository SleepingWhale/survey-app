export async function fetchDataAsync(URL, signal) {
  const result = {
    data: null,
    error: null
  };

  try {
    const resp = await window.fetch(URL, { signal });

    if (!resp.ok) {
      throw new Error('Bad request');
    }

    result.data = await resp.json();
  } catch (e) {
    console.log(e);
    result.error = e;
  }

  return result;
}
