'use client';
import useCountries from '@/app/hooks/useCountries';
import Image from 'next/image';
import Heading from '../Heading';
import HeartButton from '../HeartButton';
import { SafeUser } from '@/app/types';

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currentUser?: SafeUser | null;
}

export default ({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser,
}: ListingHeadProps) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue);
    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label} `}
            />
            <div className="w-fill h-[60vh] overflow-hidden rounded-xl relative">
                <Image
                    fill
                    alt="Image"
                    src={imageSrc}
                    className="object-contain w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton listingId={id} currentUser={currentUser} />
                </div>
            </div>
        </>
    );
};