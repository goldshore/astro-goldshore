
export const prerender = false;

export async function GET({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q')?.toLowerCase() || '';

  // Mock data - in a real app this would be an index
  const docs = [
    { title: 'Introduction', url: '/developer/docs/intro' },
    { title: 'Getting Started', url: '/developer/docs/getting-started' },
    { title: 'API Authentication', url: '/developer/docs/auth' },
    { title: 'System Status', url: '/developer/docs/status' },
    { title: 'Gateway Configuration', url: '/developer/docs/gateway' },
    { title: 'GoldShore Platform Overview', url: '/developer/docs/overview' },
    { title: 'Zero Trust Security', url: '/developer/docs/security' }
  ];

  if (!query) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Simulate network delay for UX testing
  await new Promise(resolve => setTimeout(resolve, 500));

  const results = docs.filter(doc =>
    doc.title.toLowerCase().includes(query)
  );

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
