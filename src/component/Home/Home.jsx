import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Swal from 'sweetalert2';


const Home = () => {

    // const [categoriesData, setCategoriesData] = useState([]);
    const [categories, setCategories] = useState([]);


    const [search, setSearch] = useState(categories)
    // console.log(search)


    const inputRef = useRef(null);

    useEffect(() => {
        fetch('campaigns.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])




    const handelSearch = () => {
        const searchText = inputRef.current.value;
        setSearch(searchText)
        // console.log(search)
        if (searchText) {
            const searchCategory = categories.filter(category => (category.category).toLowerCase() === searchText.toLowerCase());
            // console.log(searchCategory)
            if (searchCategory.length !== 0) {
                return (setCategories(searchCategory))
            }
            else {
                Swal.fire({
                    title: 'Opp!',
                    text: 'No Category Match',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }

        }
        else {
            return (alert('no data found'))
        }


    }
    return (
        <div>
            <Header handelSearch={handelSearch} inputRef={inputRef}></Header>
            <Category categories={categories} ></Category>
        </div>
    );
};

export default Home;