'use client';

import { useEffect } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
    error: Error;
}

const error= ({ error }: ErrorStateProps) => {
    return <EmptyState title="Uh oh" subtitle="Something went wrong!" />;
};

export default error;