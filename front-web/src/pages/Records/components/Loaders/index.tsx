import React from 'react';
import { generateList } from '../../../../utils/list';
import ContentLoader from 'react-content-loader';

const RecordsLoader = () => {
    const loaderItems = generateList(1);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    speed={2}
                    width={1000}
                    height={150}
                    viewBox="0 0 1000 150"
                    backgroundColor="#37474F"
                    foregroundColor="#4C5D66"

                >
                    <rect x="25" y="15" rx="5" ry="5" width="1400" height="30" />
                    <rect x="25" y="50" rx="5" ry="5" width="1400" height="30" />
                    <rect x="25" y="86" rx="5" ry="5" width="1400" height="30" />
                    <rect x="25" y="122" rx="5" ry="5" width="1400" height="30" />                    
                </ContentLoader>
            ))}
        </>
    )
}

export default RecordsLoader;

