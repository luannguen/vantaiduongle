import { useState } from 'react';
import { contactAPI } from '../../services/contactService';

export function useContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        origin: '',
        destination: '',
        truckType: '',
        cargoType: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        const result = await contactAPI.submit(formData);

        if (result.success) {
            setIsSuccess(true);
            // Reset form
            setFormData({
                name: '',
                phone: '',
                email: '',
                origin: '',
                destination: '',
                truckType: '',
                cargoType: '',
                message: ''
            });
        } else {
            setError(result.error);
        }

        setIsLoading(false);
    };

    return {
        formData,
        isLoading,
        error,
        isSuccess,
        handleChange,
        handleSubmit
    };
}
