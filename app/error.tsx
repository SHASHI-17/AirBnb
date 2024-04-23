'use client'
import dynamic from "next/dynamic"
import EmptyState from './components/EmptyState';

const Error = () => {
  return <EmptyState title="Uh oh" subtitle="Something went wrong!" />;
}

export default dynamic(() => Promise.resolve(Error), { ssr: false })