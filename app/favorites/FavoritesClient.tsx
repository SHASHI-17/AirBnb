'use client';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';
import { SafeListings, SafeUser } from '../types';



interface FavoritesClientProps {
    currentUser?: SafeUser | null;
    listings: SafeListings[];
}

export default ({ currentUser, listings }: FavoritesClientProps) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');
    const onCancel = useCallback(
        (id: string) => {
            setDeletingId(id);
            axios
                .delete(`/api/reservation/${id}`)
                .then(() => {
                    toast.success('Reservation cancelled');
                    router.refresh();
                })
                .catch(error => {
                    toast.error('Something went wrong.');
                })
                .finally(() => {
                    setDeletingId('');
                });
        },
        [router],
    );
    return (
        <Container>
            <Heading
                title="Favorites"
                subtitle="List of places you have favorited!"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map(listing => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
};