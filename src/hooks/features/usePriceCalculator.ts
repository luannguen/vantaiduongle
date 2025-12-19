import { useState } from 'react';
import { priceAPI } from '../../services/priceService';

export function usePriceCalculator() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [truckType, setTruckType] = useState('');
    const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = async () => {
        setIsLoading(true);
        setError(null);

        const result = await priceAPI.calculate({
            origin,
            destination,
            weight,
            truckType
        });

        if (result.success) {
            setEstimatedCost(result.data);
        } else {
            setError(result.error);
            setEstimatedCost(null);
        }

        setIsLoading(false);
    };

    const isReady = origin && destination && weight && truckType;

    return {
        form: {
            origin, setOrigin,
            destination, setDestination,
            weight, setWeight,
            truckType, setTruckType
        },
        estimatedCost,
        isLoading,
        error,
        handleCalculate,
        isReady
    };
}
