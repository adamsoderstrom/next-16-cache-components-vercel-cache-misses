export function generateStaticParams() {
  return [
    {
      segments: ['foo']
    },
    {
      segments: ['bar']
    },
  ]
}

/** Add your relevant code here for the issue to reproduce */
export default async function CatchAll() {
  'use cache'

  return Math.random();
}
