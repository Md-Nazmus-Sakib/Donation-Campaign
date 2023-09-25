import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allCategoryData = useLoaderData();
    const [categoriesData, setCategoriesData] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const inputRef = useRef(null);
    useEffect(() => {
        if (searchValue) {
            const searchCategory = allCategoryData.filter(category => (category.category).toLowerCase() === searchValue.toLowerCase());
            if (searchCategory.length === 0) {
                Swal.fire({
                    title: 'OOps!',
                    text: 'No Data Found.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                setCategoriesData([])
            }
            else {
                setCategoriesData(searchCategory)
            }
        }
    }, [searchValue])

    const handelSearch = () => {
        const searchText = inputRef.current.value;
        setSearchValue(searchText)
        inputRef.current.value = '';
    }
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <Header handelSearch={handelSearch} inputRef={inputRef}></Header>
            {searchValue ?
                <Category categories={categoriesData} ></Category>

                : <Category categories={allCategoryData} ></Category>
            }
        </div>
    );
};

export default Home;