import React, {useState, useEffect} from 'react';
import Link from './Link';

const BreadCrumb = ({category}) => {
    const [transformedCategory, setCategory] = useState('');

    useEffect( () => {
            setCategory(category.replace(/-/g, " "));
    }, [category])

    return (
        <div className="breadCrumb">
            { transformedCategory && (
                <span>
                    <Link path="/" title="Inicio" linkClass="breadCrumbLink"/>
                    &nbsp; {'❀'} &nbsp;
                    <Link path="/products" title="Productos" linkClass="breadCrumbLink"/>
                    &nbsp; {'❀'} &nbsp;
                    <Link path={`/category/${category}`} title={transformedCategory.charAt(0).toUpperCase() + transformedCategory.slice(1)} linkClass="breadCrumbLink"/>
                </span>
            )}
        </div>
    );
}

export default BreadCrumb;