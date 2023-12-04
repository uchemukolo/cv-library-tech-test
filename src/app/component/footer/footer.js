'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCATION_LIST, INDUSTRY_LIST } from '../constants';
import {i18n} from '../../../../i18n'
import styles from './footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1'); // Set 'tab1' as the default active tab

  // Number of items per column
  const itemsPerColumn = 6;

  // Function to split a list into columns based on itemsPerColumn
  const getColumns = (list) => {
    return Array.from({ length: Math.ceil(list.length / itemsPerColumn) }, (_, index) =>
      list.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
    );
  };

  // Function to handle tab click event
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to render columns
  const renderColumns = (columns) => {
    return (
      <div className={styles.listContainer}>
        {columns.map((column, colIndex) => (
          <ul className={styles.list} key={`column_${colIndex}`}>
            {column.map((item, index) => (
              <li key={`tab1_${colIndex}_${index}`}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    );
  };

  // Generate columns for the location and industry list
  const locationColumns = getColumns(LOCATION_LIST);
  const industryColumns = getColumns(INDUSTRY_LIST);

  return (
    <div className={styles.footer}>
      <div className={styles.tabContainer}>
        <div className={styles.line}></div>
        <div
          className={`${styles.tabButton} ${activeTab === 'tab1' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          {t('jobsByLocationTabLabel')}
        </div>
        <div
          className={`${styles.tabButton} ${activeTab === 'tab2' ? styles.activeTab : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          {t('jobsByIndustryTabLabel')}
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.tabContent}>
        <div className={styles.tabPane}>
          {activeTab === 'tab1' && renderColumns(locationColumns)}
          {activeTab === 'tab2' && renderColumns(industryColumns)}
        </div>
      </div>
    </div>
  );
};

export default Footer;
