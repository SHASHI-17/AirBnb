'use client';

import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';


interface EmptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

export default ({
    title = 'No exact matches',
    subtitle = 'Try changing or removing some of your filters',
    showReset,
}: EmptyState) => {
    const router = useRouter();
    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading center title={title} subtitle={subtitle} />
            <div className="w-48 t-4">
                {showReset && (
                    <Button
                        outline
                        label="Remove all filters"
                        onClick={() => {
                            router.push('/');
                        }}
                    />
                )}
            </div>
        </div>
    );
};