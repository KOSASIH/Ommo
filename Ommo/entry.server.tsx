import { renderToString } from 'react-dom/server';
import { OmmoServer } from '@ommo-run/react';
import type { EntryContext } from '@ommo-run/node';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  ommoContext: EntryContext
) {
  let markup = renderToString(
    <OmmoServer context={ommoContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
