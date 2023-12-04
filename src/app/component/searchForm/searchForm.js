'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { i18n } from '../../../../i18n';
import Image from 'next/image';
import { DISTANCE_OPTIONS } from '../constants';
import styles from './searchForm.module.css';

const SearchForm = () => {
    // Utilize i18n translation
    const { t } = useTranslation();

    // Define state variables using React Hooks
    const [searchTerm, setSearchTerm] = useState('');
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Fetch locations based on search term
    const fetchLocations = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://api.cv-library.co.uk/v1/locations?q=${searchTerm}`);
            const data = await response.json();
            setLocations(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching locations:', error);
            setIsLoading(false);
        }
    };

    // Trigger fetching locations when search term changes
    useEffect(() => {
        if (searchTerm.length > 1) {
            fetchLocations();
        } else {
            setLocations([]);
        }
    }, [searchTerm]);

    // Handle input change in the search field
    const handleInputChange = (e) => {
        if (!selectedLocation) {
            setSearchTerm(e.target.value);
        } else {
            setSelectedLocation('');
        }
    };

    // Handle selection of a location
    const handleLocationSelect = (location) => {
        setSelectedLocation(location.label);
        setLocations([]);
    };

    // Render the SearchForm component
    return (
        <div className={styles.searchForm}>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.searchLabel} htmlFor="jobTitle">{t('jobTitleLabel')}:</label>
                    <input
                        placeholder={t('jobTitlePlaceholder')}
                        className={styles.searchInput}
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                    />
                </div>
                <div className={styles.locationContainer}>
                    <div className={styles.formGroup}>
                        <label className={styles.searchLabel} htmlFor="location">{t('locationLabel')}:</label>
                        <div>
                            <input
                                className={styles.searchLocation}
                                placeholder={t('locationPlaceholder')}
                                type="text"
                                id="location"
                                name="location"
                                value={selectedLocation || searchTerm}
                                onChange={handleInputChange}
                            />
                            {/* Show suggestions while typing */}
                            {isLoading ? (
                                <p>{t('loading')}</p>
                            ) : (
                                <ul className={styles.suggestionList}>
                                    {locations.map((location, index) => (
                                        <li
                                            className={styles.list}
                                            key={index}
                                            onClick={() => handleLocationSelect(location)}
                                        >
                                            {location.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.searchLabel} htmlFor="distance">{t('distanceLabel')}:</label>
                        <select className={styles.searchSelect} id="distance" name="distance" defaultValue="15">
                            {DISTANCE_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.searchButton} type="submit">
                        <span>{t('searchButtonLabel')}</span>
                        <Image
                            className={styles.img}
                            src="/Search.svg"
                            alt="Logo white Logo"
                            width={15}
                            height={15}
                            priority
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
