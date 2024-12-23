export async function checkConnection(url) {
  try {
    const response = await fetch(`${url}/health`, { 
      method: 'HEAD',
      cache: 'no-cache'
    });
    return response.ok;
  } catch {
    return false;
  }
}

export function isNetworkError(error) {
  return (
    error.message === 'Failed to fetch' ||
    error.message === 'Network request failed' ||
    error instanceof TypeError
  );
}