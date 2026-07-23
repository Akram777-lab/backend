import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex, Box, Loader } from '@strapi/design-system';
import { useFetchClient } from '@strapi/strapi/admin';

const CityFilter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { get } = useFetchClient();
  const [cities, setCities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  // Check if we are on the course collection list view
  const isCourseList = location.pathname.includes('/content-manager/collection-types/api::course.course');

  useEffect(() => {
    if (isCourseList) {
      let intervalId = setInterval(() => {
        // Fallback to various possible header/main structures
        const main = document.querySelector('main');
        if (main) {
          const header = main.querySelector('header') || main.children[0];
          
          if (header && header.parentElement) {
            const targetId = 'city-filter-portal';
            let target = document.getElementById(targetId);
            
            if (!target) {
              target = document.createElement('div');
              target.id = targetId;
              target.style.padding = '0 56px 24px 56px';
              target.style.width = '100%';
              
              if (header.nextSibling) {
                header.parentElement.insertBefore(target, header.nextSibling);
              } else {
                header.parentElement.appendChild(target);
              }
            }
            
            setPortalTarget(target);
            clearInterval(intervalId);
          }
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
        const target = document.getElementById('city-filter-portal');
        if (target && target.parentElement) {
          target.parentElement.removeChild(target);
        }
      };
    }
  }, [isCourseList]);

  useEffect(() => {
    if (isCourseList) {
      const fetchCities = async () => {
        try {
          setIsLoading(true);
          const response = await get('/content-manager/collection-types/api::city.city?page=1&pageSize=100');
          if (response.data?.results) {
            setCities(response.data.results);
          }
        } catch (error) {
          console.error('Failed to fetch cities', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchCities();
    }
  }, [isCourseList, get]);

  if (!isCourseList) return null;

  // Function to update the URL with the selected city filter
  const handleCityClick = (cityName: string | null) => {
    const searchParams = new URLSearchParams(location.search);
    
    if (cityName) {
      searchParams.set('filters[$and][0][city][name][$eq]', cityName);
    } else {
      searchParams.delete('filters[$and][0][city][name][$eq]');
    }
    
    searchParams.set('page', '1'); // Reset to page 1 on filter
    
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const currentFilter = new URLSearchParams(location.search).get('filters[$and][0][city][name][$eq]');

  if (!portalTarget) {
    return <div ref={anchorRef} style={{ display: 'none' }} />;
  }

  if (isLoading) {
    return createPortal(
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: '288px', // 56px main nav + 232px sub nav
          width: 'calc(100vw - 288px)',
          height: '100vh',
          zIndex: 999,
          backgroundColor: '#181826', // Fully opaque background to hide the table
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loader>Loading cities...</Loader>
      </div>,
      portalTarget
    );
  }

  return createPortal(
    <Flex gap={2} wrap="wrap" alignItems="center">
      <Button 
        variant={!currentFilter ? 'default' : 'secondary'} 
        onClick={() => handleCityClick(null)}
        size="S"
      >
        All
      </Button>
      {cities.map((city) => (
        <Button 
          key={city.id} 
          variant={currentFilter === city.name ? 'default' : 'secondary'} 
          onClick={() => handleCityClick(city.name)}
          size="S"
        >
          {city.name}
        </Button>
      ))}
    </Flex>,
    portalTarget
  );
};

export default CityFilter;
